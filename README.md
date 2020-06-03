# anime-web-jikan

> Example project of a web app using [JIKAN API](https://api.igdb.com/)

> /!\ Since IGDB's API has been upgraded to V3, this project has CORS issues. May not work properly.

> Display popular games from IGDB or search for a specific one.

![alt text](https://cdn.discordapp.com/attachments/570620252355035136/717723043379806218/unknown.png)

> Project using [Nuxt.js](https://nuxtjs.org/), [Vuetify](https://vuetifyjs.com/) and [Vue.js](https://vuejs.org/)


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

> In order to make it work with [IGDB's API](https://api.igdb.com/) in a local environment, you need to handle the CORS with a proxy. May also work with a plugin such as this [Chrome's plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en).

> You can use your own USER_KEY given by IGDB to use the API by replacing the one in /API/APIClient.js.

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
