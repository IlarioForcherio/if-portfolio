
<template>
    <div>
        <main>
            <section class="section">
                <!-- prima-sezione -->
                <div class="container-fluid">
                    <div class="row   ">
                        <!-- tessto -->
                        <div class="col-lg-12   load-transition  p-5">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h2 class=" txt">Hi, nice to meet you, my name is</h2>
                                </div>
                            </div>

                            <div class="row if-cnt">
                                <div class=" col-lg-6 text-center">
                                    <h2 class="i-f">Ilario Forcherio</h2>
                                </div>
                                <div class="col-lg-6 text-center">
                                    <h2 class="w-dev">Web Developer</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
// import ScrollAnimation from '../directives/scrollanimation';

export default {
    name: 'MainComp',
    components: {

    },
    props: {

    },
    directives: {
        // ScrollAnimation
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

.section {
    // padding-bottom: 100px;
    padding-top: 100px; //width: 100%; //border-bottom: 1px solid rgb(66, 65, 65);
}

.w-80 {
    width: 80%;
    margin: auto;
}

.img img {
    //padding: 30px;
    width: 100%;
    object-fit: contain; // position: relative;
    // z-index: 0;
}

.border-section-bottom {
    width: 72%;
    border: 1px solid rgb(66, 65, 65);
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

.txt {
    text-align: center;
    font-size: 12rem;
    color: white;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 9.8rem;
    letter-spacing: -0.5rem;
}

.load-transition {
    opacity: 1;
    animation: fadeIn 3s forwards;
}



.i-f {

    letter-spacing: 0.4rem;
    padding-top: 20px;
    color: rgb(255, 165, 0);
    font-size: 3rem;
    font-family:'Helvetica Neue';
    font-weight: bolder;
    //overflow-wrap: normal;
    //line-height: 2.5rem;
}

.w-dev {
    padding-top: 20px;
    font-family: 'Helvetica Neue';
    font-weight: bolder;
    line-height: 4rem;
    font-size: 4rem; 
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

//----------------------------------------------MEDIA-QUERY------------------------------------------------//

@media only screen and (min-width: 360px) and (max-width: 768px) {
	.txt{
         letter-spacing: -0.3rem;
        line-height: 4rem;
        font-size: 5rem;
        
    }
    .i-f {
    letter-spacing: 0.4rem;
    padding-top: 10px;
    font-size: 2rem;
    //overflow-wrap: normal;
    //line-height: 2.5rem;
}

.w-dev {
    padding-top: 0px;
    line-height: 4rem;
    font-size: 2rem; 
}
}


</style>













