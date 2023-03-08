<template lang="">
  <Loader v-if="store.dt.loading"/>
  <main v-else>
    <div class="bg-first-section">
  </div>
<div class=" container">
  <div class=" py-5">
    <h2 class="pb-5 pt-3 title">La selezione di Deliveboo</h2>
    <div class="row g-5">
      
      <div v-for="element, i in store.dt.categoriesList" :class="colSelector(i)" class=" img-section position-relative filter-hover">
        <router-link :to="'/i-nostri-ristoranti'" @click="onCardClick(element.name)">
        <img class="my-img-fluid rounded-4" :src="store.dt.categoriesImgs[i]" alt="">
          <span class="description">{{element.name}}</span>
        </router-link>
      </div>
      
    </div>
  </div>
</div>
  <div class="pt-5">
    <div class="custom-bg">
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
  </main>
  
</template>

<script>
import { store } from "../stores/store";
import Loader from '../components/Loader.vue';
export default {
  components: { Loader },
  data() {
    return {
      store,
    };
  },
  methods: {
    colSelector(num) {
      if (num % 4 === 0) {
        return 'col-5';
      } else if ((num - 1) % 4 === 0) {
        return 'col-7';
      } else {
        if (num % 2 === 0) {
          return 'col-7'
        } else {
          return 'col-5'
        }
      }
    },
    onCardClick(category) {
      store.dt.selectedCategories = [];
      store.dt.selectedCategories.push(category);
    }
  },
  mounted() {
    store.fn.fetchCategories();
  },
};
</script>

<style scoped lang="scss">
.bg-first-section {
  background-image: url("../assets/bg-homepage.jpg");
  height: 60vh;
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
}


.title {
  font-family: bold;
  font-weight: bolder;
  font-size: 3rem;
}

.img-section {
  height: 200px;
}

;

.my-img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 14px #000000;
}

;

.description {
  font-size: 3rem;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bolder;
  color: white;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);

  * {
    box-shadow: 10px 10x black;
  }
}

.filter-hover {
  filter: grayscale(0);
  transform: scale(1);
  transition: filter, .5s, transform, .5s;

  &:hover {
    filter: grayscale(100%);
    transform: scale(1.05);
  }
}

.my-col {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 16px;
  color: #ffff;
}


.btn-white {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
  color: #c76262 !important;

  &:hover {
    background-color: #ffffff !important;
    transform: scale(1.05);
  }
}</style>
