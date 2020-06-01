<template>
  <v-container fluid>
    <v-layout align-start row>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="gameName" label="Game name" solo></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-btn color="accent" style="height:48px;margin-top:0;" v-on:click="searchGames()">Search</v-btn>
      </v-flex>
    </v-layout>

    <div class="intro">{{ intro }}</div>

    <v-container fluid grid-list-md px-0>
      <v-layout row wrap>

        <v-flex xs12 sm8 md6 lg4 v-if="datas.length < 1">
          <a style="text-decoration: none;" target="_blank">
            <v-card class="card hvr-grow" pa-10>
              <v-img  style="height:200px" class="img" src="https://media.comicbook.com/2019/01/mk11-1154821.jpeg"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Mortal kombat 11</h3>
                  <div>A very good fighting game</div>
                </div>
              </v-card-title>
            </v-card>
          </a>
        </v-flex>
        <v-flex xs12 sm8 md6 lg4 v-if="datas.length < 1">
          <a style="text-decoration: none;" target="_blank">
            <v-card class="card hvr-grow" pa-10>
              <v-img  style="height:200px" class="img" src="https://media.comicbook.com/2019/01/mk11-1154821.jpeg"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Mortal kombat 11</h3>
                  <div>A very good fighting game</div>
                </div>
              </v-card-title>
            </v-card>
          </a>
        </v-flex>
        <v-flex xs12 sm8 md6 lg4 v-if="datas.length < 1">
          <a style="text-decoration: none;" target="_blank">
            <v-card class="card hvr-grow" pa-10>
              <v-img  style="height:200px" class="img" src="https://media.comicbook.com/2019/01/mk11-1154821.jpeg"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Mortal kombat 11</h3>
                  <div>A very good fighting game</div>
                </div>
              </v-card-title>
            </v-card>
          </a>
        </v-flex>

        <v-flex xs12 sm8 md6 lg4 v-for="data in datas" v-bind:key="data.mal_id">
          <a style="text-decoration: none;" :href="data.url" target="_blank">
            <v-card class="card hvr-grow" pa-10>
              <v-img v-if="data.image_url" class="img" :src="data.image_url"></v-img>
              <div v-else style="height:200px"></div>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ data.title }}</h3>
                  <!--<div v-if="data.summary">{{ limitSummaryLenght(data.summary) }}</div>-->
                </div>
              </v-card-title>
            </v-card>
          </a>
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>

<script>
import APIClient from '~/API/APIClient'

export default {
  data () {
    return {
      datas: [],
      intro: '30 MOST POPULAR GAMES ON IGDB TODAY',
      gameName: ''
    }
  },
  created () {
    this.getTopAnimes();
  },
  methods: {
    // Get games from IGDB's API
    getTopAnimes: function () {
      APIClient.getTopAnimes()
        .then((data) => {
            console.log(data);
          this.datas = data
        })
        .catch(err => {
        })
    },
    // Get games with a specific name
    searchGames: function () {
      APIClient.searchGames(this.gameName)
        .then((data) => {
          this.intro = 'POPULAR GAMES FOUND FOR "' + this.gameName + '"'
          // If the given name is empty reset message
          if (this.gameName === "") {
            this.intro = "30 MOST POPULAR GAMES ON IGDB TODAY"
          }
          this.datas = data
        })
        .catch(err => {
        })
    },
    // Create dynamic img url to display game's cover
    getUrlImg: function (id) {
      return ('https://images.igdb.com/igdb/image/upload/t_screenshot_med/' + id + '.jpg')
    },
    // Cut the summary of a game if > 300 characters
    limitSummaryLenght: function (summary) {
      console.log(summary)
      if (summary.length > 300)
        return (summary.substring(0, 300) + '...')
      return summary
    }
  }
}
</script>

<style scoped>

  .intro {
    font-size:20px;
  }

  .card {
    height:100%;
    width:100%;
  }

  .card:hover {
    cursor:pointer;
  }

  /* Grow animation for card*/
  .hvr-grow {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    z-index:20;
    -webkit-box-shadow: 0px 0px 46px 7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 46px 7px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 46px 7px rgba(0,0,0,0.75);
  }

</style>
