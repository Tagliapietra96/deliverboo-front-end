<template>
  <div class="container">
    <h2 class="pt-3 pb-2">Il tuo Carrello</h2>
    <div class="py-1 mt-2 mb-5 custom-bg w-100 rounded-1"></div>
    <div class="row row-cols-1">
      <div class="col" v-for="(item, index) in store.dt.myChart" :key="index">
        <div class="single-row py-3 px-5">
          <div class="fw-bolder">{{ item.item.name }}:</div>
          <div>€ {{ item.price }}</div>
        </div>
      </div>
    </div>
    <button
      v-if="store.dt.myChart.length > 0"
      class="btn btn-ptimary btn-custom mt-3"
      @click="dropChart()"
    >
      Elimina carrello
    </button>
  </div>
  <form action="" method="POST">
    <button
      type="submit"
      :disabled="store.dt.myChart.length === 0"
      @click.prevent="payment()"
    >
      paga
    </button>
    <div>{{ resultPayment }}</div>
  </form>
</template>

<script>
import { store } from "../stores/store";
import axios from "axios";
export default {
  data() {
    return {
      store,
      resultPayment: "",
    };
  },
  methods: {
    dropChart() {
      store.dt.myChart = [];
      store.fn.saveStorage();
      store.fn.loadStorage();
    },
    payment() {
      console.log("ciao");
      axios
        .post(this.dishBuyLink)
        .then((response) => {
          this.resultPayment = "Transazione avvenuta con successo";
        })
        .catch((error) => {
          console.log(error);
          this.resultPayment = "Transazione negata";
        });
    },
  },

  mounted() {
    store.fn.loadStorage();
  },
  beforeUnmount() {
    store.fn.saveStorage();
  },
  computed: {
    dishesBuy() {
      return store.dt.myChart.flatMap((item) =>
        Array.from({ length: item.quantity }, () => `&dishes[]=${item.item.id}`)
      );
    },
    dishBuyLink() {
      return `http://127.0.0.1:8000/api/orders/make/payment?token=fake-valid-nonce${this.dishesBuy.join(
        ""
      )}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 214px);

  .single-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c76262;
    border-collapse: collapse !important;
  }
}
</style>
