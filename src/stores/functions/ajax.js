import { reactive } from 'vue';
import { api } from '../api/api';

export const ajax = reactive({
    fetchCategories() {
        api.categories.index();
    },
    fetchRestaurants(category) {
        api.restaurants.index(category);
    }
})