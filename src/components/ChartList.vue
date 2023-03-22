<template>
    <div class="container">
        <h2 class="pt-3 pb-2">Il tuo Carrello</h2>
        <div class="py-1 mt-2 mb-5 custom-bg w-100 rounded-1"></div>
        <div class="row row-cols-1">
            <div class="col" v-for="(item, index) in store.dt.arr.myChart" :key="index">
                <div class="single-row py-3 px-5">
                    <div class="row">
                        <div class="col-2 col-lg-1 align-items-center d-flex">
                            <div class="card d-flex justify-content-center align-items-center fw-bolder"
                                style="aspect-ratio: 1/1; width: 50px">
                                {{ item.quantity }}
                            </div>
                        </div>
                        <div class="col-6 col-lg-7 d-flex align-items-center">
                            <div class="fw-bolder">{{ item.item.name }}:</div>
                        </div>
                        <div class="col-3 text-end d-flex align-items-center justify-content-end">
                            <div>€ {{ item.price }}</div>
                        </div>
                        <div class="col-1 align-items-center d-flex">
                            <button class="btn btn-primary btn-custom" style="aspect-ratio: 1/1; width: 50px" @click="
                                store.dt.num.dishShoppingIndex = index;
                            store.dt.bool.popUpForcedExit = false;">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="single-row py-3 px-5">
                    <div class="row">
                        <div class="col-2 col-lg-1"></div>
                        <div class="fw-bolder col-6 col-lg-7">Totale:</div>
                        <div class="col-3 text-end">€ {{ total_order.toFixed(2) }}</div>
                        <div class="col-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <button v-if="store.dt.arr.myChart.length > 0" class="btn btn-ptimary btn-custom mt-3"
            @click="store.fn.chart.deleteChart()">
            Svuota carrello
        </button>

        <div class="py-1 mt-3 mb-5 custom-bg w-100 rounded-1"></div>
    </div>
</template>

<script>
import { store } from '../stores/main-store';
export default {
    data() {
        return {
            store
        }
    },
    computed: {
        total_order() {
            // Controlla se "store.dt.myChart" esiste ed è un array valido
            if (store.dt.arr.myChart && Array.isArray(store.dt.arr.myChart)) {
                return store.dt.arr.myChart.reduce((total, item) => {
                    return total + parseFloat(item.price);
                }, 0);
            }
            return 0; // restituisce 0 se "store.dt.myChart" non è definito o non è un array
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    min-height: calc(100vh - 214px);

    .single-row {
        border-bottom: 1px solid #c76262;
        border-collapse: collapse !important;
    }
}
</style>