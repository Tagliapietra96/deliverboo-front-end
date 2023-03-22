<template>
    <div v-if="store.dt.num.dishShoppingIndex !== -1 && !store.dt.bool.popUpForcedExit"
        :class="store.dt.num.dishShoppingIndex ? 'active' : ''" class="selected-dish">
        <div class="h-100 w-100 bg-invisible">
            <div class="card card-show border-0 rounded-4 overflow-hidden">
                <button @click="store.dt.num.dishShoppingIndex = -1" class="btn btn-primary btn-custom close-show">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img v-if="store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.image.includes('http')"
                    :src="store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.image" class="card-img-top" alt="..."
                    :style="
                        store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.visibility
                            ? 'filter: grayscale(0)'
                            : 'filter: grayscale(100%)'" />
                <img v-else :src="
                    store.dt.str.beUrl +
                    '/storage/' +
                    store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.image" class="card-img-top" alt="..."
                    :style="
                        store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.visibility ? 'filter: grayscale(0)' : 'filter: grayscale(100%)'" />
                <div class="card-body">
                    <h5 class="card-title">
                        {{ store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.name }}
                    </h5>
                    <p class="card-text">
                        {{ store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.description }}
                    </p>
                    <div class="px-3">
                        <div class="bg-light border text-center py-3 fs-4 rounded-2">
                            €
                            {{
                                store.fn.math.totalPrice(
                                    store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.price,
                                    store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity
                                )
                            }}
                        </div>

                        <div class="text-center py-3"
                            v-if="store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.visibility">
                            <div class="d-flex justify-content-around pt-3">
                                <button class="btn btn-primary btn-custom btn-sm px-3"
                                    @click="store.fn.chart.minusBtnPop(); store.fn.saveStorage(); store.fn.loadStorage();">
                                    -
                                </button>
                                <div class="card w-25 text-center py-2 d-none d-lg-block">
                                    {{ store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity }}
                                </div>
                                <button class="btn btn-primary btn-custom btn-sm px-3"
                                    @click="store.fn.chart.plusBtnPop(); store.fn.saveStorage(); store.fn.loadStorage();">
                                    +
                                </button>
                            </div>

                            <div class="text-center pt-3">
                                <button
                                    @click="store.fn.chart.deletePop(); store.dt.num.dishShoppingIndex = -1; store.fn.saveStorage(); store.fn.loadStorage();"
                                    class="delete btn-sm btn btn-primary btn-custom">
                                    <i class="fa-solid fa-trash-can"></i>
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
import { store } from '../stores/main-store'
export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        store.dt.num.dishShoppingIndex = -1;
        store.dt.bool.popUpForcedExit = false
    },
}
</script>

<style lang="scss" scoped>
.selected-dish {
  position: fixed !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 9999999999999999999992;
  opacity: 0;

  &.active {
    opacity: 1;
  }

  .card-show {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;

    &:hover {
      .close-show {
        opacity: 1;
      }
    }

    .close-show {
      position: absolute;
      top: 15px;
      right: 15px;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      opacity: 0.3;
      transition: opacity, 0.4s;
      z-index: 9999999999999999999999;

      &:hover {
        transform: rotate(360deg);
      }

      &:active {
        transform: rotate(-360deg);
      }
    }

    img {
      aspect-ratio: 2/1;
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>