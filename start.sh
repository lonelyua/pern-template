#!/bin/bash

set -e

cd "$(dirname "$0")"
set -a
. ./.env
set +a

check_error() {
    if [ $? -ne 0 ]; then
        echo "Error: $1 failed"
        exit 1
    fi
}

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

NODE_VERSION=$(node -p "require('./package.json').engines.node")
APP_NAME=$(node -p "require('./package.json').name")

# 1. Check if the app is already running
if pm2 list | grep -q $APP_NAME; then
    app_status=$(pm2 show $APP_NAME | grep "status" | awk '{print $4}')
    if [ "$app_status" = "online" ]; then
        echo "Application $APP_NAME is already running."
    else
        echo "Application $APP_NAME is stopped. Restarting..."
        pm2 restart $APP_NAME
    fi
else
    # 2. Switch Node.js version
    echo "Switching Node.js version to $NODE_VERSION..."
    nvm use $NODE_VERSION
    check_error "Switching Node.js version"

    # 3. Start Production
    echo "Starting Production..."
    pm2 start ./server/build/bundle.js --name $APP_NAME --watch
    check_error "Starting application"
fi

# 4. Open the browser
xdg-open "http://localhost:$SERVER_PORT"
