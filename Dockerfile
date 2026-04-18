################################################################################
# Stage 1 – Dependency skeleton (optimizes Docker layer caching)
# Only package.json / yarn.lock / .yarnrc.yml are copied here.
# The install layer in stage 2 is only invalidated when those files change,
# not when application source changes.
################################################################################
FROM node:20.11.1-slim AS packages

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY packages packages
COPY plugins plugins

RUN find packages ! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} + && \
  find plugins ! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} +

################################################################################
# Stage 2 – Full install + backend build
# node:20.11.1-slim is Debian (glibc) — isolated-vm compiles and links against glibc.
################################################################################
FROM node:20.11.1-slim AS build

RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  python3 \
  git \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare yarn@4.4.1 --activate

WORKDIR /app
RUN chown -R node:node /app
USER node

# Copy skeleton (package.json tree + lockfile + .yarnrc.yml with logFilters)
COPY --from=packages --chown=node:node /app ./

# Full install.
# --mount=type=cache persists Yarn's download cache on the Docker host between
# builds. When yarn.lock changes (new package added), only the new package is
# fetched from the network; everything else is served from the host-side cache.
RUN --mount=type=cache,id=yarn-berry-cache,target=/tmp/yarn-global,uid=1000,gid=1000 \
    YARN_GLOBAL_FOLDER=/tmp/yarn-global yarn install --immutable --inline-builds

# Copy full source AFTER install so source-only changes hit the install cache
COPY --chown=node:node . .

RUN yarn --cwd packages/backend build

RUN mkdir -p packages/backend/dist/skeleton packages/backend/dist/bundle && \
  tar xzf packages/backend/dist/skeleton.tar.gz -C packages/backend/dist/skeleton && \
  tar xzf packages/backend/dist/bundle.tar.gz -C packages/backend/dist/bundle

################################################################################
# Stage 3 – Runtime image (production deps only, no devDeps)
# Must stay Debian (glibc) to match the isolated-vm binary compiled in stage 2.
################################################################################
FROM node:20.11.1-slim AS runtime

RUN apt-get update && apt-get install -y --no-install-recommends \
  ca-certificates \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare yarn@4.4.1 --activate

WORKDIR /app
RUN chown -R node:node /app
USER node

# skeleton/ contains a stripped package.json tree (production deps only).
# Reinstalling here gives a clean node_modules with no devDeps in the image.
COPY --from=build --chown=node:node \
  /app/package.json \
  /app/yarn.lock \
  /app/.yarnrc.yml \
  ./
COPY --from=build --chown=node:node /app/packages/backend/dist/skeleton/ ./

RUN --mount=type=cache,id=yarn-berry-cache,target=/tmp/yarn-global,uid=1000,gid=1000 \
    YARN_GLOBAL_FOLDER=/tmp/yarn-global yarn workspaces focus --all --production

COPY --from=build --chown=node:node /app/packages/backend/dist/bundle/ ./
COPY --chown=node:node app-config.yaml app-config.production.yaml ./
COPY --from=build --chown=node:node /app/examples ./examples

ENV NODE_ENV=production
EXPOSE 7007
CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
