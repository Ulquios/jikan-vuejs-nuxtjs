import jikanjs from 'jikanjs'

const API_URL = 'https://api.jikan.moe/v3'

jikanjs.settings.setBaseURL(API_URL);

export default class APIClient {

  // Get the 30s most popular games from IGDB + V3
  static getTopAnimes () {
    return new Promise((resolve, reject) => {
      jikanjs.loadTop('anime').then((response) => {
        resolve(response.top);
      }).catch((err) => {
        console.error(err); // in case a error happens
        reject(err);
      });
    })
  }

  static searchAnime (animeTitle) {
    return new Promise((resolve, reject) => {
      jikanjs.search('anime', animeTitle).then((response) => {
        resolve(response.results);
      }).catch((err) => {
        console.error(err); // in case a error happens
        reject(err);
      });
    })
  }
}
