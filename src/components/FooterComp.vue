
<template>
    <div>
        <footer>
            <section class="pt-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col">
                            <ul class="text-white">
                                <li>Phone</li>
                                <li>Email</li>
                                <li>Github</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h3>Contact Me</h3>
                            <form action="mailto:ilarioforcherio@gmail.com" method="GET" class="row g-3 text-white pt-5">
                                <div class="col-md-6">
                                    <input placeholder="Name" type="text" class="form-control" id="name">
                                </div>
                                <div class="col-md-6">
                                    <input placeholder="Email" type="email" class="form-control" id="inputEmail">
                                </div>
                                <div class="col-md-12">
                                    <input placeholder="Subject" type="text" class="form-control" id="name">
                                </div>
                                <div class="mb-3 col-md-12">
                                    <textarea placeholder="Message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
    
    
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                            </form>
                            
                            <form ref="form" @submit.prevent="sendEmail">
                                <label>Name</label>
                                <input v-model="name" type="text" name="user_name">
                                <label>Email</label>
                                <input v-model='email' type="email" name="user_email">
                                <label>Message</label>
                                <textarea v-model='message' name="message"></textarea>
                                <input type="submit" value="Send">
                                <div class="text-white">{{successEmail}}</div>
                            </form>
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

h2 {
    font-family: Helvetica Neue;
    font-weight: bold;
    font-size: 7rem;
}
</style>
