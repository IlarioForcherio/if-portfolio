<template>
    <div>
        <!-- terza-sezione -->
        <section class="section">
            <div class="container-fluid m-auto pt-5 ">
    
                <div class="row m-auto w-80">
                    <!-- cards -->
                    <div class="p-2  d-flex  flex-wrap ps-5  col-lg-6 bw " data-aos="fade-left" >
                        <img class="img-fluid " src="../assets/img/html-5.png" alt="">
                        <img class="img-fluid" src="../assets/img/css-3.png" alt="">
                        <img class="img-fluid" src="../assets/img/javascript.png" alt="">
                        <img class="img-fluid" src="../assets/img/bootstrap.png" alt="">
                        <img class="img-fluid" src="../assets/img/figma.png" alt="">
                        <img class="img-fluid" src="../assets/img/github.png" alt="">
                        <img class="img-fluid" src="../assets/img/mysql.png" alt="">
                        <img class="img-fluid" src="../assets/img/php.png" alt="">
                        <img class="img-fluid" src="../assets/img/laravel.png" alt="">
                        <img class="img-fluid" src="../assets/img/vue.png" alt="">
                        <img class="img-fluid" src="../assets/img/vsc.png" alt="">
                        <img class="img-fluid" src="../assets/img/npm.png" alt="">
                    </div>
    
                    <div class=" col-lg-6">
                        <h2 class="txt ">This is<span style="color:orange"> my</span> stack</h2>
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
    font-size: 7.6vw;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 6rem;
    letter-spacing: 0rem;
    text-align: end;
}

.bw {
    border: 1px solid white;
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
    
    width: 30%;
    object-fit: contain;
    border-radius: 10px;
    padding: 5px;
}

/* media query */


@media screen and (min-width: 375px) {
  .txt{
    text-align: center;
    font-size: 10.8vw;
    
  }
}


</style>
