import {reactive} from 'vue';
import {store} from '../main-store';
import axios from 'axios';

export const categories = reactive({
    index(){
        store.dt.bool.loading = true;
        axios
          .get(store.dt.str.beUrl + store.dt.str.categoriesUrl)
          .then((resp) => {
            store.dt.arr.categoriesList = resp.data;
            store.dt.bool.loading = false;
          })
          .catch((e) => {
            store.dt.bool.loading = false;
          });
    },
    
})