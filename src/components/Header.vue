<template>
    <v-toolbar dark color="#143C4A" style="height:10vh;" class="pa-5 text-white">
      <v-toolbar-title class="white-text">
        <div class="mamae">
          <img class="logo" src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-hand-drawn-cute-vegetarian-green-leaf-logo-image_1337225.jpg" width="50px">
        </div>
      </v-toolbar-title>
    
       <v-toolbar-items v-if="buttons">
          <div v-for="item in buttons.item">
            <v-btn @click.prevent="gotolink(item.url)" flat>{{item.title}}</v-btn>
          </div>
        </v-toolbar-items>
      <v-btn> Resurces</v-btn>
      <v-btn> SUPPORT</v-btn>
      <v-btn> marketplace</v-btn>

      <v-layout align-center style="max-width:30vw;" class="ma-5 pa-5">
        <v-text-field 
        class="pa-5"
          solo
          placeholder="Search"
          single-line
          append-icon="search"
          background-color="#202d3f"
          color="white"
          hide-details
        ></v-text-field>
        <div class="mr-10 pa-10">
          <v-btn v-if="$route.path == '/home'"
              color="success"
              size="xlarge"
              @click.prevent="gotocreate"
            >
              CREATE
            </v-btn>
            <v-btn v-else 
              color="success"
              size="xlarge"
              @click.prevent="gotohome"
            >
              HOME PAGE
            </v-btn>
        </div>
      </v-layout>
    </v-toolbar>
</template>

<script>
  export default {
    
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods: {
      gotohome() {
        this.$router.push('/home')
      },
      gotolink(item="http://dummy.com"){
        window.location.href = item
      },
      gotocreate() {
        this.$router.push('/create')
      }
    },
    computed : {
      buttons() {
        return this.$store.state.buttons
      }
    }
  }
</script>