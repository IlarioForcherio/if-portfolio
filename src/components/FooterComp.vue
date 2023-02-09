
<template>
    <div>
        <footer>
            <section class="pt-5">
                <div class="container">
                    <div class="row align-items-center">
    
                        <div class="col-12 ">
                            <h3 id="contact" class="txt" >Contact Me <span style="color:orange">Here</span></h3>
                            <form ref="form" @submit.prevent="sendEmail" class="row g-3 text-white pt-5">
                                <div class="col-md-6">
                                    <input  v-model="name" type="text" name="user_name" placeholder="Name"  class="form-control" >
                                </div>
                                <div class="col-md-6">
                                    <input v-model='email' type="email" name="user_email" placeholder="Email"  class="form-control" >
                                </div>
                                <div class="col-md-12">
                                    <input placeholder="Subject" type="text" class="form-control" id="name">
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
                                        <div class="col">
                            <ul class="text-white">
                                <li>Phone</li>
                                <li>Email</li>
                                <li>Github</li>
                            </ul>
                        </div>
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
            name:'',
            email:'',
            message:'',

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
footer {
    width: 100%;
    height: 200vh;
    background-color: #212529;
}
li{
    display: inline;
    padding: 130px;
}



.txt {
    color: white;
    font-size: 13vw;
    font-family: Helvetica Neue;
    font-weight: bold;
    line-height: 7rem;
    letter-spacing: 0rem;
}
</style>
