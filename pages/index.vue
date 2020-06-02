<template>
  <v-container fluid>
    <v-layout align-start row>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="animeTitle" label="Anime Title" solo></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-btn color="accent" style="height:48px;margin-top:0;" v-on:click="searchGames()">Search</v-btn>
      </v-flex>
    </v-layout>

    <div class="intro">{{ intro }}</div>

    <v-container fluid grid-list-md px-0>
      <v-layout row wrap>
        <v-flex xs6 sm6 md6 lg2 xl2 v-for="data in datas" v-bind:key="data.mal_id">
          <a style="text-decoration: none;" :href="data.url" target="_blank">
            <v-card class="card hvr-grow" pa-10>
              <v-img v-if="data.image_url" class="img" :src="data.image_url"></v-img>
              <div v-else style="height:274px"></div>
              <v-card-title primary-title>
                <div>
                  <div class="title">{{ data.title }}</div>
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
      intro: '50 TOP ANIMES ON MYANIMELIST TODAY',
      animeTitle: ''
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
          this.datas = data
        })
        .catch(err => {
        })
    },
    // Get games with a specific name
    searchGames: function () {
      APIClient.searchGames(this.animeTitle)
        .then((data) => {
          this.intro = 'POPULAR GAMES FOUND FOR "' + this.animeTitle + '"'
          // If the given name is empty reset message
          if (this.animeTitle === "") {
            this.intro = "50 TOP ANIMES ON MYANIMELIST TODAY"
          }
          this.datas = data
        })
        .catch(err => {
        })
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

  .title {
    font-size: 1rem!important;
    line-height: 1.5rem;
    word-break:normal;
  }

  .img {
    height: 281px;
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
