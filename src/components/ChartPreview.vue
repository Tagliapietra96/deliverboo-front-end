<template>
    <div :class="store.dt.bool.showChartPreview ? 'active' : ''" class="cart-preview shadow" 
    v-if="
        store.dt.arr.myChart.length > 0 &&
        store.dt.arr.myChart[0].item.restaurant_id === store.dt.num.selectedRestaurant">
        <div class="open-close"
            @click="store.dt.bool.showChartPreview ? (store.dt.bool.showChartPreview = false) : (store.dt.bool.showChartPreview = true)">
            <i class="fa-solid fa-cart-shopping me-2 ms-2"></i>
        </div>
        <router-link :to="'/cart'" class="custom-color text-decoration-none" @click="store.fn.chart.toChartPage()">
            <h5 class="py-3 custom-color ps-3">Il tuo carrello</h5>
        </router-link>
        <div class="container-fluid overflow-auto">
            <div class="row align-items-center border-bottom py-2" v-for="(dish, i) in store.dt.arr.myChart">
                <div class="col-2">
                    <button class="btn btn-primary btn-custom btn-sm" @click="store.fn.chart.chartPreviewBtn(i)">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
                <div class="col-8 fw-bold"><span>{{ dish.item.name }}:</span></div>
                <div class="col-2">
                    {{ dish.quantity }}
                </div>
            </div>
            <div class="d-flex justify-content-between fw-bold">
                <div>Totale</div>
                <div>{{ total_order.toFixed(2) }} €</div>
            </div>
            <div class="pt-3">
                <small class=" text-decoration-underline custom-color" @click="store.fn.chart.deleteChart()">
                    Svuota carrello
                </small>
            </div>
            <div class="chart-link">
                <router-link :to="'/cart'" class="custom-color" @click="store.fn.chart.toChartPage()"><small>Vai al tuo
                        carrello!</small></router-link>
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
.cart-preview {
  position: fixed !important;
  right: 0;
  top: 74px;
  bottom: 0;
  left: 100%;
  background-color: white;
  z-index: 3;

  transition: all 0.4s;

  h5,
  .container-fluid {
    opacity: 0;
  }

  .open-close {
    padding: 0.7rem 2rem;
    background-color: white;
    position: absolute;
    top: 50%;
    right: -25px;
    transform: rotate(-90deg);
    border-radius: 10px;
    border-top: 1px solid lightgrey;
    padding-bottom: 1rem;
    transition: right 0.4s;
    cursor: pointer;

    i {
      transform: rotate(90deg);
      transition: all 0.7s;
    }
  }

  &.active {
    left: calc(100vw - 350px);

    h5,
    .container-fluid {
      opacity: 1;
      transition: opacity 0.4s 0.2s;
    }

    .open-close {
      right: 310px;

      i {
        transform: rotate(450deg);
      }
    }
  }
}


small{
  cursor: pointer;
}

.chart-link{
  position: absolute;
  bottom: 15px;
  left: 20px;
}


</style>