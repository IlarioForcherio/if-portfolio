
<template>
    <div>
        <main class="bg-dark">
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
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-8  m-auto">
                            <h2 v-scroll-animation id='portfolio' class="txt text-center pt-5 tecnologies">PORTFOLIO</h2>
                            <div class="d-flex justify-content-center">
                                <div class="stripe"></div>
                            </div>
                            <div id="carouselExampleIndicators" class="pt-5 carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../assets/img/css-3.png" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/img/html-5.png" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/img/bootstrap.png" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- terza-sezione -->
            <section class="section">
                <div class="container-fluid">
                    <!-- contact-me-tecnologies -->
                    <div class="row">
                        <div class="col-sm-12  pt-5 text-center ">
                            <h2 v-scroll-animation class="text-center tecnologies txt">TECNOLOGIES</h2>
                            <div class="d-flex justify-content-center">
                                <div class="stripe"></div>
                            </div>
                        </div>
                    </div>
                    <!-- cards -->
                    <div class="row w-75 m-auto pt-5">
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://www.w3schools.com/html/html_intro.asp"><img class="img-fluid" src="../assets/img/html-5.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://www.w3schools.com/css/css_intro.asp"><img class="img-fluid" src="../assets/img/css-3.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://www.w3schools.com/js/js_intro.asp"><img class="img-fluid" src="../assets/img/javascript.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://getbootstrap.com/"><img class="img-fluid" src="../assets/img/bootstrap.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://www.figma.com/"><img class="img-fluid" src="../assets/img/figma.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://github.com/IlarioForcherio"><img class="img-fluid" src="../assets/img/github.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://www.mysql.com/it/"><img class="img-fluid" src="../assets/img/mysql.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://www.php.net/"><img class="img-fluid" src="../assets/img/php.png" alt=""></a>
                        </div>
                        <div class="pt-3 col-sm-12 col-md-6 col-lg-4  cards">
                            <a href="https://laravel.com/"><img class="img-fluid" src="../assets/img/laravel.png" alt=""></a>
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
    padding-top: 100px;
}

.section {
    padding-bottom: 100px;
    padding-top: 100px;
    width: 100%;
    border-bottom: 1px solid rgb(66, 65, 65);
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

.contact {
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









  