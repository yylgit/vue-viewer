import Vue from 'Vue';
import App from  './app.vue';
require('./assets/docs.css')
require('./assets/style.css')
require('./assets/prism-coy.css')
require('prismjs')
require('./utils/showLanguage')
import $ from './utils/NodeList.js'
new Vue({
  el: '#app',
  components: {
  	App
  }
})