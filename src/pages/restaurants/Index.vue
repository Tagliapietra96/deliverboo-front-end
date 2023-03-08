<template>
  <div class="container">
  <div class="d-flex">
    <div class="link-container">
      <span class="title pt-3 ps-3">Categoria</span>
    <div class="pt-3 px-3" v-for="category in store.dt.categoriesList"
      :key="category.id"
      @click="store.fn.fetchRestaurants(category.name)"
    >
      <input
        type="checkbox"
        :checked="store.dt.selectedCategories.includes(category.name)"
      />
      <label class="ps-2">{{ category.name }}</label>
    </div>
  </div>
  <div class="">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center">
        <div class=" col card m-3 shadow p-3 rounded-3" v-for="(restaurant, i) in store.dt.restaurantsList" :key="i">
          <div v-if="restaurant">
            <div class="img-container">
              <img class="my-img-fluid rounded-3" :src="restaurant.image" alt="">
            </div>
            <h2 class="title"> {{ restaurant.name }} </h2>
          <button @click="fetchDishes(restaurant.id)">Menù</button>
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
  width: 300px;

} 

.title{
  font-family: bold;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
}

.img-container {
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding-bottom: 1rem;
}

.my-img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
