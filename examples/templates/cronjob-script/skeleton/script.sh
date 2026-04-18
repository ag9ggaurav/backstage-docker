#!/bin/sh
# ${{ values.name }} — ${{ values.description }}
# Managed by Backstage scaffolder. Edit this file to implement your logic.

set -euo pipefail

log() { echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] $1"; }

log "Starting ${{ values.name }}"

# ── your logic here ──────────────────────────────────────────


# ─────────────────────────────────────────────────────────────

log "${{ values.name }} completed successfully"
