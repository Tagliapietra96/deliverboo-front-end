import { reactive } from 'vue';
import api from './api';

export const store = reactive({
    dt:{
        loading: false,
        backEndUrl: 'http://127.0.0.1:8000/',
    },
    fn:{
        fetchCategories(){
            api.get.index.categories();
        },
        fetchRestaurants(){
            api.get.index.restaurants();
        },
        fetchDishes(){
            api.get.index.dishes();
        },
        showCategories(){
            api.get.show.categories();
        },
        showRestaurants(){
            api.get.show.restaurants();
        },
        showDishes(){
            api.get.show.dishes();
        },
        
    }
});