#! /bin/bash

npm install http-server -g
mkdir -p dist
npm run pug &&
gem install compass &&
compass compile src/sass/main.scss --config config.rb &&
cp -R fonts dist/css/fonts &&
cd dist &&
http-server -p 3000
