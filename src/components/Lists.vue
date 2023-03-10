<template>
    <v-card
      class="ma-4 w-100"
    >
      <v-list density="compact">
          <v-list-item v-if="itemsProduct"
          v-for="(item, i) in itemsProduct"
          :key="i"
          :value="item"
          active-color="primary"
          class="text-left"
          @click="onItemClick(item)"
          >
          <template v-slot:prepend> 
        </template>
        <v-list-item-title v-text="item.title"></v-list-item-title>
        
    </v-list-item>
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
        <v-list-item-title> <router-link :to="item.url"></router-link>{{item.title}}</v-list-item-title>
        <v-list-item-subtitle>{{item.desc}}
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
            let payload = item
            this.$store.dispatch('getItemProduct', payload)
         }
        }, gotopage(item){
            window.location.href = item.url
        }
  }
</script>