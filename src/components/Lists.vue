<template>
    <v-card
      class="ma-2 w-100"
    >
      <v-timeline density="compact">
          <v-timeline-item v-if="itemsProduct"
          v-for="(item, i) in itemsProduct"
          :key="i"
          :value="item"
          active-color="primary"
          class="text-left border "
          size="x-small"
          
          @click="onItemClick(item)"
          >
          <template v-slot:prepend> 
              <v-divider class="border-opacity-25"></v-divider>
        </template>
        <v-list-item-title v-text="item.title"></v-list-item-title>      
        </v-timeline-item>
    </v-timeline>
    <v-list>
        <v-list-item v-if="itemsProd"
            v-for="(item, i) in itemsProd"
            :key="i"
            :value="item"
            active-color="primary"
            class="text-left"
            @click="gotopage(item)"
            >
            <template v-slot:prepend>  
            </template>
            <v-list-item-title> <router-link class="text-decoration-none text-black" :to="item.url">{{item.title}}</router-link></v-list-item-title>
            <v-divider class="border-opacity-25"></v-divider>
            <v-list-item-subtitle style="min-height: 40px;">
            
                    {{item.desc}}
            
            </v-list-item-subtitle>
        </v-list-item>
    </v-list>
    
    </v-card>
  </template>

  <script>
  export default {
    props: {
        itemsProduct: {
        type: Array,
        required: false,
        },
        itemsProd: {
        type: Array,
        required: false,
        },
    },
    data: () => ({
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
    methods : {
        onItemClick(item){
            if (item.subtitle) {
                let payload = item
                this.$store.dispatch('getItemProduct', payload)
            } else {
            window.location.href = item.url
            }
         }
        }, gotopage(item){
            window.location.href = item.url
        }
  }
</script>