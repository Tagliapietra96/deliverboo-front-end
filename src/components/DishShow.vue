<template>
    <div v-if="store.dt.obj.cardShow.active" :class="store.dt.obj.cardShow.active ? 'active' : ''" class="selected-dish">
        <div class="h-100 w-100 bg-invisible">
            <div class="card card-show border-0 rounded-4 overflow-hidden">
                <button @click="store.fn.chart.exitShow()" class="btn btn-primary btn-custom close-show">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img v-if="store.dt.obj.cardShow.card.image.includes('http')" :src="store.dt.obj.cardShow.card.image" class="card-img-top" alt="..."
                    :style="
                        store.dt.obj.cardShow.card.visibility
                            ? 'filter: grayscale(0)'
                            : 'filter: grayscale(100%)'
                    " />
                <img v-else :src="store.dt.beUrl + '/storage/' + store.dt.obj.cardShow.card.image" class="card-img-top" alt="..." :style="
                    store.dt.obj.cardShow.card.visibility
                        ? 'filter: grayscale(0)'
                        : 'filter: grayscale(100%)'
                " />
                <div class="card-body">
                    <h5 class="card-title">{{ store.dt.obj.cardShow.card.name }}</h5>
                    <p class="card-text">{{ store.dt.obj.cardShow.card.description }}</p>
                    <div class="px-3">
                        <div class="bg-light border text-center py-3 fs-4 rounded-2">
                            € {{ store.fn.math.totalPrice(store.dt.obj.cardShow.card.price, store.dt.obj.cardShow.quantity) }}
                        </div>
                        <div class="text-center py-3" v-if="store.dt.obj.cardShow.card.visibility">
                            <div class="btn-group" role="group">
                                <button type="button" :class="
                                    store.dt.arr.myChart.length === 0
                                        ? ''
                                        : store.dt.arr.myChart[0].item.restaurant_id !==
                                            store.dt.num.selectedRestaurant
                                            ? 'disabled'
                                            : ''
                                " class="btn btn-primary btn-custom d-none d-sm-inline" @click="store.fn.chart.minusBtn()">
                                    -
                                </button>
                                <button type="button" :class="
                                    store.dt.arr.myChart.length === 0
                                        ? ''
                                        : store.dt.arr.myChart[0].item.restaurant_id !==
                                            store.dt.num.selectedRestaurant
                                            ? 'disabled'
                                            : ''
                                " class="btn btn-primary btn-custom" @click="store.fn.chart.chartBtn()">
                                    <i class="fa-solid fa-cart-shopping me-3 d-none d-md-inline"></i>
                                    {{ store.dt.obj.cardShow.quantity }}
                                </button>
                                <button type="button" :class="
                                    store.dt.arr.myChart.length === 0
                                        ? ''
                                        : store.dt.arr.myChart[0].item.restaurant_id !==
                                            store.dt.num.selectedRestaurant
                                            ? 'disabled'
                                            : ''
                                " class="btn btn-primary btn-custom d-none d-sm-inline" @click="store.fn.chart.plusBtn()">
                                    +
                                </button>
                            </div>
                        </div>
                        <div class="pt-3" v-else>
                            <h5 class="text-center custom-color fw-bold">
                                Prodotto attualmente non disponibile
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
}
</script>

<style lang="scss" scoped></style>