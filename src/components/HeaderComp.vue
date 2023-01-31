
<template>
    <div>
        <header>
            <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-sm">
                    <a class="navbar-brand" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Works</a>
                            </li>
    
                        </ul>
                    </div>
                </div>
            </nav> -->

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
          <a class="nav-link" href="#">My Work</a>
        </li>
      
            <li class="nav-item">
          <a class="nav-link" href="#">CV</a>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->

      </ul>
      <form class="d-flex justify-content-center">
        <button class="btn btn-outline-warning" type="submit">Contact Me!</button>
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
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0; // background-color: #212529;
}

nav {
    background-color: rgba(0, 0, 0, 0.3) !important;
}
</style>
