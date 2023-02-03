
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
                                    <h1 class="txt">Hi, Nice to meet you.I'm</h1>
                                   
                                    <!-- i-f -->
                                    <div class="row">
                                        <div class="col ">
                                            <h2 class="i-f">ILARIO <span>FORCHERIO</span></h2>
                                        </div>
                                    </div>
                                   <!-- web-developer -->
                                    <div class="row">
                                        <div class="col">
                                            <h2 class="w-developer txt">Web Developer</h2>
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
                        <div class="col text-center">
                            <!-- <h2 class="txt">Questa e' la seconda sezione</h2> -->
    
                        </div>
                    </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 100%;
    height: 100vh;
}

.img img {
    width: 100%;
}

.b-w {
    border: 1px solid white;
}

.txt {
    //text-align: justify;
    color: white;
    font-size: 5.5rem;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4.5rem;
}

.i-f {
    // justify;
    letter-spacing: 0.4rem;
    padding-top: 20px;
    color: orange; // font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    overflow-wrap: normal;
    line-height: 3.5rem; //inline-size: 250px;
    // overflow-wrap: break-word;
}
.w-developer{
    line-height: 3.5rem;
    font-size: 4rem;
     //inline-size: 300px;
     //overflow-wrap: break-word;

}

button {
    font-size: 1.5rem;
    background-color: orange;
    padding: 10px 55px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    letter-spacing: 0.4rem;
}

//scrollanimation
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

//scrollanimation
// .wd{
//     //font-family: 'Open Sans', sans-serif;
// }
</style>









  