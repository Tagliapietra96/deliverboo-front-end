<template>
  <div class="shadow-container">
    <div class="container pb-5">
      <h3 class="py-5">IL NOSTRO MENU</h3>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="dish in store.dt.dishesList" :key="dish.id">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center p-3">
                <img :src="dish.image" class="img-fluid rounded" alt="..." />
              </div>

              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ dish.name }}</h5>
                  <p class="card-text">{{ dish.description }}</p>
                  <p class="card-text">
                    <small class="text-muted">Prezzo: {{ dish.price }}€</small>
                  </p>
                  <router-link
                    :to="{ name: 'dish', params: { id: dish.id } }"
                    @click="onDishClick(dish.id)"
                    class="btn btn-custom"
                    >Piatto</router-link
                  >

                  <!-- <div class="my-3">
                                        <button class="btn btn-sm btn-primary btn-custom ">-</button>
                                        <span class="px-3">1</span>
                                        <button class="btn btn-sm btn-primary btn-custom m-3 ">+</button>
                                        <button class="btn btn-sm btn-primary btn-custom"><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div> -->
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onDishClick(dishId) {
      store.dt.selectedDish = dishId;
    },
  },
  mounted() {
    this.fetchDishes(store.dt.selectedRestaurant);
  },
};
</script>

<style lang="scss" scoped>
@use "../../styles/main.scss";
.card {
  height: 100%;
  background-color: #f9fafa;
  transition: all, 0.4s;
  img {
    aspect-ratio: 1/2;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
  }
}

.shadow-container {
  // box-shadow:
  box-shadow: inset 0px 8px 6px -6px #888;
}
</style>
