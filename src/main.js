import { createApp } from 'vue'
import {provideStoreToApp} from "@reduxjs/vue-redux";
import App from './App.vue'
import store from "./store";
import './style.css'

const app = createApp(App);

provideStoreToApp(app, {store})

app.mount('#app');
