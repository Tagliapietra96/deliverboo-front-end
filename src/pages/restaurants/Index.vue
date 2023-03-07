<template>
  <div>
    <div
      v-for="category in store.dt.categoriesList"
      :key="category.id"
      @click="fetchRestaurants(category.name)"
    >
      <input
        type="checkbox"
        :checked="selectedCategory.includes(category.name)"
      />
      <label>{{ category.name }}</label>
    </div>
    <div v-for="(restaurant, i) in store.dt.restaurantsList" :key="i">
      <div v-if="restaurant">
        {{ restaurant.name }}
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
      selectedCategory: [], // aggiungi la proprietà selectedCategory all'oggetto data
    };
  },
  methods: {
    fetchRestaurants(category) {
      if (this.selectedCategory.includes(category)) {
        this.selectedCategory = this.selectedCategory.filter(
          (cat) => cat !== category
        );
      } else {
        this.selectedCategory.push(category);
      }

      if (this.selectedCategory.length === 0) {
        axios
          .get(store.dt.beUrl + store.dt.restaurantsUrl)
          .then((response) => {
            this.store.dt.restaurantsList = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .get(store.dt.beUrl + store.dt.restaurantFiltersUrl, {
            params: {
              category: this.selectedCategory, // passa le categorie selezionate come array di parametri
            },
          })
          .then((response) => {
            this.store.dt.restaurantsList = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    store.fn.fetchCategories();
    store.fn.fetchRestaurants();
  },
};
</script>

<style scoped></style>
