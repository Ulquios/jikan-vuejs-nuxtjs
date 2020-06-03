<template>
  <v-app>
    <v-app-bar style="background-color:#fff;z-index:40" fixed app>
      <logo_Evergame class="logo"/>
      <div class="company">Sakuranime</div>
    </v-app-bar>
    <v-content style="background-color:#f5f5f5">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer style="background-color:white">
      <v-spacer></v-spacer>
      <div>Théo Vielmas &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import Logo_Evergame from '~/components/Logo/Logo_Evergame.vue'

  export default {
    data() {
      return {
        fixed: false
      }
    },
    components: {
      Logo_Evergame
    }
  }
</script>

<style scoped>

  .logo {
    width:55px;
    height:auto;
    margin-right:20px;
    margin-left:11%;
  }

  .company {
    font-size:20px;
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      width:50px;
      margin-left:0!important;
    }
  }


</style>
