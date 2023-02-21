import Vue from 'vue'
import App from './App.vue'
//youtube-video
import Embed from 'v-video-embed'
Vue.use(Embed);
//libreria animazioni
import AOS from 'aos'
import 'aos/dist/aos.css'

//pokedex
import PokedexApp from 'pok-dex/src/PokedexApp.vue'

Vue.component('pokedex-app', PokedexApp)


 /* add font awesome icon component */
 Vue.component('font-awesome-icon', FontAwesomeIcon)

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 
  //import fa brands
  import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'

  //import fa solid
   import { faCircleArrowUp,} from '@fortawesome/free-solid-svg-icons'
  

  /* add icons to the library */
  library.add(faGithub,faLinkedin,faCircleArrowUp,)
 


//<font-awesome-icon icon="fa-brands fa-github" />
//<font-awesome-icon icon="fa-brands fa-linkedin" />
 //<font-awesome-icon icon="fa-solid fa-circle-arrow-up" />
 //<font-awesome-icon icon="fa-solid fa-circle-up" />

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
