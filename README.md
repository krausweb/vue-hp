# vue-hp

> A Home Page + Vue.js(2.5) with Browserify + Vue Loader + Highcharts.js

## Additional

> Used a Gulp + Sass + Autoprefixer + Normalize

## According to Mockup

![Mockup](./mockup.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

## Development

``` bash
# build sass to css, vendor's js files, image minimizing, generating font types, start watching
gulp default

# generation common CSS files
gulp cssCommon

# generating all major browser fonts (woff, woff2, eot, ttf)
gulp fonts
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
