#!/bin/sh
# Patches esbuild to work on Linux arm64 when node_modules was installed on macOS.
# Runs automatically via the postinstall hook in package.json.
# Safe to run on macOS too — all changes are guarded by platform checks.

if [ "$(uname -s)" != "Linux" ]; then
  exit 0
fi

MAIN_JS="node_modules/esbuild/lib/main.js"
ESBUILD_PKG="node_modules/@esbuild"
LINUX_BIN_CANDIDATES="
  /usr/local/lib/node_modules_global/lib/node_modules/tsx/node_modules/@esbuild/linux-arm64
  /usr/local/lib/node_modules/tsx/node_modules/@esbuild/linux-arm64
  /usr/lib/node_modules/tsx/node_modules/@esbuild/linux-arm64
"

# 1. Patch main.js version check to allow linux-arm64 binary version mismatch
if [ -f "$MAIN_JS" ]; then
  if ! grep -q 'process.platform !== "linux"' "$MAIN_JS"; then
    sed -i 's/if (binaryVersion !== "0\.25\.9")/if (binaryVersion !== "0.25.9" \&\& process.platform !== "linux")/' "$MAIN_JS"
    sed -i 's/--service=${"0\.25\.9"}/--service=${process.platform === "linux" ? "0.27.3" : "0.25.9"}/' "$MAIN_JS"
    echo "[patch-esbuild] Patched $MAIN_JS for Linux arm64 compatibility"
  else
    echo "[patch-esbuild] $MAIN_JS already patched, skipping"
  fi
fi

# 2. Symlink @esbuild/linux-arm64 from system tsx installation if not present
if [ ! -e "$ESBUILD_PKG/linux-arm64" ]; then
  for CANDIDATE in $LINUX_BIN_CANDIDATES; do
    if [ -f "${CANDIDATE}/bin/esbuild" ]; then
      ln -sf "$CANDIDATE" "$ESBUILD_PKG/linux-arm64"
      echo "[patch-esbuild] Symlinked $CANDIDATE -> $ESBUILD_PKG/linux-arm64"
      break
    fi
  done
  if [ ! -e "$ESBUILD_PKG/linux-arm64" ]; then
    echo "[patch-esbuild] WARNING: could not find a linux-arm64 esbuild binary. Install tsx globally: npm install -g tsx"
  fi
else
  echo "[patch-esbuild] $ESBUILD_PKG/linux-arm64 already exists, skipping"
fi

# 3. Create @rollup/rollup-linux-arm64-gnu shim pointing to @rollup/wasm-node
ROLLUP_SHIM="node_modules/@rollup/rollup-linux-arm64-gnu"
if [ ! -f "$ROLLUP_SHIM/index.js" ]; then
  mkdir -p "$ROLLUP_SHIM"
  cat > "$ROLLUP_SHIM/package.json" << 'PKGJSON'
{
  "name": "@rollup/rollup-linux-arm64-gnu",
  "version": "4.59.0",
  "description": "Linux arm64 shim - delegates to @rollup/wasm-node for VM compatibility",
  "main": "index.js"
}
PKGJSON
  cat > "$ROLLUP_SHIM/index.js" << 'INDEXJS'
// Linux arm64 shim: delegates to @rollup/wasm-node when native binary is unavailable
module.exports = require('@rollup/wasm-node/dist/native.js');
INDEXJS
  echo "[patch-esbuild] Created rollup linux-arm64-gnu shim -> @rollup/wasm-node"
else
  echo "[patch-esbuild] rollup linux-arm64-gnu shim already exists, skipping"
fi
