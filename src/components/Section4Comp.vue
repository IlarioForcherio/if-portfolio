<template>
    <div>
        <!-- quarta-sezione -->
        <section class="section pt-5">
            <div class="container-fluid ">
                <div class="row w-80 m-auto">
                    <div class="col-lg-6 pt-5">
                        <h2 class=" txt">About myself</h2>
                    </div>
                        <div class="col-lg-6">
                        <p class="p-4 text-white bw"> " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae vel veritatis rerum nostrum aspernatur cumque recusandae, illo odit molestias doloremque, reprehenderit, consectetur quod harum libero porro explicabo nisi
                            consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia iure cum asperiores magnam, aliquid cumque voluptas tenetur qui ea, dolore dignissimos, quod repellat. Quas, deserunt voluptatum harum iusto facere
                            nam. "</p>
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
    font-size: 7.6vw;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 6rem;
    letter-spacing: 0rem;
}


.bw {
    border: 1px solid white;
    border-radius: 10px;
}


</style>