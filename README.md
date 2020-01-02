# vue-contentful-api

A small wrapper for integrating contentful to Vuejs

## How to install:
```bash
npm install --save contentful vue-contentful-api
```

And in your entry file:
```js
import * as Contentful from 'contentful'
import VueContentfulApi from 'vue-contentful-api'

let contentful = Contentful.createClient({
    space: 'SPACE-ID',
    accessToken: 'ACCESS-TOKEN',
})

Vue.use(VueContentfulApi, contentful)
```

## Usage:
This wrapper bind `contentful` to `Vue` or `this` if you're using single file component.

You can use `contentful` like this:
```js
Vue.contentful.getEntries().then((response) => {
  console.log(response)
})

this.contentful.getEntries().then((response) => {
  console.log(response)
})
```
