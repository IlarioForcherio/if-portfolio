<template>
    <div>
        <!-- quarta-sezione -->
        <section class="section">
            <div class="container-fluid ">
                <div class="row">
                    <!-- about -->
                    <div data-aos="fade-right"  class=" col-lg-12">
                        <h2 id="about" class="txt ">About <span style="color:orange">myself</span></h2>
                        <div class="line"></div>
                    </div>
                    <!-- text-p-->
                    <div data-aos="fade-right" class=" col-lg-6 m-auto">
                        <p  class="text-center p-4 text-white"> "Mi chiamo Ilario e sono un Junior Full Stack Developer. Prima di approdare nel mondo dello sviluppo web ho lavorato molti anni in un settore diverso, fino al momento in cui ho deciso che avrei voluto cambiare vita per accogliere
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
.section{
    padding-top:80px;
}

.line{
    border:1px solid rgb(107, 106, 106);
    margin-bottom: 100px;
}


.txt {
    color: white;
    font-size: 3rem;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4rem;
    letter-spacing: 0rem;
    padding-top: 80px;
    text-align: end;
}

p{
    font-size: 1.5rem;
}

img {
    width: 40%;
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

//-----------------------------------MEDIA-QUERY-----------------------------------//
@media only screen and (min-width: 768px) and (max-width: 1000px){
    .txt{
        //text-align:center;
         padding-right: 0px;
         padding-top: 0px;
    }
}
@media  screen and (min-width: 360px) and (max-width: 768px) {
    .section{
    padding-top:0px;
}
	.txt{
   
   font-size: 2rem;
    padding-right:0px;
    padding-top: 20px;
   // text-align: center;
    line-height: 2rem;
  }
  .line{
   
    margin-bottom: 50px;
}
}
</style>