import { reactive } from 'vue';
import { store } from '../main-store';
import { api } from '../api/api';

export const ajax = reactive({
    fetchCategories() {
        api.categories.index();
    },
    fetchRestaurants(category) {
        api.restaurants.index(category);
    },
    fetchDishes() {
        api.dishes.index(store.dt.num.selectedRestaurant);
    }
})