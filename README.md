# vue-contentful-api

A small wrapper for integrating contentful to Vuejs

## How to install:
```bash
npm install --save contentful vue-contentful-api
```

And in your entry file:
```js
import * as Contentful from 'contentful'
import VueContentful from 'vue-contentful-api'

let contentful = Contentful.createClient({
    space: 'SPACE-ID',
    accessToken: 'ACCESS-TOKEN',
})

Vue.use(VueContentful, contentful)
```
