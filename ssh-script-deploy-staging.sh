#!/bin/bash
set -e

cd /home/sinpai/domains/staging.fefaq.pl/public_nodejs
npm i -f
echo "👉 Restarting…"
devil www restart staging.fefaq.pl
echo "👉 Fetching…"
curl -I staging.fefaq.pl