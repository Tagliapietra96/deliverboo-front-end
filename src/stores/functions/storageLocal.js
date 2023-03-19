import { reactive } from 'vue';

export const storageLocal = reactive({
    save() {
        localStorage.setItem("myChart", JSON.stringify(store.dt.myChart));
    },
    load() {
        const myChart = localStorage.getItem("myChart");
        if (myChart) {
            store.dt.myChart = JSON.parse(myChart);
        }
    }
})