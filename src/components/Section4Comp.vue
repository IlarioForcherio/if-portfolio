<template>
    <div>
        <!-- quarta-sezione -->
        <section class="section pt-5">
            <div class="container-fluid ">
                <div class="row w-80 m-auto">
                    <div class="col-lg-6 ">
                        <h2 id="about" class="txt text-center">About <span style="color:orange">myself</span></h2>
                        <div class="d-flex justify-content-center">
                          <img class="pt-3  img-fluid" src="../assets/img/io.jpeg" alt="">   
                        </div>
                       
                        <!-- <h2 class="txt"><span style="color:orange">myself</span></h2> -->
                    </div>
                        <div class="col-lg-6">
                        <p data-aos="fade-right"  class="p-5 text-white bw"> "Proveniente da un settore completamente diverso, decido di cambiare vita e di mettermi in gioco seguendo quella che diventera' presto la mia passione, lo sviluppo web. Pronto a mettermi in gioco e desideroso di sperimentarmi sempre in nuove sfide e approfondire la mia formazione."</p>
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
    name: 'AboutComp',
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
.w-80{
    width: 80%;
    margin: auto;
}

.txt {
    color: white;
    font-size: 6vw;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4rem;
    letter-spacing: 0rem;
    
}
p{
    font-size: 1.2rem;
}

img{
    width: 45%;
}


.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

//media query

@media screen and (max-width: 370px) {
    
  .txt{
    
    font-size: 15vw;
  }
}



</style>