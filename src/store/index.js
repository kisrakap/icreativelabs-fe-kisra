import { createStore } from 'vuex'
import router from '../router/index'
import Axios from 'axios'

export default createStore({
  state: {
    data : {},
    dataCreate : {},
    productData : [],
    detailProduct : {},
    buttons : [],
    productDataTitle : ''
  },
  getters: {
  },
  mutations: {
    setData(state, payload){
      state.data = payload
    },
    setDataCreate(state, payload){
      state.dataCreate = payload
      state.productData = payload['product-data'].item
      state.productDataTitle = payload['product-data'].title
      state.buttons = payload.menu

    },
    setDetailProduct(state, payload){
      state.detailProduct = payload
    },
  },
  actions: {
    getItemProduct(context, payload) {
      context.commit('setDetailProduct', payload)
    },
    register(context, payload) {
      Axios.post('http://localhost:8080/register', 
     {
       email : payload.email, password : payload.password, confpassword : payload.confpassword
     }, {
     headers: {
       'accept': '*/*',
       'Content-Type': 'application/json'
     }})
     .then((resp) => {

       if (resp.status === 201){
         router.push('/login')
       } else {
           alert(resp.message)
       }
     })
     .catch((err) => {
       console.error(err)
        alert(err.message)
     }
     )  

  },
  login(context, payload) {
    Axios.post('http://localhost:8080/login', 
   {
     email : payload.email, password : payload.password
   }, {
   headers: {
     'accept': '*/*',
     'Content-Type': 'application/json'
   }})
   .then((resp) => {

     if (resp.status === 200){
       localStorage.setItem('access_token', resp.data)
       router.push('/home')
     } else {
         alert('error login')
     }
   })
   .catch(err => console.error(err)) 

  },
  fetchdata(context, payload) {
    let token = localStorage.getItem('access_token')
    Axios.get('http://localhost:8080/me', {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
      }})
   .then((resp) => {
     if (resp.status === 200){
       let data = resp
      context.commit('setData', data)
     } else {
         alert('error login')
     }
   })
   .catch(err => console.error(err)) 

  },
  fetchDataCreate(context) {
    let token = localStorage.getItem('access_token')
    Axios.get('http://localhost:8080/jsonTest', {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
      }})
   .then((resp) => {
     if (resp.status === 200){
       let data = resp.data.product
      context.commit('setDataCreate', data)
     } else {
         alert('error login')
     }
   })
   .catch(err => console.error(err)) 

  },
  },
  modules: {
  }
})
