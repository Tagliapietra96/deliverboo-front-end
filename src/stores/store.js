import { reactive } from "vue";
import { api } from "./api";
export const store = reactive({
  dt: {
    headerLinks: [
      {
        name: "Lavora con noi",
        url: "http://127.0.0.1:8000",
        active: false,
      },
      {
        name: "Vai ai ristoranti",
        url: "http://localhost:5174/i-nostri-ristoranti",
        active: false,
      },
      {
        name: "Il tuo carrello",
        url: "#",
        active: false,
      },
    ],
    loading: false,
    beUrl: "http://127.0.0.1:8000",
    categoriesUrl: "/api/categories",
    restaurantsUrl: "/api/restaurants/index",
    restaurantFiltersUrl: "/api/restaurants",
    dishesUrl: "/api/dishes/",
    categoriesList: [],
    restaurantsList: [],
    dishesList: [],
    selectedCategories: [],
  },
  fn: {
    fetchCategories() {
      api.get.index.categories();
    },
    fetchRestaurants(category) {
      api.get.index.restaurants(category);
    },
    fetchDishes() {
      api.get.index.dishes();
    },
    showCategories() {
      api.get.show.categories();
    },
    showRestaurants() {
      api.get.show.restaurants();
    },
    showDishes() {
      api.get.show.dishes();
    },
  },
});
