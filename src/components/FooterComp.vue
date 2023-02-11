
<template>
    <div>
        <footer>
            <section class="pt-5">
                <div class="container-fluid">
                    <div class="row w-75 m-auto ">
                                               <!-- contact-me-here -->
                        <div data-aos="fade-left"  class="col-lg-6">
                            <h3 id="contact" class="pt-5 pb-5 txt text-center">Contact Me <span style="color:orange">Here</span></h3>
                        </div>
                        <!-- form-contacts -->
                        <div class="col-lg-6">
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
                <div class="d-flex w-75 m-auto">
                    <!-- icons-email -->
                    <div data-aos="fade-right"  class="ps-5 pt-5 d-flex justify-content-center align-items-center">
                        <a class="pe-5 text-white" href="https://www.linkedin.com/in/ilario-forcherio-b413a340/">
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </a>
                        <a class="  pe-5 text-white" href="ilarioforcherio@gmail.com">ilarioforcherio@gmail.com</a>
                        <a class=" pe-5 text-white" href="https://github.com/IlarioForcherio">
                            <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                    </div>
                    <!-- arrow-up -->
                    <div data-aos="fade-up" class="w-80 d-flex justify-content-end  pt-5">
                        <a href="#" class=" text-white">
                            <font-awesome-icon icon="fa-solid fa-circle-arrow-up" />
                        </a>
                    </div>
    
                </div>
    
            </section>
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
        //this.sendEmail();

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

.fa-github,
.fa-linkedin {
    font-size: 1.5rem;
}

.fa-circle-arrow-up {
    font-size: 3rem;
    border-radius: 50%;
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
    font-size: 5.5vmax;
    font-weight: bold;
    line-height: 5.5rem;
    letter-spacing: 0rem;
}

.bw {
    border: 1px solid rgb(107, 106, 106);
    border-radius: 10px;
}

/* media query */

// @media screen and (min-width: 375px) {
//   .txt{
//     text-align: center;
//     font-size: 9.3vw;
//   }
// }
</style>
