<template>
  <div>
    <div
      v-for="category in store.dt.categoriesList"
      :key="category.id"
      @click="store.fn.fetchRestaurants(category.name)"
    >
      <input
        type="checkbox"
        :checked="store.dt.selectedCategories.includes(category.name)"
      />
      <label>{{ category.name }}</label>
    </div>
    <div v-for="(restaurant, i) in store.dt.restaurantsList" :key="i">
      <div v-if="restaurant">
        {{ restaurant.name }}
        <button @click="fetchDishes(restaurant.id)">Visualizza piatti</button>
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

<style scoped></style>
