
<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid w-75 m-auto">
                    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                      </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CV</a>
                            </li>
                        </ul>
                        <form class="d-flex justify-content-center">
                            <button class="contact" type="submit">Contact Me!</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
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
header {
    letter-spacing: 0.3rem;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0; // background-color: #212529;
}

nav {
    background-color: rgba(0, 0, 0, 0.3) !important;
}

.contact {
    font-size: 1.5rem;
    background-color: #212529;
    border: 1px solid orange;
    color: orange;
    padding: 10px 55px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    
}

.contact:hover {
    color: black;
    background-color: orange;
    transition: background-color 0.5s;
}
</style>
