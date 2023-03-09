<template>
  <Loader v-if="store.dt.loading" />
  <div v-else class="container">
    <button @click="filtering = true" :class="(filtering) ? 'active' : ''" class="btn btn-primary btn-custom open-search shadow"><i class="fa-solid fa-magnifying-glass"></i></button>
    <div class="my-container">
      <div class="link-container shadow py-4" :class="(filtering) ? 'active' : ''">
        <span class="title ps-3 custom-color">Categoria</span>
        <button @click="filtering = false"  class="btn-close close-search" aria-label="Close"></button>
        <div class="pt-3 px-3" v-for="category in store.dt.categoriesList" :key="category.id"
          @click="store.fn.fetchRestaurants(category.name)">
          <div class="form-check my-form-check">
            <input class="form-check-input my-checkbox" type="checkbox" id="flexCheckChecked"
              :checked="store.dt.selectedCategories.includes(category.name)" />
            <label class="form-check-label text-category ps-2">{{
              category.name
            }}</label>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4" v-for="(restaurant, i) in store.dt.restaurantsList" :key="i">
            <div class="card shadow rounded-3">
              <div v-if="restaurant">
                <div class="img-container">
                  <img class="my-img-fluid" :src="restaurant.image" alt="" />
                </div>
                <h2 class="title">{{ restaurant.name }}</h2>
                <div class="d-flex justify-content-center pb-3">
                  <router-link :to="{
                    name: 'ristorante',
                    params: { name: restaurant.name },
                  }" @click="onMenuClick(restaurant.id)" class="btn btn-primary btn-custom">Menù</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../stores/store";
import axios from "axios";
import Loader from "../../components/Loader.vue";
export default {
  data() {
    return {
      store,
      filtering: false,
    };
  },
  methods: {
    onMenuClick(restaurantId) {
      store.dt.selectedRestaurant = restaurantId;
    },
  },
  mounted() {
    console.log(store.dt.selectedCategories);
    store.fn.fetchCategories();
    store.fn.fetchRestaurants();
  },
  components: { Loader },
};
</script>

<style lang="scss" scoped>

.open-search{
  position: fixed;
  border-radius: 50% !important;
  height: 60px;
  width: 60px;
  top: 89px;
  left: 15px;
  z-index: 15;
  transition: left, .5s, opacity, .5s;
  &.active{
    left: -150px;
    opacity: 0;
  }
}
.link-container {
  width: 250px;
  position: fixed;
  left: -400px;
  top: 74px;
  bottom: 0;
  background-color: white !important;
  z-index: 15;
  opacity: 0;
  transition: all, .5s;
  &.active{
    left: 0;
    opacity: .99;
  }
  

  .close-search{
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

.my-container {
  min-height: calc(100vh - 74px);
}

.title {
  /* font-family: bold; */
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
}

.img-container {
  width: 100%;
  height: 150px;
  object-fit: cover;
  padding-bottom: 1rem;
}

.my-img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.my-form-check {
  * {
    transition: transform, .5s, font-weight, .5s, color, .5s;
  }

  &:hover {
    .my-checkbox {
      // width: 20px;
      // height: 20px;
      transform: scale(1.05);
    }

    .text-category {
      font-weight: bold;
      color: #c76262;
    }
  }
}



.card {
  transition: transform, 0.5s;

  &:hover {
    transform: scale(1.05);
  }
}</style>
