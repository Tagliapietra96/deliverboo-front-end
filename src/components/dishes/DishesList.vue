<template>
  <Loader v-if="store.dt.loading"></Loader>
  <div v-else class="my-container">
    <div v-if="store.dt.myChart.length > 0 && !forcedExit" :class="popUpVisibility ? 'active' : ''"
      class="card my-pop-up shadow overflow-hidden p-3">
      <button @click="deletePop()" class="delete btn-sm btn btn-primary btn-custom">
        <i class="fa-solid fa-trash-can"></i>
      </button>
      <div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5 col-xl-4">
            <img v-if="store.dt.myChart[shoppingIndex].item.image.includes('http')"
              :src="store.dt.myChart[shoppingIndex].item.image" class="img-fluid" alt="" />
            <img v-else :src="store.dt.beUrl + '/storage/' + store.dt.myChart[shoppingIndex].item.image" class="img-fluid"
              alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-7 col-xl-8">
            <h5 class="d-none d-xxl-block">
              Hai aggiunto al tuo carrello:
              {{ store.dt.myChart[shoppingIndex].item.name }}!
            </h5>
            <div class="d-none d-md-flex justify-content-around pt-3">
              <button class="btn btn-primary btn-custom btn-sm px-3" @click="minusPop()">
                -
              </button>
              <div class="card w-25 text-center py-2 d-none d-lg-block">
                {{ store.dt.myChart[shoppingIndex].quantity }}
              </div>
              <button class="btn btn-primary btn-custom btn-sm px-3" @click="plusPop()">
                +
              </button>
            </div>
            <div class="pt-3">
              <router-link :to="'/cart'" class="custom-color" @click="toChartPage()"><small>Vai al tuo
                  carrello!</small></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cardShow.active" :class="cardShow.active ? 'active' : ''" class="selected-dish">
      <div class="h-100 w-100 bg-invisible">
        <div class="card card-show border-0 rounded-4 overflow-hidden">
          <button @click="exitShow()" class="btn btn-primary btn-custom close-show">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img v-if="cardShow.card.image.includes('http')" :src="cardShow.card.image" class="card-img-top" alt="..."
            :style="(cardShow.card.visibility) ? 'filter: grayscale(0)' : 'filter: grayscale(100%)'" />
          <img v-else :src="store.dt.beUrl + '/storage/' + cardShow.card.image" class="card-img-top" alt="..."
            :style="(cardShow.card.visibility) ? 'filter: grayscale(0)' : 'filter: grayscale(100%)'" />
          <div class="card-body">
            <h5 class="card-title">{{ cardShow.card.name }}</h5>
            <p class="card-text">{{ cardShow.card.description }}</p>
            <div class="px-3">
              <div class="bg-light border text-center py-3 fs-4 rounded-2">
                € {{ totalPrice(cardShow.card.price, cardShow.quantity) }}
              </div>
              <div class="text-center py-3" v-if="cardShow.card.visibility">
                <div class="btn-group " role="group">
                  <button type="button"
                    :class="(store.dt.myChart.length === 0) ? '' : (store.dt.myChart[0].item.restaurant_id !== store.dt.selectedRestaurant) ? 'disabled' : ''"
                    class="btn btn-primary btn-custom d-none d-sm-inline" @click="minusBtn()">
                    -
                  </button>
                  <button type="button"
                    :class="(store.dt.myChart.length === 0) ? '' : (store.dt.myChart[0].item.restaurant_id !== store.dt.selectedRestaurant) ? 'disabled' : ''"
                    class="btn btn-primary btn-custom" @click="chartBtn()">
                    <i class="fa-solid fa-cart-shopping me-3 d-none d-md-inline"></i>
                    {{ cardShow.quantity }}
                  </button>
                  <button type="button"
                    :class="(store.dt.myChart.length === 0) ? '' : (store.dt.myChart[0].item.restaurant_id !== store.dt.selectedRestaurant) ? 'disabled' : ''"
                    class="btn btn-primary btn-custom d-none d-sm-inline" @click="plusBtn()">
                    +
                  </button>
                </div>
              </div>
              <div class="pt-3" v-else>
                <h5 class="text-center custom-color fw-bold">Prodotto attualmente non disponibile</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div :class="(showCart) ? 'active' : ''" class="cart-preview shadow" v-if="(store.dt.myChart.length > 0 && store.dt.myChart[0].item.restaurant_id === store.dt.selectedRestaurant)">
      <div class="open-close" @click="(showCart) ? showCart = false : showCart = true ">
        <i class="fa-solid fa-chevron-up "></i>
      </div>
      <h5 class="py-3 custom-color ps-3">Il tuo carrello</h5>
      <div class="container-fluid overflow-auto">
        <div class="row align-items-center  border-bottom py-2" v-for="(dish, i) in store.dt.myChart">
        <div class="col-10 fw-bold">
          {{ dish.item.name }}:
        </div>
        <div class="col-2">
          {{ dish.quantity }}
        </div>
      </div>
      </div>
      
    </div>

    <div class="container pb-5">
      <h3 class="py-5">IL NOSTRO MENU</h3>

      <div v-if="(store.dt.myChart.length > 0 && store.dt.myChart[0].item.restaurant_id !== store.dt.selectedRestaurant)"
        class="alert alert-info custom-color fw-bolder py-4 fs-4">
        Stai provando ad acquistare un prodotto di un ristorante diverso da quello al quale stai già acquistando. Sei
        pregato di selezionare piatti da un ristorante alla volta! <br>
        Se vuoi comunque acquistare questi prodotti, svuota prima il carrello <br>
         <button v-if="store.dt.myChart.length > 0"
          class="btn btn-ptimary btn-custom mt-3"
          @click="store.dt.myChart = []; store.fn.saveStorage(); store.fn.loadStorage()">
          Elimina carrello
        </button>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-4 mt-3">
        <div class="col" v-for="dish in store.dt.dishesList" :key="dish.id">
          <div class="card card-index h-100 mb-3 shadow overflow-hidden" @click="onCardClick(dish)">
            <div class="row g-0 h-100">
              <div class="col-4 h-100" :style="(dish.visibility) ? 'filter: grayscale(0)' : 'filter: grayscale(100%)'">
                <img v-if="dish.image.includes('http')" class="img-fluid rounded-start h-100" :src="dish.image" alt="" />
                <img v-else class="img-fluid rounded-start h-100" :src="store.dt.beUrl + '/storage/' + dish.image"
                  alt="" />
              </div>
              <div class="col-8 h-100">
                <div class="card-body h-100 d-flex flex-column">
                  <h5 class="card-title">{{ dish.name }}</h5>
                  <p class="card-text">{{ dish.description }}</p>
                  <div class="flex-fill"></div>
                  <p class="card-text">
                    <small class="text-muted">Prezzo:€ {{ dish.price.toFixed(2) }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <BarChart/>

  </div>
</template>

<script>
import { store } from "../../stores/store";
import BarChart from "../BarChart.vue";
import Loader from "../Loader.vue";
export default {
  components: { Loader, BarChart },
  data() {
    return {
      store,
      cardShow: {
        card: {},
        active: false,
        quantity: 1,
      },
      popUpVisibility: false,
      forcedExit: false,
      shoppingIndex: 0,
      showCart: false,
    };
  },
  computed: {
    total_order() {
      // Controlla se "store.dt.myChart" esiste ed è un array valido
      if (store.dt.myChart && Array.isArray(store.dt.myChart)) {
        return store.dt.myChart.reduce((total, item) => {
          return total + parseFloat(item.price);
        }, 0);
      }
      return 0; // restituisce 0 se "store.dt.myChart" non è definito o non è un array
    },
  },
  methods: {
    onCardClick(myCard) {
      this.cardShow.card = myCard;
      this.cardShow.quantity = 1;
      this.cardShow.active = true;
    },
    exitShow() {
      this.cardShow.active = false;
    },
    minusBtn() {
      if (this.cardShow.quantity === 1) {
        this.cardShow.quantity = 99;
      } else {
        this.cardShow.quantity--;
      }
    },
    plusBtn() {
      if (this.cardShow.quantity === 99) {
        this.cardShow.quantity = 1;
      } else {
        this.cardShow.quantity++;
      }
    },
    chartBtn() {
      if (this.cardShow.quantity < 1) {
        this.cardShow.quantity = 1;
      } else if (this.cardShow.quantity > 99) {
        this.cardShow.quantity = 99;
      }

      const toPush = {
        item: this.cardShow.card,
        quantity: this.cardShow.quantity,
        price: this.totalPrice(
          this.cardShow.card.price,
          this.cardShow.quantity
        ),
      }

      let toReturn = true;
      let abort = false;

      if (store.dt.myChart.length > 0) {
        store.dt.myChart.forEach((element, i) => {
          if (element.item.restaurant_id !== toPush.item.restaurant_id) {
            toReturn = false;
            abort = true;
          } else if (element.item.id === toPush.item.id) {
            toReturn = false;
            element.quantity += toPush.quantity;
            element.price = this.totalPrice(
              element.item.price,
              element.quantity
            );
            this.shoppingIndex = i;
          }
        })
      }

      if (toReturn) {
        store.dt.myChart.push(toPush);
        this.shoppingIndex = (store.dt.myChart.length - 1);
      }

      if (abort) {
        return
      } else {
        this.exitShow();
        this.forcedExit = false;
        this.popUpVisibility = true;
        setTimeout(() => {
          this.popUpVisibility = false;
        }, 5000);
      }
    },
    totalPrice(num1, num2) {
      let total = num1 * num2;
      return (Math.round(total * 100) / 100).toFixed(2);
    },
    minusPop() {
      if (store.dt.myChart[this.shoppingIndex].quantity === 1) {
        store.dt.myChart[this.shoppingIndex].quantity = 99;
      } else {
        store.dt.myChart[this.shoppingIndex].quantity--;
      }

      store.dt.myChart[this.shoppingIndex].price = this.totalPrice(
        store.dt.myChart[this.shoppingIndex].item.price,
        store.dt.myChart[this.shoppingIndex].quantity
      )
    },
    plusPop() {
      if (store.dt.myChart[this.shoppingIndex].quantity === 99) {
        store.dt.myChart[this.shoppingIndex].quantity = 1;
      } else {
        store.dt.myChart[this.shoppingIndex].quantity++;
      }

      store.dt.myChart[this.shoppingIndex].price = this.totalPrice(
        store.dt.myChart[this.shoppingIndex].item.price,
        store.dt.myChart[this.shoppingIndex].quantity
      )
    },
    deletePop() {
      this.popUpVisibility = false;
      this.forcedExit = true;
      store.dt.myChart.splice(this.shoppingIndex, 1);
    },
    toChartPage() {
      store.dt.headerLinks.forEach(element => {
        element.active = false;
      });
      store.dt.headerLinks[2].active = true;
    }
  },
  mounted() {
    store.fn.fetchDishes();
    store.fn.loadStorage();
  },
  beforeUnmount() {
    store.fn.saveStorage()
  },
};
</script>

<style lang="scss" scoped>
@use "../../styles/main.scss";

.alert-info {
  text-align: center;
  background-color: #c7626245 !important;
  border-color: #c76262;
}

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

.selected-dish {
  position: fixed;
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

.card-index {
  transition: all, 0.4s;

  img {
    min-height: 250px;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}

.my-container {
  min-height: calc(100vh - 214px);
}

.cart-preview{
  position: fixed;
  right: 0;
  top: 74px;
  bottom: 0;
  left: 100%;
  background-color: white;
  z-index: 3;

  transition: all .4s;

  h5,
  .container-fluid{
    opacity: 0;

  }


  .open-close{
    padding: .7rem 2rem;
    background-color: white;
    position: absolute;
    top: 50%;
    right: -25px;
    transform: rotate(-90deg);
    border-radius: 10px;
    border-top: 1px solid lightgrey;
    padding-bottom: 0.3rem;
    transition: right .4s;
    cursor: pointer;

    i{
      transform: rotate(0);
      transition: all .7s;
    }
  }

  &.active{
    left: calc(100vw - 250px);


    h5,
  .container-fluid{
    opacity: 1;
    transition: opacity .4s .2s;
  }
    .open-close{
      right: 210px;

      i{
        transform: rotate(-180deg);
      }
    }
  }
}

</style>
