<template>
  <div id="app"  data-bs-theme="dark">
   <div class="bg-dark">
     <HeaderComp/>
    <Section1Comp/>
    <Section2Comp/>
     <Section4Comp/>
      <Section3Comp/>
    
 
    <FooterComp/>
    
   </div>
   

    
  </div>
</template>

<script>

import HeaderComp from './components/HeaderComp.vue'
import Section1Comp from './components/Section1Comp.vue'
import Section3Comp from './components/Section3Comp.vue'
import Section4Comp from './components/Section4Comp.vue'
import Section2Comp from './components/Section2Comp.vue'

import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    Section1Comp,
    Section2Comp,
    Section3Comp,
    Section4Comp,
    FooterComp,
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
      width: 100%;
      font-family: Helvetica Neue !important;
      //font-weight: bold;
    overflow-x: hidden;
   
   
}
</style>
