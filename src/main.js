import Vue from 'vue'
import App from './App.vue'

//direttiva ScrollAnimation
//import ScrollAnimation from './directives/scrollanimation';

//Vue.directive('scrollanimation', ScrollAnimation);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
