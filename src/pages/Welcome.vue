<template lang="">
  <!-- <TheHeader></TheHeader> -->
  <div class="bg-first-section">
  </div>
<div class=" container">
  <div class=" pt-5 pb-4">
    <h2 class="pb-4 title">La selezione di Deliveboo</h2>
    <div class="row g-4">
      <div class="col-5 img-section position-relative filter-hover">
        <a href="">
        <img class="my-img-fluid rounded-2" src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="">
          <span class="description">Confort Food</span>
        </a>
      </div>
      <div class="col-7 img-section position-relative rounded-2 filter-hover">
        <a href="">
          <img class="my-img-fluid rounded-2" src="https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/l_4480_tiramisu-zenzero-fichi.jpg" alt="">
          <span class="description">Dolci e Dessert</span>
        </a>
      </div>
      <div class="col-7 img-section position-relative filter-hover">
          <a href="">
            <img class="my-img-fluid rounded-2" src="https://goldenbarristorante.it/wp-content/uploads/2020/02/s9.jpg" alt="">
            <span class="description">Perfetti da condividere</span>
          </a>
        </div>
        <div class="col-5 img-section position-relative filter-hover">
          <a href="">      
              <img class="my-img-fluid rounded-2" src="https://cdn.vox-cdn.com/thumbor/bif3U7XKUqWpOUv91_fXLfzsIx8=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/71262429/Le_Fantome.0.jpg" alt="">
              <span class="description">Confort Food</span>
          </a>
        </div>
    </div>
  </div>
</div>
  <div class="py-5">
    <div class="bg-custom">
      <div class="my-col">
        <div>
          <h2 class="pb-4 title text-center ">Lavora con noi!</h2>
        </div>
        <p class="text-center pb-4">Diventa partner di Deliveboo e raggiungi sempre più clienti. Ci occupiamo noi di prendere gli ordini, così che la tua unica preoccupazione sia continuare a preparare il miglior cibo.</p>
        <a class="text-center" href="http://127.0.0.1:8000">
          <button class="btn btn-custom btn-white">Lavora con noi!</button>
        </a>
      </div>
      <div class="row">
        
      </div>
    </div>
</div>
</template>

<script>
  import { store } from "../stores/store";
import axios from "axios";
export default {
    data() {
        return {
            store,
        };
    },
    mounted() { 
        store.fn.fetchRestaurants();
    },

};
</script>

<style scoped lang="scss">
 .bg-first-section {
  background-image: url("../assets/bg-homepage.jpg");
  height: 60vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}


.title{
  font-family: bold;
  font-weight: bold;
}
.img-section{
  height: 200px;
};

.my-img-fluid{
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 14px #000000;
};

.description{
  font-size: 2.5rem;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  position: absolute;
  bottom: 0;
  right: 5%;
}

.filter-hover:hover{
  filter: grayscale(100%);
}

.my-col{
  display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    padding: 64px 16px;
    color: #ffff;
}

.btn-custom{
    background-color: #c76262 !important;
    border-color: #c76262 !important;
    color: #fff!important;
    transition: all, .3s;
    &:hover{
        background-color: #b34d4d !important;
        transform: scale(1.05);
    }
    &:active{
        transform: scale(.95);
    }
}

.btn-white{
  background-color: #ffffff !important;
    border-color: #ffffff !important;
    color: #c76262!important;
    &:hover{
        background-color: #ffffff !important;
        transform: scale(1.05);
    }
}

.bg-custom{
    background-color: #c76262;
}
</style>
