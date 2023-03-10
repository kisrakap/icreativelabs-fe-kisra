<template>
      <v-container fluid>
        <v-row class="my-auto w-100">
          <v-col cols="12" class="ma-0 pa-0">
            <!-- is section carousel disini -->
              <v-card
                class="mx-0"
                max-width="auto"
              >
                <v-img
                  class="align-end text-white w-100"
                  height="500"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                  <v-card-title>Hello {{ data.email}}</v-card-title>
                  <v-card-subtitle class="pt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur excepturi at impedit natus praesentium nesciunt in fugit odit eos.
                  </v-card-subtitle>
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

        <v-row class="my-auto d-flex justify-center">
      
            <v-col cols="3" class="ma-0">
              <Lists :items-product="items"></Lists>
            </v-col>
            <v-col cols="7" class="ma-0">
              <!-- isi section searching disini -->
              <v-row class="ma-4">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>  
              </v-row>
              <v-row class="ma-4">
                <v-card
                class="pa-4"
                color="#385F73"
                theme="dark"
              >
                <v-card-title class="text-h5">
                  Explore Infrastructure as a Service Productts (IaaS)
                </v-card-title>
                <v-card-subtitle> 
                  Helping to accelerate the business through strong and resilient infrastructure for unlimited custome experience.
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn variant="text">
                    Listen Now
                  </v-btn>
                </v-card-actions>
                </v-card>
              </v-row>
              <v-row class="mr-4">
                <v-col cols="6">
                  <Lists :items-prod="items"></Lists>
                </v-col>
                <v-col cols="6">
                  <Lists :items-prod="items" ></Lists>
                  <Lists :items-prod="items" ></Lists>
                </v-col>=
              </v-row>
  
              <v-row>
              </v-row>
            </v-col>
    
        </v-row>
        <v-row>
        </v-row>
      </v-container>
</template>

<script>
import Carousels from '@/components/Carousels.vue'
import Lists from '@/components/Lists.vue'
import router from '@/router'
export default {
    name : 'Homepage',
    components : {
      Carousels,
      Lists
    },
    data () {
      return {
        search : '',
        items : [
              {
              "title": "Infrastructure As A Service",
              "subtitle": "Explore infrastructure as a service Production (Iaas)",
              "desc": "Helping to accelerate the business through strong and resilient infrastructure for unlimited customer experience.",
              "url": "http://dummy.com/why",
              "product": [
                  {
                      "category": "FLOU Cloud",
                      "item": [
                          {
                              "title": "FLOU Cloud",
                              "url": "http://example.com",
                              "desc": "Elastic Compute Service, Compute High\nPerformance, Auto Scalling, Container"
                          },
                          {
                              "title": "FLOU Network",
                              "url": "http://example.com",
                              "desc": "Elastic IP, Server Load Balancer"
                          },
                          {
                              "title": "FLOU Security",
                              "url": "http://example.com",
                              "desc": "Anti DDoS, Web Application Firewall WAF,\nServer Guard"
                          },
                          {
                              "title": "FLOU Storage",
                              "url": "http://example.com",
                              "desc": "Object Storage Service, Block Storage"
                          }
                      ]
                  },
                  {
                      "category": "Telkom Cloud",
                      "item": [
                          {
                              "title": "Telkom Cloud Compute",
                              "url": "http://example.com",
                              "desc": "Virtual server service with CPU and RAM\nresources"
                          },
                          {
                              "title": "Telkom Cloud Network",
                              "url": "http://example.com",
                              "desc": "Public or Private Cloud infrastructure\nsupport services that enable\ncommunication"
                          }
                      ]
                  },
                  {
                      "category": "BackUp Service",
                      "item": [
                          {
                              "title": "Cloud BackUp Service Veem",
                              "url": "http://example.com",
                              "desc": "Object Storage Service (OSS) is an\nencrypted object storage service"
                          },
                          {
                              "title": "Cloud BackUp HBR",
                              "url": "http://example.com",
                              "desc": "Object Storage Service (OSS) is an\nencrypted object storage service"
                          }
                      ]
                  }
              ]
          },
          {
              "title": "Software As A Service",
              "url": "http://products"
          },
          {
              "title": "Service",
              "url": "http://products"
          }]
      }
    },
    computed : {
       data() {
      return this.$store.state.data
    },
    },
    created(){
      this.fetchdata() 
    },
    methods: {
      fetchdata() {
        this.$store.dispatch('fetchdata')
      },
    },
  }
</script>
