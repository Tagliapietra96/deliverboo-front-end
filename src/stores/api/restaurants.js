import {reactive} from 'vue';
import {store} from '../main-store';
import axios from 'axios';

export const restaurants = reactive({
    index(category){
        store.dt.bool.loading = true;
        if (store.dt.arr.selectedCategories.includes(category)) {
          store.dt.arr.selectedCategories = store.dt.arr.selectedCategories.filter(
            (cat) => cat !== category
          );
        } else if (category !== undefined) {
          store.dt.arr.selectedCategories.push(category);
        }

        if (store.dt.arr.selectedCategories.length === 0) {
          axios
            .get(store.dt.str.beUrl + store.dt.str.restaurantsUrl)
            .then((response) => {
              store.dt.str.restaurantsMessage = "";
              store.dt.arr.restaurantsList = response.data.data;
              store.dt.bool.loading = false;
            })
            .catch((error) => {
              console.log(error);
              store.dt.bool.loading = false;
            });
        } else {
          axios
            .get(store.dt.str.beUrl + store.dt.str.restaurantFiltersUrl, {
              params: {
                category: store.dt.arr.selectedCategories,
              },
            })
            .then((response) => {
              store.dt.str.restaurantsMessage = response.data.message;

              store.dt.arr.restaurantsList = response.data.restaurants;

              store.dt.bool.loading = false;
            })
            .catch((error) => {
              console.log(error);
              store.dt.bool.loading = false;
            });
        }
    }
})