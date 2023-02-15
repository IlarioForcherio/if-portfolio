
<template>
    <div>
        <main>
            <section class="section">
                <!-- prima-sezione -->
                <div class="container-fluid">
                    <div class="row w-90">
                        <!-- tessto -->
                        <div class="col-lg-12   load-transition">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h2 class=" txt">Hi, nice to meet you, i’m</h2>
                                </div>
                            </div>

                            <div class="row cnt align-items-center">
                                <div class=" col-lg-6 text-center">
                                    <h2 data-aos="fade-left" class="i-f">Ilario Forcherio</h2>
                                </div>
                                <div class="col-lg-6 text-center">
                                    <h2 data-aos="fade-right" class="w-dev">Web Developer</h2>
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


export default {
    name: 'MainComp',
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


.section {
    // padding-bottom: 100px;
    padding-top: 100px; //width: 100%; //border-bottom: 1px solid rgb(66, 65, 65);
}

.w-90 {
    width: 90%;
    margin: auto;
}



.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

.txt {
    text-align: center;
    font-size: 10rem;
    color: white;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 9.8rem;
    letter-spacing: -0.8rem;
}

.load-transition {
    opacity: 1;
    animation: fadeIn 3s forwards;
}

.cnt{
    padding-top: 30px;
}

.i-f {

    
    padding-top: 20px;
    color: rgb(255, 165, 0);
    font-size: 3rem;
    font-family:'Helvetica Neue';
    font-weight: bolder;
    //overflow-wrap: normal;
    //line-height: 2.5rem;
}

.w-dev {
   // padding-top: 20px;
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
@media only screen and (min-width: 768px) and (max-width: 1000px) {
	.txt{
         letter-spacing: -0.3rem;
        line-height: 5rem;
        font-size: 8rem;
        
    }
    .i-f {
     
    letter-spacing: 0.4rem;
    padding-top: 20px;
    font-size: 4rem;
    //overflow-wrap: normal;
    //line-height: 2.5rem;
}

.w-dev {
    padding-top: 0px;
    line-height: 4rem;
    font-size: 4rem; 
}
}
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













