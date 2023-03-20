import { reactive } from 'vue';
import { store } from '../main-store';

export const chart = reactive({
    deletePop() {
        store.dt.bool.popUpVisibility = false;
        store.dt.bool.popUpForcedExit = true;
        store.dt.arr.myChart.splice(store.dt.num.dishShoppingIndex, 1);
    },
    minusBtnPop() {
        if (store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity === 1) {
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity = 99;
        } else {
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity--;
        }

        store.dt.arr.myChart[store.dt.num.dishShoppingIndex].price = store.fn.math.totalPrice(
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.price,
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity
        );
    },
    plusBtnPop() {
        if (store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity === 99) {
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity = 1;
        } else {
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity++;
        }

        store.dt.arr.myChart[store.dt.num.dishShoppingIndex].price = store.fn.math.totalPrice(
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.price,
            store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity
        );
    },
})