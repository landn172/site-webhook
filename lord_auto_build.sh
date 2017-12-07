#! /bin/bash

SITE_PATH='/home/lord'

cd $SITE_PATH

git reset --hard origin/master
git clean -f
git pull
git checkout master

echo 'git pull end'

npm install 
npm run build 
pm2 restart pm2.json

echo 'pm2 restart success'
