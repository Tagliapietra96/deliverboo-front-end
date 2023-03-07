import { reactive } from 'vue';
import { store } from './store';
import axios from 'axios';

export const api = reactive({
    get:{
        index:{
            categories(){
                store.dt.loading = true;
                axios.get(store.dt.beUrl + store.dt.categoriesUrl)
                .then(resp => {
                    store.dt.categoriesList = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                })
            },
            restaurants(){
                store.dt.loading = true;
                axios.get(store.dt.beUrl + store.dt.restaurantsUrl)
                .then(resp => {
                    store.dt.restaurantsList = resp.data.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                })
            },
            dishes(){
                store.dt.loading = true;
                axios.get(store.dt.beUrl + store.dt.dishesUrl)
                .then(resp => {
                    store.dt.dishesList = resp.data.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                })
            },
        },
        show:{
            categories(){
                store.dt.loading = true;
                axios.get(store.dt.beUrl + store.dt.categoriesUrl)
                .then(resp => {
                    store.dt.categoriesList = resp.data.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                })
            },
            restaurants(){
                store.dt.loading = true;
                axios.get(store.dt.beUrl + store.dt.restaurantsUrl)
                .then(resp => {
                    store.dt.restaurantsList = resp.data.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                })
            },
            dishes(){
                store.dt.loading = true;
                axios.get(store.dt.beUrl + store.dt.dishesUrl)
                .then(resp => {
                    store.dt.dishesList = resp.data.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                })
            },
        }
    }
});