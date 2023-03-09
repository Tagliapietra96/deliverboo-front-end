<template>
  <Loader v-if="store.dt.loading"></Loader>
  <div v-else class="my-container">
    <div v-if="cardShow.active" :class="cardShow.active ? 'active' : ''" class="selected-dish">
      <div class="h-100 w-100 bg-invisible">
        <div class="card card-show border-0 rounded-4 overflow-hidden">
          <button @click="exitShow()" class="btn btn-primary btn-custom close-show"><i
              class="fa-solid fa-xmark"></i></button>
          <img :src="cardShow.card.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ cardShow.card.name }}</h5>
            <p class="card-text">{{ cardShow.card.description }}</p>
            <div class="px-3">
              <div class="bg-light border text-center py-3 fs-4 rounded-2">
                € {{ totalPrice(cardShow.card.price, cardShow.quantity) }}
              </div>
              <div class="text-center py-3">
                <div class="btn-group " role="group">
                  <button type="button" class="btn btn-primary btn-custom d-none d-sm-inline"
                    @click="minusBtn()">-</button>
                  <button type="button" class="btn btn-primary btn-custom" @click="chartBtn()"><i
                      class="fa-solid fa-cart-shopping me-3 d-none d-md-inline"></i> {{ cardShow.quantity }} </button>
                  <button type="button" class="btn btn-primary btn-custom d-none d-sm-inline"
                    @click="plusBtn()">+</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>


    <div class="container pb-5">
      <h3 class="py-5">IL NOSTRO MENU</h3>

      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-4">
        <div class="col" v-for="dish in store.dt.dishesList" :key="dish.id">
          <div class="card card-index h-100 mb-3 shadow overflow-hidden" @click="onCardClick(dish)">
            <div class="row g-0 h-100">
              <div class=" col-4 h-100">
                <img :src="dish.image" class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class=" col-8 h-100">
                <div class="card-body h-100 d-flex flex-column">
                  <h5 class="card-title">{{ dish.name }}</h5>
                  <p class="card-text">{{ dish.description }}</p>
                  <div class="flex-fill"></div>
                  <p class="card-text"><small class="text-muted">Prezzo:€ {{ dish.price }}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../stores/store";
import Loader from "../Loader.vue";
export default {
  components: { Loader },
  data() {
    return {
      store,
      cardShow: {
        card: {},
        active: false,
        quantity: 1,
      }
    };
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
      } else { };
    },
    totalPrice(num1, num2) {
      let total = num1 * num2
      return (Math.round(total * 100) / 100).toFixed(2);
    }
  },
  mounted() {
    store.fn.fetchDishes();
  },
};
</script>

<style lang="scss" scoped>
@use "../../styles/main.scss";

.selected-dish {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: .7);
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
      opacity: .3;
      transition: opacity, .4s;

      &:hover {
        transform: rotate(360deg)
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
}</style>
