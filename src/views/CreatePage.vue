<template>
  <v-app>
    <v-container fluid>
      <v-row class="my-auto">
        <v-col cols="12" class="ma-auto pa-auto">
            <Header></Header>
            
            <!-- is section carousel disini -->
              <v-card
                class="mx-auto"
                max-width="auto"
              >
                <v-img
                  class="align-end text-white"
                  height="500"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                  <v-card-title class="text-h3">
                    {{ dataCreate.title}}
                  </v-card-title>
                  <v-card-text> 
                    {{ dataCreate.description }}
                  </v-card-text>
                    <v-card-actions>
                    <v-btn color="orange">
                      Share
                    </v-btn>
              
                    <v-btn color="orange">
                      Explore
                    </v-btn>
                  </v-card-actions>
                </v-img>
              </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>  

        </v-row>
        <v-row class="my-auto d-flex justify-center">
            <v-col cols="4" class="ma-0">
              <h2>
                {{ dataCreate.title }}
              </h2>
              <Lists :itemsProduct="productsData"> </Lists>
            </v-col>
            <v-col cols="8" class="ma-0 mb-5 d-flex align-content-start flex-wrap" v-if="detailProduct">         
              <v-row class="ma-auto ">
                <v-col cols="10">
                  <v-card
                  
                  v-if="detailProduct"
                  class="pa-4 "
                >
                    <v-card-title class="text-h5">
                    </v-card-title>
                      {{ detailProduct.subtitle }}
                    <v-card-subtitle> 
                      {{ detailProduct.desc }}
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn variant="text">
                        Check Now
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
        
                <v-row class="d-flex align-content-start flex-wrap " >
                  <v-col cols="5" class="" v-for="(prod, index) in detailProduct.product " :key="index" >
                    <card cols="6">
                      <h3>{{prod.category}}</h3>
                      <Lists :itemsProd="prod.item"></Lists>
                    </card>
                  </v-col>
                </v-row>
                <v-row>
              </v-row>
            </v-col>
    
        </v-row>
        <v-row>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import Carousels from '@/components/Carousels.vue'
import Lists from '@/components/Lists.vue'
import Header from '@/components/Header.vue'
export default {
    name : 'Homepage',
    components : {
      Carousels,
      Lists,
      Header
    },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        search : '',
        productsData : []
      }
    },
    computed : {
       dataCreate() {
        return this.$store.state.dataCreate
      },
      productData() {
        return this.$store.state.productData
      },
      detailProduct() {
        return this.$store.state.detailProduct
      }
    },
    watch : {
      productData() {
        this.productsData = this.productData
      }
    },
    created(){
      if (!localStorage.getItem('access_token') ){
        this.$router.push('/login')
      }
      this.fetchdata() 
    },
    methods: {
      fetchdata() {
        this.$store.dispatch('fetchDataCreate')
      }, 
      
    },
  }
</script>
