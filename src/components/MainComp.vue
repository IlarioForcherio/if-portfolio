
<template>
    <div>
        <main class="bg-dark">
            <div class="container-fluid">
                <div class="row w-75 m-auto">
                    <div class="m-auto col-sm-12  col-md-8 col-lg-4 ">
                        <div class=" avatar">
                           <img class="img-fluid" src="../assets/img/ilario_make_a_3d_version_of_this_image_for_a_developer_portfoli_2e69ae76-a5b4-4161-ae2b-553fd6f67bc8 copia.jpg" alt="">  
                        </div>
                    </div>
                    <div class="m-auto col-sm-12 col-md-8  col-lg-8  mt-5">
                        <h1 class="text-white">ILARIO FORCHERIO</h1>
                        <div class="wd text-white">web developer</div>
                    </div>
                </div>
                <div class="row">
                    <div class="pt-5 col">
                     <h2>TECNOLOGIES</h2>
                    </div>
                </div>
            </div>
    
    
    
    
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
    padding-top: 100px;
    height: 200vh; //background-color: black;
}
// .wd{
//     //font-family: 'Open Sans', sans-serif;
// }

.avatar img{
    padding: 10px;
    border: 1px solid white;
    aspect-ratio: 1/1;
    width: 100%;
}
</style>
