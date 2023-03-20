<template>
    <div v-if="store.dt.arr.myChart.length > 0 && !store.dt.bool.popUpForcedExit"
        :class="store.dt.bool.popUpVisibility ? 'active' : ''" class="card my-pop-up shadow overflow-hidden p-3">
        <button @click="store.fn.chart.deletePop()" class="delete btn-sm btn btn-primary btn-custom">
            <i class="fa-solid fa-trash-can"></i>
        </button>
        <div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                    <img v-if="store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.image.includes('http')"
                        :src="store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.image" class="img-fluid" alt="" />
                    <img v-else :src="
                        store.dt.str.beUrl +
                        '/storage/' +
                        store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.image
                    " class="img-fluid" alt="" />
                </div>
                <div class="col-12 col-md-6 col-lg-7 col-xl-8">
                    <h5 class="d-none d-xxl-block">
                        Hai aggiunto al tuo carrello:
                        {{ store.dt.arr.myChart[store.dt.num.dishShoppingIndex].item.name }}!
                    </h5>
                    <div class="d-none d-md-flex justify-content-around pt-3">
                        <button class="btn btn-primary btn-custom btn-sm px-3" @click="store.fn.chart.minusBtnPop()">
                            -
                        </button>
                        <div class="card w-25 text-center py-2 d-none d-lg-block">
                            {{ store.dt.arr.myChart[store.dt.num.dishShoppingIndex].quantity }}
                        </div>
                        <button class="btn btn-primary btn-custom btn-sm px-3" @click="store.fn.chart.plusBtnPop()">
                            +
                        </button>
                    </div>
                    <div class="pt-3">
                        <router-link :to="'/cart'" class="custom-color" @click="store.fn.chart.toChartPage()">
                            <small>Vai al tuo carrello!</small>
                        </router-link>
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
    mounted() {
        store.dt.bool.popUpForcedExit = false;
        store.dt.bool.popUpVisibility = false;
    },
}
</script>

<style lang="scss" scoped>
.my-pop-up {
  position: fixed;
  top: calc(74px + 20px);
  right: -400px;
  width: 30vw;
  z-index: -1;
  opacity: 0;
  transition: all, 0.4s;

  &.active {
    right: 20px;
    z-index: 15;
    opacity: 1;
  }

  &:hover {
    right: 20px;
    z-index: 15;
    opacity: 1;

    .delete {
      opacity: 1;
    }
  }

  .delete {
    position: absolute;
    bottom: 7px;
    right: 7px;
    opacity: 0.3;
    transition: opacity, 0.4s;
  }

  img {
    object-fit: cover;
    aspect-ratio: 1/1;
  }
}
</style>