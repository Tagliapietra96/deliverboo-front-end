import { reactive } from 'vue';
import axios from 'axios';
import store from './store';

export const api = reactive({
    get: {
        index: {
            categories(){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {

                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            restaurants(){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {

                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            dishes(){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {

                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            }
        },
        show:{
            categories(){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {

                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            restaurants(){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {

                    store.dt.loading = false;
                })
                .catch(e => {

                    store.dt.loading = false;
                });
            },
            dishes(){
                store.dt.loading = true;
                axios.get(store.dt.backEndUrl)
                .then(resp => {

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