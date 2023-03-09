<template>
    <div class="container">
        <div class="row justify-content-center py-5">
            <div class="col-12 col-md-6 my-border rounded-5">
                <form @submit.prevent="" class="form-inline d-flex">
                    <input class="form-control mr-sm-2 border-0 rounded-5" type="search" placeholder="Cerca" aria-label="Search">
                    <button class="btn btn-custom px-md-5 py-md-2 rounded-5 my-2 my-sm-0 ms-3 " type="submit"><i class="fa-solid fa-magnifying-glass text-white"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @use "../styles/main.scss";
  
  .my-border{
    border: 1px solid #c76262;
    padding: .2rem ;
    transition: padding, .5s;

    &:hover{
        padding: .4rem;
    }
  }

  .form-control:focus{
    box-shadow: none !important;
  }

  </style>
  