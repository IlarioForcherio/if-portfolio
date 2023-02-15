<template>
    <div>
        <!-- terza-sezione -->
        <section class="section ">
            <div class="container-fluid m-auto ">
    
                <div class="row m-auto w-75 m-auto">
                    <!-- stack -->
                    <div data-aos="fade-left" class="col-sm-12 col-lg-6 ">
                        <h2 class="txt">This is<span style="color:orange"> my</span> stack</h2>
                    </div>
                    <!-- carousel -->
                    <div data-aos="fade-right" class="col-sm-12 col-lg-6 bw">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                       <img class="img-fluid " src="../assets/img/html-5.png" alt="">  
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src="../assets/img/css-3.png" alt="">
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
                                      
                                    </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                       
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
       

    },
    methods: {



    },

}
</script>

<style lang="scss" scoped>
.section{
    padding-top:80px
}

.txt {
    color: white;
    font-size: 5rem;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4rem;
    letter-spacing: 0rem;
    padding-right: 100px;
    padding-top: 50px;
    
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}



.cards a {
    display: inline;
    border: 1px solid black;
}



img {
    /* border: 1px solid black; */
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    padding: 0px;
}
.carousel-control-prev-icon,.carousel-control-next-icon{
    display: none;
}



//---------------------------------------MEDIA-QUERY--------------------------------//
@media only screen and (min-width: 768px) and (max-width: 1000px){
    .txt{
        text-align:center;
         padding-right: 0px;
         padding-top: 0px;
    }
}

@media only  screen and (min-width: 360px) and (max-width: 768px) {
    .section{
        padding-top:0px;
    }
	.txt{
   
   font-size: 2rem;
   padding-top:20px ;
    padding-right:0px;
    text-align: center;
    line-height: 2rem;
  }
}
</style>
