import "./styles/styles.less";


// import { createApp } from 'vue'
// import App from './App.vue'


// createApp(App).mount('#app')

// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');