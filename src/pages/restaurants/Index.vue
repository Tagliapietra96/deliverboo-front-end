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
      selectedCategory: [],
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
              category: this.selectedCategory,
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
    store.fn.fetchCategories();
    store.fn.fetchRestaurants();
  },
};
</script>

<style scoped></style>
