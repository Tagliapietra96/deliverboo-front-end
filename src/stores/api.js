import { reactive } from 'vue';
import axios from 'axios';
import store from './store';

export const api = reactive({
    get: {
        index: {
            categories(storeArray){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {
                    storeArray = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            restaurants(storeArray){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {
                    storeArray = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            dishes(storeArray){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {
                    storeArray = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            }
        },
        show:{
            categories(storeArray){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {
                    storeArray = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            restaurants(storeArray){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {
                    storeArray = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            dishes(storeArray){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {
                    storeArray = resp.data;
                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            }
        }
    },
    post:{

    }
});