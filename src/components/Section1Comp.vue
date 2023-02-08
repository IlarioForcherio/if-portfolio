
<template>
    <div>
        <main >
            <section class="section">
                <!-- prima-sezione -->
                <div class="m-auto w-75 container-sm d-flex justify-content-center">
                    <div class="row m-auto">
                        <div class="img col-sm-12 col-md-6  col-lg-6">
                            <img class="img-fluid object-fit-contain" src="../assets/img/io.jpeg" alt="">
                        </div>
                        <!-- sezione-text -->
                        <div class="col col-md-6  col-lg-6  txt">
                            <!-- text -->
                            <div class="row m-auto">
                                <div class="col">
                                    <h1 class="txt load-transition">Hi, Nice to meet you.I’m</h1>
                                    <!-- i-f -->
                                    <div class="row">
                                        <div class="col">
                                            <h2 class="i-f">ILARIO <span>FORCHERIO</span></h2>
                                        </div>
                                    </div>
                                    <!-- web-developer -->
                                    <div class="row">
                                        <div class="col">
                                            <h2 class="w-developer txt">jr. Web Developer.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="d-flex justify-content-center">
                <div class="border-section-bottom"></div>
            </div>
    
          
            <div class="d-flex justify-content-center">
                <div class="border-section-bottom"></div>
            </div>
           
            <div class="d-flex justify-content-center">
                <div class="border-section-bottom"></div>
            </div>
           
                <div class="d-flex justify-content-center">
                <div class="border-section-bottom"></div>
            </div>
    
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
    padding-bottom: 100px;
    padding-top: 100px;
    width: 100%; //border-bottom: 1px solid rgb(66, 65, 65);
}

.border-section-bottom {
    width: 72%;
    border: 1px solid rgb(66, 65, 65);
}

.b-w {
    border: 1px solid white;
}

.txt {
    color: white;
    font-size: 6rem;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4.5rem;
}

.load-transition {
    opacity: 1;
    animation: fadeIn 3s forwards;
}

.i-f {
    animation: fadeIn 3s forwards;
    letter-spacing: 0.4rem;
    padding-top: 20px;
    color: rgb(255, 165, 0); // font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    overflow-wrap: normal;
    line-height: 3.5rem;
}

.w-developer {
    animation: fadeIn 3s forwards;
    line-height: 3.5rem;
    font-size: 3.5rem; //inline-size: 300px;
    //overflow-wrap: break-word;
}

.contact:hover {
    color: black;
    background-color: orange;
    transition: background-color 0.5s;
}

.tecnologies {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.4rem; // padding-top: 200px;
    font-size: 3rem;
}

.stripe {
    padding-top: 50px;
    width: 25%; //height: 1px;
    border-bottom: 1px solid rgb(66, 65, 65);
}

.cards img {
    border-radius: 10px;
    width: 100%; //aspect-ratio: 1/1;
    object-fit: center; //object-fit: contain;
}

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











  