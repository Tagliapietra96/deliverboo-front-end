<template>
  <div>
    <div v-for="category in store.dt.categoriesList" :key="category.id">
      <input
        type="checkbox"
        v-model="selectedCategory"
        :value="category.name"
      />
      <label>{{ category.name }}</label>
    </div>
    <button @click="fetchRestaurants">Cerca</button>
    <div v-for="(restaurant, i) in store.dt.restaurantsList" :key="i">
      {{ restaurant.name }}
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
      selectedCategory: [], // aggiungi la proprietà selectedCategory all'oggetto data
    };
  },
  methods: {
    fetchRestaurants() {
      axios
        .get(store.dt.beUrl + store.dt.restaurantFiltersUrl, {
          params: {
            category: this.selectedCategory,
          },
        })
        .then((response) => {
          this.store.dt.restaurantsList = response.data; // aggiorna la lista dei ristoranti con la risposta della chiamata
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    store.fn.fetchCategories();
    store.fn.fetchRestaurants();
  },
};
</script>

<style scoped></style>
