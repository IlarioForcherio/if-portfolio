
<template>
    <div>
        <main class="bg-dark">
    
            <div class="text-white container-fluid">
               <!-- prima sezione -->
                <div class="row w-75 m-auto">
                    <div class=" col-sm-12  col-md-8 col-lg-4 m-auto">
                        <div class="img">
                            <img class="img-fluid" src="../assets/img/io.jpeg" alt="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8  col-lg-8   sec1-cnt m-auto">
                        <div class="row">
                            <div class="col ">
                                <h1 class="" >Hi, Nice to meet </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="you">you</div>
                            </div>
                            <div class="col">
                                <h2 class="nameSurmname">i’m Ilario Forcherio</h2>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="row w-75 m-auto">
                    <div class=" col-4">
                         <button class="" >Contact me</button>
                    </div>
                    <div class="col-4">
                        <h2 class="web">Web </h2>
                    </div>
                    <div class="col-4">
                        <h2 class="developer">Developer</h2>
                    </div>
                </div>
  <!-- seconda sezione -->
                <div class="row">
                    <div class="col">
                        <section class="section d-flex align-items-center justify-content-center">
                            <h2 v-scroll-animation  class="titles op-0"> Questa e' la Seconda sezione</h2>
                            <!-- <h2>TECNOLOGIES</h2> -->
                        </section>
                    </div>
                </div>
                <!-- terza sezione -->
                <div class="row">
                    <div class="col">
                        
                        <section class="section d-flex align-items-center justify-content-center">
                            <h2 v-scroll-animation class="title op-0" > Questa e' la terza sezione</h2>
                        </section>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script>

import ScrollAnimation from '../directives/scrollanimation';

export default {
    name: 'MainComp',
    components: {

    },
    props: {

    },
    directives:{
     ScrollAnimation
    },
    data() {
        return {


        }
    },
    mounted() {
   

    },
    methods: {
    
  

    },

}
</script>



<style lang="scss" scoped>
.op-0{ opacity: 0;}

 .text-appear { opacity: 0; animation: fadeIn 1s forwards; } @keyframes fadeIn {  0% {   opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0);}  } 


main {
    font-family: Helvetica Neue;
    font-weight: bold;
    padding-top: 100px; //height: 200vh; //background-color: black;
}


h1,.you {
    font-family: Helvetica Neue;
    font-size: 8rem;
    font-weight: bold;
    line-height: 3rem;
    //letter-spacing: 0rem;
    
  
}
h1{
  line-height: 6rem;
}
 .you{
    font-size: 9rem;
    margin-bottom: 30px;
 }

.nameSurmname {
    color: orange;
    font-family: Helvetica Neue;
    padding-bottom: 40px;
    font-size: 3rem;
    font-weight: bold;
    line-height: 2.5rem;
    inline-size: 250px;
    overflow-wrap: break-word;
}

.web,.developer{
    //border: 1px solid white;
    line-height: 6rem;
    font-family: Helvetica Neue;
    font-size: 8rem;
    font-weight: bold;
    //inline-size: 360px;
    //overflow-wrap: break-word;
}
.developer{
   font-size: 6rem;
   inline-size: 360px;
   overflow-wrap: break-word;
   inline-size: 250px;
   line-height: 4.5rem;
}
button{
    font-size: 1.5rem;
    background-color: orange;
    padding: 10px 55px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    letter-spacing: 0.4rem;
}

// .img img {
//     //padding: 100px;
//    // border: 1px solid white;
//     //aspect-ratio: 1/1;
//     //width: 150%;
  
// }

section {
    width: 100%;
    height: 100vh;
}
.section{
    border: 1px solid white;
}
.title{
    text-align: center;
    font-weight: bold;
    font-size: 7rem;
    line-height: 7rem;
}

// .wd{
//     //font-family: 'Open Sans', sans-serif;
// }
</style>
