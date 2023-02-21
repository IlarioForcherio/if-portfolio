
<template>
    <div>
        <footer>
            <section class="section">
                <div class="container-fluid w-75 m-auto">
                    <div class="row">
                        <!-- contact-me-here -->
                        <div class="col-lg-12">
                            <h3 data-aos="fade-left" id="contact" class=" txt">Contact Me <span style="color:orange">Here</span></h3>
                            <div class="line"></div>
                        </div>
                        <!-- form-contacts -->
                        <div class="col-lg-6 m-auto">
                            <form data-aos="fade-right" ref="form" @submit.prevent="sendEmail" class="bw row g-3 text-white p-4">
                                <div class="col-md-6">
                                    <input v-model="name" type="text" name="user_name" placeholder="Name" class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <input v-model='email' type="email" name="user_email" placeholder="Email" class="form-control">
                                </div>
                                <div class="mb-3 col-md-12">
                                    <textarea v-model='message' name="message" placeholder="Message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="col-12">
                                    <button value="Send" type="submit" class="btn btn-primary">Send</button>
                                </div>
                                <div class="text-white">{{successEmail}}</div>
                            </form>
    
                        </div>
    
                    </div>
                </div>
                <!-- icons-email -->
                <div class="row pt-5">
                    <div class="col-sm-12">
                        <div class="w-75 m-auto ">
                            <div data-aos="fade-right" class=" ">
                                <a class="pe-5 text-white" href="https://www.linkedin.com/in/ilario-forcherio-b413a340/">
                                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                                </a>
                                <a class="  pe-5 text-white" href="ilarioforcherio@gmail.com">ilarioforcherio@gmail.com</a>
                                <a class=" pe-5 text-white" href="https://github.com/IlarioForcherio">
                                    <font-awesome-icon icon="fa-brands fa-github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- arrow-up -->
                <div data-aos="fade-down" class="w-80 arrowCnt">
                    <a href="#" class="bounce text-white">
                        <font-awesome-icon icon="fa-solid fa-circle-arrow-up" />
                    </a>
                </div>
    
    
            </section>
        <pokedex-app />
        </footer>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
    name: 'FooterComp',
    components: {

    },
    props: {

    },
    data() {
        return {
            successEmail: '',
            name: '',
            email: '',
            message: '',

        }
    },
    mounted() {


    },
    methods: {

        sendEmail() {
            emailjs.sendForm('service_op7yte9', 'template_ba097v6', this.$refs.form, 'yQKnIfUJ2g1UJVw-B')
                .then((result) => {
                    console.log('SUCCESS!', result.text)
                    this.successEmail = 'email inviata'
                    this.name = '',
                        this.email = '',
                        this.message = ''

                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }



    },

}
</script>

<style lang="scss" scoped>


.line{
    border:1px solid rgb(107, 106, 106);
    margin-bottom: 100px;
}
.section {
    padding-top: 80px;
}

input,
textarea {
    //border-color:orange!important;
    background-color: #212529;
}

footer {
    width: 100%;
    background-color: #212529;
    padding-bottom: 100px;
}

a {
    text-decoration: none;
}

form {
    margin-top: 0px;
}

.fa-github,
.fa-linkedin {
    font-size: 1.5rem;
    border-radius: 50%;
}
.fa-github:hover{
      color: orange;
    box-shadow: 2px 2px 2px 1px black;
}
.fa-linkedin:hover{
      color: orange;
    box-shadow: 2px 2px 2px 1px black;
}

.arrowCnt{
    display: flex;
    justify-content: end;
}

.fa-circle-arrow-up {
    font-size: 3rem;
    border-radius: 50%;
    animation: bounce 1.4s infinite;
}

.fa-circle-arrow-up:hover {
    color: orange;
    box-shadow: 2px 2px 2px 1px black;
}

.w-80 {
    width: 80%;
    margin: auto;
}

.txt {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    line-height: 5rem;
    letter-spacing: 0rem;
    padding-top: 40px;
    text-align: end;
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

//---------------------------------------------ANIMATION-----------------------------------------------------------//

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
//---------------------------------------------MEDIA-QUERY---------------------------------------------------------//
@media only screen and (min-width: 768px) and (max-width: 1000px) {
    .txt {
       // text-align: center;
        padding-right: 0px;
        padding-top: 0px;
    }
}

@media screen and (min-width: 360px) and (max-width: 768px) {
    .section {
        padding-top: 0px;
    }
    .txt {
        
        font-size: 1.5rem;
        padding-right: 0px;
        text-align: center;
        line-height: 2rem;
    }
    .arrowCnt{
        padding-top: 50px;
    display: flex;
    justify-content: center;
    }
    .fa-github{
    padding-top: 20px;
    }
    .fa-linkedin{
        padding-bottom: 20px;
    }
     .line{
   
    margin-bottom: 50px;
    }
}
</style>
