<template>
  <v-app>
    <v-app-bar fixed app dark>
      <logo_Evergame class="logo"/>
      <div class="company">Evergame</div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
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
    margin-left:17%;
  }

  .company {
    font-size:20px;
  }

  @media only screen and (max-width: 600px) {
    .logo {
      width:50px;
      margin-left:0;
    }
  }


</style>
