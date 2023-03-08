<template>
  <div class="container">
  <div class="d-flex">
    <div class="link-container py-4">
      <span class="title ps-3 custom-color">Categoria</span>
    <div class="pt-3 px-3" v-for="category in store.dt.categoriesList" :key="category.id" @click="store.fn.fetchRestaurants(category.name)">
      <div class="form-check">
        <input class="form-check-input my-checkbox" type="checkbox" id="flexCheckChecked" :checked="store.dt.selectedCategories.includes(category.name)"/>
        <label class="form-check-label text-category ps-2">{{ category.name }}</label>
      </div>
    </div>
  </div>
    <div class="py-4 ps-3 flex-fill">
      <div class="row g-3">
        <div class=" col-12 col-md-6 col-lg-4"  v-for="(restaurant, i) in store.dt.restaurantsList" :key="i">
          <div class="card shadow rounded-3">
            <div v-if="restaurant">
              <div class="img-container">
                <img class="my-img-fluid" :src="restaurant.image" alt="">
              </div>
              <h2 class="title"> {{ restaurant.name }} </h2>
              <div class="d-flex justify-content-center pb-3">
                <button @click="fetchDishes(restaurant.id)" class="btn btn-custom">Menù</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>    
    <div v-for="(dish, i) in store.dt.dishesList" :key="i">
      <div v-if="dish">
        {{ dish.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../stores/store";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    fetchDishes(restaurantId) {
      axios
        .get(store.dt.beUrl + store.dt.dishesUrl + restaurantId)
        .then((response) => {
          this.store.dt.dishesList = response.data;
          console.log(this.store.dt.dishesList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log(store.dt.selectedCategories)
    store.fn.fetchCategories();
    store.fn.fetchRestaurants();
  },
};
</script>

<style scoped>
.link-container {
  width: 250px;

} 

.title{
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

.my-checkbox:hover {
  width: 20px;
  height: 20px;
  transform: scale(1.05);
}

.card:hover {
  transform: scale(1.05);
}

.text-category:hover{
  font-weight: bold;
  color: #c76262;
}

</style>
