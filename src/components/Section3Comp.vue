<template>
    <div>
        <!-- terza-sezione -->
        <section class="section">
            <div class="container m-auto pt-5 ">
    
                <div class="row m-auto">
                    
                    <div class="col-sm-12 col-md-6 col-lg-12">
                        <h2 class="txt ">This is <span style="color:orange">my</span> stack</h2>
                    </div>
   
                    <!-- cards -->
                    <div class="pt-5 cards d-flex  flex-wrap  col-sm-12 col-md-6 col-lg-12">
                        <img class="img-fluid" src="../assets/img/html-5.png" alt="">
                        <img class="img-fluid" src="../assets/img/css-3.png" alt="">
                        <img class="img-fluid" src="../assets/img/javascript.png" alt="">
                        <img class="img-fluid" src="../assets/img/bootstrap.png" alt="">
                        <img class="img-fluid" src="../assets/img/figma.png" alt="">
                        <img class="img-fluid" src="../assets/img/github.png" alt="">
                        <img class="img-fluid" src="../assets/img/mysql.png" alt="">
                        <img class="img-fluid" src="../assets/img/php.png" alt="">
                        <img class="img-fluid" src="../assets/img/laravel.png" alt="">
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
    name: 'Section3Comp',
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
    this.AOS.init();

    },
    methods: {



    },

}
</script>

<style scoped>
.txt {
    color: white;
    font-size: 13vw;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 7rem;
    letter-spacing: 0rem;
}

/* .cards{
   
} */

.cards a {
    display: inline;
    border: 1px solid black;
}

.cards img {
    /* border: 1px solid black; */
    width: 20%;
    object-fit: contain;
}
</style>
