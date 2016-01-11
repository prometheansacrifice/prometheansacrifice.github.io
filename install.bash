#! /bin/bash

npm install http-server -g
mkdir dist
jade src/jade/index.jade --out dist/ --obj src/options.json
gem install compass
compass compile src/sass/main.scss --production --config config.rb
cp -R fonts dist/fonts
cp -R mocks-and-assets/images dist/images
cd dist
http-server -p 3000
