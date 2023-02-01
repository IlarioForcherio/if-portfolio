<template>
  <div id="app"  data-bs-theme="dark">
   
    <HeaderComp/>
    <MainComp/>
    <FooterComp/>
    

    
  </div>
</template>

<script>

import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');


#app {
   font-family: 'Oswald', sans-serif;
 // -webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
 //margin-top: 60px;
}
</style>
