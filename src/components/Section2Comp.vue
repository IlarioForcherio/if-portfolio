<template>
    <div>
        <!-- seconda-sezione -->
        <section class="section">
            <div class=" container-fluid w-75 m-auto">
                <div class="row align-items-end ">                                    <!-- text -->
                    <div class="col-lg-12">
                        <h2 data-aos="fade-left" id='portfolio' class="txt">Take a look at my<span style="color:orange"> work</span></h2>
                        <div class="line"></div>  
                    </div>
                    <!-- carousel -->
                    <div data-aos="fade-right"  class="  col-sm-12 col-lg-6 m-auto ">
                        <div id="carouselExampleIndicators" class=" carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- <img src="#" class="d-block w-100" alt=""> -->
                                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/L3eyiwgfdGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="carousel-item">
                                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/El67qcPkJU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="carousel-item">
                                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/DiLwQ73z-gQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="carousel-item">
                                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/8PRl3J8KlKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
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
    name: 'Section2Comp',
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
.line{
    border:1px solid rgb(107, 106, 106);
    margin-bottom: 100px;
    
}

.section{
    padding-top:80px ;
}
.txt {
    color: white;
    font-size: 3rem;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 4rem;
    text-align:start;
}
.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}


//-------------------------------MEDIA-QUERY--------------------------------//


@media  screen and (min-width: 360px) and (max-width: 768px) {
    .section{
    padding-top:0px ;
}
	.txt{
   
    font-size: 1.4rem;
    padding-right:0px;
    text-align: center;
    line-height: 2rem;
  }
    .line{
   
    margin-bottom: 50px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1000px){
    .txt{
        text-align:center;
         padding-right: 0px;
    }
}
@media only screen and (min-width: 1300px) and (max-width: 2000px){
    .txt{
        font-size: 4rem;
         padding-right: 0px;
    }
}




</style>

