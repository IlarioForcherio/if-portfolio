
<template>
    <div>
        <main>
            <section class="section">
                <!-- prima-sezione -->
                <div class="container-fluid">
                    <div class="row   w-80">
                        <!-- immagine -->
                        <div class="col-lg-6 d-flex  img">
                            <img class=" img-fluid" src="../assets/img/io.jpeg" alt="">
                        </div>
                        <!-- tessto -->
                        <div class="col-lg-6 bw">
                            <div class="row">
                                <div class="col-cm-12">
                                  <h2 class="txt ">Hi, nice to meet</h2>  
                                </div>
                            </div>
                            
                            <div class="row ">
                                <div class="col-lg-5 ">
                                    <h2 class="txt">you</h2>
                                </div>
                                <div class="col-lg-6 d-flex align-items-center">
                                    <h2 class="i-f">I'm Ilario Forcherio</h2>
                                </div>
                            </div>
                            <div class="row">
    
                                <div class="col">
                                    <h2 class="w-dev pt-2">Jr. Web Developer</h2>
    
                                </div>
                            </div>
    
                        </div>
    
    
                    </div>
    
                </div>
    
    
    
    
    
    
    
            </section>
        </main>
    </div>
</template>

<script>
// import ScrollAnimation from '../directives/scrollanimation';

export default {
    name: 'MainComp',
    components: {

    },
    props: {

    },
    directives: {
        // ScrollAnimation
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
// main {
//     padding-top: 00px;
// }
.section {
    // padding-bottom: 100px;
    padding-top: 100px; //width: 100%; //border-bottom: 1px solid rgb(66, 65, 65);
}

.w-80 {
    width: 80%;
    margin: auto;
}

.img img {
    //padding: 30px;
    width: 90%;
    object-fit: contain; // position: relative;
    // z-index: 0;
}

.border-section-bottom {
    width: 72%;
    border: 1px solid rgb(66, 65, 65);
}

.bw {
    border: 1px solid white;
    border-radius: 10px;
}

.txt {
    font-size: 7vmax;
    color: white;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 7rem;
    letter-spacing: -0.5rem; 
    inline-size: 400px;
    overflow-wrap: break-word;
}

.load-transition {
    opacity: 1;
    animation: fadeIn 3s forwards;
}

.i-f {
    // animation: fadeIn 3s forwards;
    letter-spacing: 0.4rem;
    padding-top: 20px;
    color: rgb(255, 165, 0);
    font-size: 2.5vmax; //font-family: 'Oswald', sans-serif;
    font-family: Helvetica Neue;
    font-weight: bolder;
    overflow-wrap: normal;
    line-height: 2.4rem;
}

.w-dev {
   // animation: fadeIn 3s forwards;
   font-family: Helvetica Neue;
   font-weight: bolder;
    line-height: 3.5rem;
    font-size: 3.5rem; //inline-size: 300px;
    //overflow-wrap: break-word;
}

// .stripe {
//     padding-top: 50px;
//     width: 25%; //height: 1px;
//     border-bottom: 1px solid rgb(66, 65, 65);
// }
//--------------------------scrollanimation--------------------------------//
.op-0 {
    opacity: 0;
}

.text-appear {
    opacity: 0;
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

//--------------------------scrollanimation--------------------------------//
// .wd{
//     //font-family: 'Open Sans', sans-serif;
// }
</style>



//  https://animejs.com/

//  https://animejs.com/

// https://greensock.com/gsap/











  