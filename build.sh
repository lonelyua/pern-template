#!/bin/bash

set -e

cd "$(dirname "$0")"

check_error() {
    if [ $? -ne 0 ]; then
        echo "Error: $1 failed"
        exit 1
    fi
}

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 1. Switch to master
echo "Switching to master branch..."
git checkout master
check_error "Git checkout master"

# 2. Get updates
echo "Pulling latest changes from origin master..."
git pull origin master
check_error "Git pull from origin master"

# 3. Switch Node.js version
NODE_VERSION=$(node -p "require('./package.json').engines.node")
echo "Switching Node.js version to $NODE_VERSION..."
nvm use $NODE_VERSION
check_error "Switching Node.js version"

# 4. Install depencies
echo "Installing dependencies..."
npm ci
check_error "NPM install"

# 5. Build client
echo "Client build..."
npm run client:build
check_error "Client build"

# 6. Build server
echo "Server build..."
npm run be:server
check_error "Server build"

echo "Building completed successfully!"