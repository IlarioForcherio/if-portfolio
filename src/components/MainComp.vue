
<template>
    <div>
        <main class="bg-dark">
            <section>
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
                                        <div class="col ">
                                            <h2 class="i-f">ILARIO <span>FORCHERIO</span></h2>
                                        </div>
                                    </div>
                                    <!-- web-developer -->
                                    <div class="row">
                                        <div class="col">
                                            <h2 class="w-developer txt">Web Developer.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </section>
            <!-- seconda-sezione -->
            <section class="section">
                <div class="container-fluid">
                    <!-- contact-me-tecnologies -->
                    <div class="row">
                        <div class="col-sm-12  pt-5 text-center ">
                            <button>CONTACT ME</button>
                            <h2 v-scroll-animation class="tecnologies  txt">Tecnologies</h2>
                            <div class="d-flex justify-content-center">
                             <div class="stripe"></div>   
                            </div>
                            
                        </div>
                    </div>

                   
                    <!-- <div class="row w-75  m-auto">
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <img class="img-fluid" src="../assets/img/html-5.png" alt="">
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <img class="img-fluid" src="../assets/img/css-3.png" alt="">
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <img class="img-fluid" src="../assets/img/bootstrap.png" alt="">
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <img class="img-fluid" src="../assets/img/mysql.png" alt="">
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <img class="img-fluid" src="../assets/img/php.png" alt="">
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <img class="img-fluid" src="../assets/img/laravel.png" alt="">
                        </div>
                    </div>  -->
                </div>
            </section>
            <!-- terza-sezione -->
            <section class="section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col text-center">
                            <!-- <h2 class="txt">Questa e' la terza sezione</h2> -->
                        </div>
                    </div>
                </div>
            </section>
    
    
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
    directives: {
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
main {
    // width: 100%;
    padding-top: 100px;
}

.section {
    // display: flex;
    //justify-content: center;
    //align-items: center;
    //border: 1px solid white;
    width: 100%;
   // height: 100vh;
}

.b-w {
    border: 1px solid white;
}

.txt {
    color: white;
    font-size: 5rem;
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
    color: orange; // font-size: 2rem;
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

button {
   
    font-size: 1.5rem;
    background-color: #212529;
    border: 1px solid orange;
    color: orange;
    padding: 10px 55px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    letter-spacing: 0.4rem; // :hover{
    //     color:#212529 ;
    //     background-color: orange ;
    // }
}

button:hover {
    color: black;
    background-color: orange;
    transition: background-color 0.5s;
}

.tecnologies {
   
    padding-top: 200px;
    font-size: 3.8rem;
}
.stripe{
    padding-top: 50px;
 width: 25%;
 //height: 1px;
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









  