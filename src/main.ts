import './assets/main.css'
import 'vant/lib/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import { IndexBar, IndexAnchor, Cell } from 'vant';


createApp(App)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)
  .mount('#app')