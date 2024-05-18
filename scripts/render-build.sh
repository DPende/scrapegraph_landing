#!/usr/bin/env bash
# exit on error
set -o errexit

export REACT_APP_PUBLIC_KEY=$YOUR_PUBLIC_KEY
export REACT_APP_SERVICE_ID=$YOUR_SERVICE_ID
export REACT_APP_TEMPLATE_ID=$YOUR_TEMPLATE_ID

npm install
npm run build