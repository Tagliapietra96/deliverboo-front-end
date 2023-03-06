import { reactive } from 'vue';
import api from './api';

export const store = reactive({
    dt:{
        loading: false,
        backEndUrl: 'http://127.0.0.1:8000/',
        allCategories: [],
        allRestaurants: [],
        allDishes: [],
        singleCategories: [],
        singleRestaurants: [],
        singleDishes: [],
    },
    fn:{
        fetchCategories(){
            api.get.index.categories(allCategories);
        },
        fetchRestaurants(){
            api.get.index.restaurants(allRestaurants);
        },
        fetchDishes(){
            api.get.index.dishes(allDishes);
        },
        showCategories(){
            api.get.show.categories(singleCategories);
        },
        showRestaurants(){
            api.get.show.restaurants(singleRestaurants);
        },
        showDishes(){
            api.get.show.dishes(singleDishes);
        },
        
    }
});