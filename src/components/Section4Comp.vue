<template>
    <div>
        <!-- quarta-sezione -->
        <section class="section pt-5">
            <div class="container-fluid ">
                <div class="row w-75 m-auto">
                    <div class="col-lg-6 d-flex align-items-center">
                        <h2 id="about" class="txt text-center">About <span style="color:orange">myself</span></h2>
                        <!-- <div class="d-flex justify-content-center">
                            <img class="pt-3  img-fluid" src="../assets/img/io.jpeg" alt="">
                        </div> -->
                    </div>
                    <div class="col-lg-6">
                        <p data-aos="fade-right" class="p-4 text-white bw"> "Mi chiamo Ilario e sono uno Junior Full Stack Developer. Prima di approdare nel mondo dello sviluppo web ho lavorato molti anni in un settore diverso, fino al momento in cui ho deciso che avrei voluto cambiare vita per accogliere
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
.w-80 {
    width: 80%;
    margin: auto;
}

.txt {
    color: white;
    font-size: 6vmax;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4rem;
    letter-spacing: 0rem;
}

p {
    font-size: 1rem;
}

img {
    width: 40%;
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

//media query
@media screen and (max-width: 370px) {
    .txt {
        font-size: 15vw;
    }
}
</style>