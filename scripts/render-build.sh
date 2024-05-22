#!/usr/bin/env bash
# exit on error
set -o errexit

export REACT_APP_PUBLIC_KEY=$EMAILJS_PUBLIC_KEY
export REACT_APP_SERVICE_ID=$EMAILJS_SERVICE_ID
export REACT_APP_TEMPLATE_ID=$EMAILJS_TEMPLATE_ID

npm run build