import { reactive } from 'vue';
import {store} from '../main-store';

export const storageLocal = reactive({
    save() {
        localStorage.setItem("myChart", JSON.stringify(store.dt.arr.myChart));
    },
    load() {
        const myChart = localStorage.getItem("myChart");
        if (myChart) {
            store.dt.arr.myChart = JSON.parse(myChart);
        }
    }
})