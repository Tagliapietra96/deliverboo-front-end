import { reactive } from 'vue';
import { store } from '../main-store';
import axios from 'axios';

export const dishes = reactive({
    index(id) {
        store.dt.bool.loading = true;
        axios
          .get(store.dt.str.beUrl + store.dt.str.dishesUrl + id)
          .then((resp) => {
            store.dt.arr.dishesList = resp.data;
            // store.fn.dishFilter();
            store.dt.bool.loading = false;
          })
          .catch((e) => {
            store.dt.bool.loading = false;
          });
    }
})