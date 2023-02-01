
<template>
    <div>
        <main class="bg-dark">
    
            <div class="text-white container-fluid">
               <!-- prima sezione -->
                <div class="row w-75 m-auto">
                    <div class=" col-sm-12  col-md-8 col-lg-4 m-auto">
                        <div class=" avatar">
                            <img class="img-fluid" src="../assets/img/io.jpeg" alt="">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8  col-lg-8   sec1-cnt m-auto">
                        <div class="row">
                            <div class="col ">
                                <h1 class="" >Hi, Nice to meet </h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="you">you</div>
                            </div>
                            <div class="col">
                                <h2 class="nameSurmname">i’m Ilario Forcherio</h2>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="row w-75 m-auto">
                    <div class=" col-4">
                         <button class="" >Contact me</button>
                       
                        
                    </div>
                    <div class="col-8">
                        <h2 class="role ">Web Developer</h2>
                    </div>
                </div>
  <!-- seconda sezione -->
                <div class="row">
                    <div class="col">
                        <section class="section watch d-flex align-items-center justify-content-center">
                            <h2  class="title" v-scrollanimation> Questa e' la Seconda sezione</h2>
                            <!-- <h2>TECNOLOGIES</h2> -->
                        </section>
                    </div>
                </div>
                <!-- terza sezione -->
                <div class="row">
                    <div class="col">
                        
                        <section class="section watch d-flex align-items-center justify-content-center">
                            <h2 class="title" v-scrollanimation> Questa e' la terza sezione</h2>
                        </section>
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
        //elements_to_watch: document.querySelectorAll('.watch'),
        //callback:'',
       
        //observer
        //observer:new IntersectionObserver(),

        }
    },
    mounted() {
    // this.observer,
    // this.callback();
    // this.function();

    },
    methods: {
    
    //    callback: function (items){
    //     items.forEach(element => {
    //         if(element.isIntersecting){
    //             element.target.classlist.add("in_page");
    //         }else{
    //             element.target.classlist.remove("in_page")
    //         }
    //     });
    // },

    // function(){
    //  this.elements_to_watch.forEach((elem) =>{
    //     this.observer.observe(elem);
    //  } )
    // }





        



    },

}
</script>

<style lang="scss" scoped>
//javascript

.before{
color: green;
}
.enter{
    //transform:scale(1.2);
    //opacity: 1;
    color: red;
}

// .section,.in_page{
//     transform:scale(1.2);
//     opacity: 1;
// }


main {
    font-family: Helvetica Neue;
    font-weight: bold;
    padding-top: 100px; //height: 200vh; //background-color: black;
}

// .sec1-cnt {
//     //border: 1px solid white;
  
// }

h1,.you {
    font-family: Helvetica Neue;
    font-size: 8rem;
    font-weight: bold;
    line-height: 3rem;
    //letter-spacing: 0rem;
    
  
}
h1{
  line-height: 6rem;
}
 .you{
    font-size: 9rem;
    margin-bottom: 30px;
 }

.nameSurmname {
    color: orange;
    font-family: Helvetica Neue;
    padding-bottom: 40px;
    font-size: 3rem;
    font-weight: bold;
    line-height: 2.5rem;
    inline-size: 250px;
    overflow-wrap: break-word;
}

.role {
    //border: 1px solid white;
    line-height: 5rem;
    
    font-family: Helvetica Neue;
    font-size: 6rem;
    font-weight: bold;
    //inline-size: 360px;
    //overflow-wrap: break-word;
}
button{
    font-size: 1.5rem;
    background-color: orange;
    padding: 10px 40px;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.4rem;
}

.avatar img {
    //padding: 100px;
   // border: 1px solid white;
    //aspect-ratio: 1/1;
    width: 150%;
  
}

section {
    width: 100%;
    height: 100vh;
}
.title{
    text-align: center;
    font-weight: bold;
    font-size: 7rem;
    line-height: 7rem;
}

// .wd{
//     //font-family: 'Open Sans', sans-serif;
// }
</style>
