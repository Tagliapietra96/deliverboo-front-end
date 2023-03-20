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
    toChartPage() {
        store.dt.arr.headerLinks.forEach((element) => {
            element.active = false;
        });
        store.dt.arr.headerLinks[2].active = true;
    },
    exitShow() {
        store.dt.obj.cardShow.active = false;
    },
    minusBtnShow() {
        if (store.dt.obj.cardShow.quantity === 1) {
            store.dt.obj.cardShow.quantity = 99;
        } else {
            store.dt.obj.cardShow.quantity--;
        }
    },
    plusBtnShow() {
        if (store.dt.obj.cardShow.quantity === 99) {
            store.dt.obj.cardShow.quantity = 1;
        } else {
            store.dt.obj.cardShow.quantity++;
        }
    },
    chartBtn() {
        if (store.dt.obj.cardShow.quantity < 1) {
            store.dt.obj.cardShow.quantity = 1;
        } else if (store.dt.obj.cardShow.quantity > 99) {
            store.dt.obj.cardShow.quantity = 99;
        }

        const toPush = {
            item: store.dt.obj.cardShow.card,
            quantity: store.dt.obj.cardShow.quantity,
            price: store.fn.math.totalPrice(
                store.dt.obj.cardShow.card.price,
                store.dt.obj.cardShow.quantity
            ),
        };

        let toReturn = true;
        let abort = false;

        if (store.dt.arr.myChart.length > 0) {
            store.dt.arr.myChart.forEach((element, i) => {
                if (element.item.restaurant_id !== toPush.item.restaurant_id) {
                    toReturn = false;
                    abort = true;
                } else if (element.item.id === toPush.item.id) {
                    toReturn = false;
                    element.quantity += toPush.quantity;
                    element.price = store.fn.math.totalPrice(
                        element.item.price,
                        element.quantity
                    );
                    store.dt.num.dishShoppingIndex = i;
                }
            });
        }

        if (toReturn) {
            store.dt.arr.myChart.push(toPush);
            store.dt.num.dishShoppingIndex = store.dt.arr.myChart.length - 1;
        }

        if (abort) {
            return;
        } else {
            store.fn.chart.exitShow();
            store.dt.bool.popUpForcedExit = false;
            store.dt.bool.popUpVisibility = true;
            setTimeout(() => {
                store.dt.bool.popUpVisibility = false;
            }, 5000);
        }
    }
})