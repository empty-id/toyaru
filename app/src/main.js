import Vue from 'vue'
import App from './App'
import audio from 'vue-mobile-audio'
Vue.use(audio)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
