
<template>
    <div>
        <main>
            <section class="section">
                <!-- prima-sezione -->
                <div class="container-fluid">
                    <div class="bw row w-75 m-auto">
                        <!-- tessto -->
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h2 class=" txt">Hi, nice to meet you, my name is</h2>
                                </div>
                            </div>

                            <div class="row cnt align-items-center">
                                <div class=" col-lg-6 text-center">
                                    <h2  class="i-f">Ilario Forcherio</h2>
                                </div>
                                <div class="col-lg-6 text-center">
                                    <h2  class="w-dev">Web Developer</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="d-flex justify-content-center">
              <a class="contact"  href="#contact">Contact Me</a>  
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

a{
    text-decoration:none;
}


.section {
    // padding-bottom: 100px;
    padding-top: 70px; //width: 100%; //border-bottom: 1px solid rgb(66, 65, 65);
}

// .w-90 {
//     width: 95%;
//     margin: auto;
// }



.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

.txt {
    text-align: center;
    font-size: 6.4rem;
    color: white;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 6rem;
    letter-spacing: -0.3rem;
    padding:40px;
     animation: fadeIn 3s forwards;
}

.load-transition {
    opacity: 1;
    animation: fadeIn 3s forwards;
}

.cnt{
    padding-bottom: 30px;
}

.i-f {
    color: rgb(255, 165, 0);
    font-size: 3rem;
    font-family:'Helvetica Neue';
    font-weight: bolder;
     animation: fadeIn 5s forwards;
    //overflow-wrap: normal;
    //line-height: 3rem;
}

.w-dev {
    font-family: 'Helvetica Neue';
    font-weight: bolder;
    //line-height: 4rem;
     animation: fadeIn 7s forwards;
    font-size: 3rem; 
}

.contact {
    margin-top:70px;
    font-size: 1rem;
    background-color: #212529;
    border: 1px solid orange;
    color: orange;
    padding: 8px 20px;
    border-radius: 10px;
    animation: bounce 1.4s infinite;
   
    
}

.contact:hover {
    color: black;
    background-color: orange;
    transition: background-color 0.5s;
}


//--------------------------animation--------------------------------//
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


@keyframes bounce {
        0% {
    transform: scale(1,1) translate(0px, 0px);
  }
  
  30%{
    transform: scale(1,0.8) translate(0px, 10px); 
  }

  75%{
    transform: scale(1,1.1) translate(0px, -25px); 
  }
  
 100% {
    transform: scale(1,1) translate(0px, 0px);
  }
}

//----------------------------------------------MEDIA-QUERY------------------------------------------------//
@media only screen and (min-width: 2000px) and (max-width: 2500px) {
	.txt{
        
        letter-spacing: -0.3rem;
        line-height: 18rem;
        font-size: 20rem;
        letter-spacing: -1rem; 
       
    }
        .i-f {
    letter-spacing: 0.4rem;
    font-size: 6rem;
    }
    .w-dev {
    padding-top: 0px;
    line-height: 4rem;
    font-size: 7rem; 
    }
    
}

@media only screen and (min-width: 1300px) and (max-width: 2000px) {
	.txt{
       
         letter-spacing: -0.3rem;
        line-height: 16.5rem;
        font-size: 18rem;
         letter-spacing: -1rem;
       
        
    }
    .i-f {
    letter-spacing: 0.4rem;
    padding-top: 10px;
    font-size: 5rem;
    //overflow-wrap: normal;
    //line-height: 2.5rem;
    }

.w-dev {
    padding-top: 0px;
    line-height: 4rem;
    font-size: 5rem; 
}
}

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
        
        letter-spacing: -0.1rem;
        line-height: 4rem;
        font-size: 4rem;
        padding: 0px;

       
        
    }
    .cnt{
    padding-bottom: 0px;
    }   
    .i-f {
    letter-spacing: 0.4rem;
    padding-top: 0px;
    font-size: 1.5rem;
    //overflow-wrap: normal;
    line-height: 2rem;
    
    }

    .w-dev {
    padding-top: 0px;
    
    font-size: 1.5rem;
    
    }
    .contact{
        margin-top:50px;
        margin-bottom: 30px;
    }
}








</style>













