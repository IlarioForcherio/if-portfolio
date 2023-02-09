<template>
    <div>
        <!-- seconda-sezione -->
        <section class="section pt-5 ">
            <div class=" container s m-auto">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6 col-lg-12 ">
                        <h2 id='portfolio' class=" txt  tecnologies">Take a<span style="color:orange">look</span>at my work</h2>   
                    </div>
 
                    <div class="col-sm-12 col-md-6 col-lg-12 m-auto pt-5">
                        <!-- carousel -->
                        <div id="carouselExampleIndicators" class=" carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- <img src="#" class="d-block w-100" alt=""> -->
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/8PRl3J8KlKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="carousel-item">
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/DiLwQ73z-gQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="carousel-item">
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/El67qcPkJU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="carousel-item">
                                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/L3eyiwgfdGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
.txt {
    color: white;
    font-size: 14vmax;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 7.5rem;
    letter-spacing: -0.5rem;
}
</style>

