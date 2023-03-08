import { reactive } from "vue";
import { store } from "./store";
import axios from "axios";

export const api = reactive({
  get: {
    index: {
      categories() {
        store.dt.loading = true;
        axios
          .get(store.dt.beUrl + store.dt.categoriesUrl)
          .then((resp) => {
            store.dt.categoriesList = resp.data;
            store.dt.loading = false;
          })
          .catch((e) => {
            store.dt.loading = false;
          });
      },
      restaurants(category) {
        store.dt.loading = true;
        if (store.dt.selectedCategories.includes(category)) {
            store.dt.selectedCategories = store.dt.selectedCategories.filter(
              (cat) => cat !== category
            );
          } else if(category !== undefined){
            store.dt.selectedCategories.push(category);
          }
    
          if (store.dt.selectedCategories.length === 0) {
            axios
              .get(store.dt.beUrl + store.dt.restaurantsUrl)
              .then((response) => {
                store.dt.restaurantsList = response.data.data;
                store.dt.loading = false;
              })
              .catch((error) => {
                console.log(error);
                store.dt.loading = false;
              });
          } else {
            axios
              .get(store.dt.beUrl + store.dt.restaurantFiltersUrl, {
                params: {
                  category: store.dt.selectedCategories,
                },
              })
              .then((response) => {
                store.dt.restaurantsList = response.data;
                store.dt.loading = false;
              })
              .catch((error) => {
                console.log(error);
                store.dt.loading = false;
              });
          }
      },
      dishes() {
        store.dt.loading = true;
        axios
          .get(store.dt.beUrl + store.dt.dishesUrl)
          .then((resp) => {
            store.dt.dishesList = resp.data.data;
            store.dt.loading = false;
          })
          .catch((e) => {
            store.dt.loading = false;
          });
      },
    },
    show: {
      categories() {
        store.dt.loading = true;
        axios
          .get(store.dt.beUrl + store.dt.categoriesUrl)
          .then((resp) => {
            store.dt.categoriesList = resp.data.data;
            store.dt.loading = false;
          })
          .catch((e) => {
            store.dt.loading = false;
          });
      },
      restaurants() {
        store.dt.loading = true;
        axios
          .get(store.dt.beUrl + store.dt.restaurantsUrl)
          .then((resp) => {
            store.dt.restaurantsList = resp.data.data;
            store.dt.loading = false;
          })
          .catch((e) => {
            store.dt.loading = false;
          });
      },
      dishes() {
        store.dt.loading = true;
        axios
          .get(store.dt.beUrl + store.dt.dishesUrl + this.$route.params.id)
          .then((resp) => {
            store.dt.dishesList = resp.data.data;
            store.dt.loading = false;
          })
          .catch((e) => {
            store.dt.loading = false;
          });
      },
    },
  },
});
