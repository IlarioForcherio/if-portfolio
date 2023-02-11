<template>
    <div>
        <!-- terza-sezione -->
        <section class="section">
            <div class="container-fluid m-auto pt-5 ">
    
                <div class="row m-auto w-75 m-auto">
                    <!-- stack -->
                    <div data-aos="fade-left"  class=" col-lg-6 p-5">
                        <h2 class="txt text-center">This is<span style="color:orange"> my</span> stack</h2>
                    </div>
                    <!-- carousel -->
                    <div data-aos="fade-right" class="col-sm-12 col-lg-6 bw">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="img-fluid " src="../assets/img/html-5.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/javascript.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/bootstrap.png" alt="">
                                </div>
                                <div class="carousel-item">
                                     <img class="img-fluid" src="../assets/img/figma.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/github.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/mysql.png" alt="">
                                </div>
                                <div class="carousel-item">
                                      <img class="img-fluid" src="../assets/img/php.png" alt="">
                                </div>
                                <div class="carousel-item">
                                     <img class="img-fluid" src="../assets/img/laravel.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/vue.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/vsc.png" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/npm.png" alt="">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <div class="d-flex justify-content-center">
            <div class="border-section-bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section34Comp',
    components: {

    },
    props: {

    },
    directives: {

    },
    data() {
        return {


        }
    },
    mounted() {
        //this.AOS.init();

    },
    methods: {



    },

}
</script>

<style lang="scss" scoped>
.w-80 {
    width: 80%;
    margin: auto;
}

.txt {
    color: white;
    font-size: 6vmax;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 6rem;
    letter-spacing: 0rem;
    text-align: end;
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

/* .cards{
   
} */

.cards a {
    display: inline;
    border: 1px solid black;
}

img {
    /* border: 1px solid black; */
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    padding: 90px;
}

/* media query */

// @media screen and (min-width: 375px) {
//   .txt{
//     text-align: center;
//     font-size: 10.8vw;
//   }
// }
</style>
