<template>
  <v-app>
    <v-main class="ma-0 pa-0">
      <router-view/>
      <Footer v-if="$route.path == '/home'"></Footer>
    </v-main>
    </v-app>
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    components: {
      Footer,
    },
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      drawer : false
    }),
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
