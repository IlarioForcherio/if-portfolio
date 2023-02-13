<template>
    <div>
        <!-- quarta-sezione -->
        <section class="section pt-5">
            <div class="container-fluid ">
                <div class="row w-75 m-auto ">
                                        <!-- about -->
                    <div data-aos="fade-left"  class=" col-lg-6  ">
                        <h2 id="about" class="txt ">About <span style="color:orange">myself</span></h2>

                    </div>
    
                    <!-- text-p-->
                    <div data-aos="fade-right" class=" bw col-lg-6">
                        <p  class="text-center p-4 text-white"> "Mi chiamo Ilario e sono uno Junior Full Stack Developer. Prima di approdare nel mondo dello sviluppo web ho lavorato molti anni in un settore diverso, fino al momento in cui ho deciso che avrei voluto cambiare vita per accogliere
                            nuove sfide. Il Master Boolean me ne ha dato la possibilita' e ha trasformato in poco tempo una nuova scoperta in una grande passione. Ho imparato a mettermi in gioco e voglio continuare a farlo, quotidianamente e con entusiasmo."</p>
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


.txt {
    color: white;
    font-size: 5rem;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4rem;
    letter-spacing: 0rem;
    padding-top: 80px;
    //text-align: center;
}

p{
    font-size: 1rem;
}

img {
    width: 40%;
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

//-----------------------------------MEDIA-QUERY-----------------------------------//

@media  screen and (max-width: 370px)  {
  .txt{
   
    padding-right:0px;
    text-align: center;
    line-height: 4.5rem;
    padding-bottom: 20px;
    padding-top: 0px;
  }
}
</style>