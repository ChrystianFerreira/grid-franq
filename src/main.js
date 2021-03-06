import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
