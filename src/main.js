import Vue from 'vue'
import App from './App.vue'
//youtube-video
import Embed from 'v-video-embed'
//libreria animazioni
import AOS from 'aos'
import 'aos/dist/aos.css'
//youtube-video
Vue.use(Embed);

 /* add font awesome icon component */
 Vue.component('font-awesome-icon', FontAwesomeIcon)

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 
  //import fa brands
  import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
  

  /* add icons to the library */
  library.add(faGithub,faLinkedin)
 


//<font-awesome-icon icon="fa-brands fa-github" />
//<font-awesome-icon icon="fa-brands fa-linkedin" />
 

//ATTENZIONE: se la stessa icona viene importata con due stili diversi ad esempio: regular e solid, non possiamo usare lo stesso nome per le due icone ma dobbiamo //usare un rieticchetamento con "as", il codice diverrà:

 

//direttiva ScrollAnimation
//import ScrollAnimation from './directives/scrollanimation';

//Vue.directive('scrollanimation', ScrollAnimation);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted(){
    AOS.init()
  }
}).$mount('#app')
