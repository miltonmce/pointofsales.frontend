import { createApp } from 'vue'
import './style.css'
import axios from 'axios';

import App from './App.vue'
import router from './router';
import store from './store';
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';  // the FastAPI backend

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logOut');
        return router.push('/login')
      }
    }
  });

app.use(router);
app.use(store); 
app.mount("#app"); 

import "bootstrap/dist/js/bootstrap.js";