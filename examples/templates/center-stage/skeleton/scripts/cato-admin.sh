#!/bin/sh
set -eu

usage() {
  echo "usage: cato-admin.sh {grant|revoke|list|dedup|genkey} [value]" >&2
  exit 1
}

remote_exec() {
  if [ -z "${TARGET_HOST:-}" ] || [ -z "${TARGET_USER:-}" ]; then
    echo "TARGET_HOST and TARGET_USER must be set for remote operations" >&2
    exit 1
  fi

  TARGET_PORT="${TARGET_PORT:-22}"
  SYSTEM_KEY_PATH="${SYSTEM_KEY_PATH:-/etc/ssh/cato-system}"

  ssh \
    -o StrictHostKeyChecking=no \
    -o UserKnownHostsFile=/dev/null \
    -i "$SYSTEM_KEY_PATH" \
    -p "$TARGET_PORT" \
    "$TARGET_USER@$TARGET_HOST" \
    sh -s -- "$@" <<'REMOTE'
set -eu

action="$1"
value="${2:-}"
mkdir -p "$HOME/.ssh"
touch "$HOME/.ssh/authorized_keys"
chmod 700 "$HOME/.ssh"
chmod 600 "$HOME/.ssh/authorized_keys"

case "$action" in
  grant)
    if [ -z "$value" ]; then
      echo "public key is required" >&2
      exit 1
    fi
    if ! grep -qxF "$value" "$HOME/.ssh/authorized_keys"; then
      printf '%s\n' "$value" >> "$HOME/.ssh/authorized_keys"
    fi
    cat "$HOME/.ssh/authorized_keys"
    ;;
  revoke)
    if [ -z "$value" ]; then
      echo "public key is required" >&2
      exit 1
    fi
    tmpfile="$(mktemp)"
    trap 'rm -f "$tmpfile"' EXIT INT TERM
    grep -vxF "$value" "$HOME/.ssh/authorized_keys" > "$tmpfile" || true
    mv "$tmpfile" "$HOME/.ssh/authorized_keys"
    chmod 600 "$HOME/.ssh/authorized_keys"
    cat "$HOME/.ssh/authorized_keys"
    ;;
  list)
    cat "$HOME/.ssh/authorized_keys"
    ;;
  dedup)
    tmpfile="$(mktemp)"
    trap 'rm -f "$tmpfile"' EXIT INT TERM
    awk '!seen[$0]++' "$HOME/.ssh/authorized_keys" > "$tmpfile"
    mv "$tmpfile" "$HOME/.ssh/authorized_keys"
    chmod 600 "$HOME/.ssh/authorized_keys"
    cat "$HOME/.ssh/authorized_keys"
    ;;
  *)
    echo "unsupported remote action: $action" >&2
    exit 1
    ;;
esac
REMOTE
}

generate_key() {
  email="${1:-center-stage@example.com}"
  workdir="$(mktemp -d)"
  trap 'rm -rf "$workdir"' EXIT INT TERM
  ssh-keygen -q -t ed25519 -C "$email" -N "" -f "$workdir/id_ed25519" >/dev/null
  cat "$workdir/id_ed25519.pub"
}

action="${1:-}"
value="${2:-}"

case "$action" in
  grant|revoke|list|dedup)
    remote_exec "$action" "$value"
    ;;
  genkey)
    generate_key "$value"
    ;;
  *)
    usage
    ;;
esac
