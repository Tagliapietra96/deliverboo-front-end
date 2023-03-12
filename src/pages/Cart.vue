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
      <div class="col">
        <div class="single-row py-3 px-5">
          <div class="fw-bolder">Totale</div>
          <div>€ {{ total_order }}</div>
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
    <form class="row g-3" novalidate @submit.prevent="submit">
      <div class="col-md-4">
        <label for="customer_name" class="form-label">Nome e Cognome</label>
        <input
          type="text"
          v-model="customer_name"
          class="form-control"
          name="customer_name"
          :class="{ 'is-invalid': formSubmitted && !customer_name }"
          required
        />
        <div class="invalid-feedback" v-if="formSubmitted && !customer_name">
          Inserisci nome e cognome.
        </div>
      </div>
      <div class="col-md-4">
        <label for="customer_address" class="form-label">Indirizzo</label>
        <input
          type="text"
          v-model="customer_address"
          class="form-control"
          name="customer_address"
          :class="{ 'is-invalid': formSubmitted && !customer_address }"
          required
        />
        <div class="invalid-feedback" v-if="formSubmitted && !customer_address">
          Inserisci un indirizzo.
        </div>
      </div>
      <div class="col-md-4">
        <label for="customer_phone" class="form-label"
          >Numero di telefono</label
        >
        <input
          type="number"
          v-model="customer_phone"
          class="form-control"
          name="customer_phone"
          :class="{ 'is-invalid': formSubmitted && !customer_phone }"
          required
        />
        <div class="invalid-feedback" v-if="formSubmitted && !customer_phone">
          Inserisci un numero di telefono.
        </div>
      </div>
      <div class="col-12">
        <button
          class="btn btn-primary"
          :disabled="
            store.dt.myChart.length === 0 ||
            (formSubmitted &&
              (!customer_name || !customer_address || !customer_phone))
          "
          type="submit"
        >
          Paga e procedi con l'ordine
        </button>
      </div>
    </form>
  </div>
  <div>{{ resultPayment }}</div>
</template>

<script>
import { store } from "../stores/store";
import axios from "axios";
export default {
  data() {
    return {
      customer_name: "",
      customer_address: "",
      customer_phone: "",
      formSubmitted: false,
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
    submit() {
      this.formSubmitted = true;
      axios
        .post(
          "http://localhost:8000/api/take-data-order",
          {
            customer_name: this.customer_name,
            customer_address: this.customer_address,
            customer_phone: this.customer_phone,
            status: "OK",
            order_date: "2023/03/14",
            order_time: "2023/03/1",
            total_order: this.total_order,
            dish_id: this.dish_id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          this.payment();
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    payment() {
      console.log("ciao");
      axios
        .post(this.dishBuyLink)
        .then((response) => {
          this.resultPayment = "Transazione avvenuta con successo";
          store.dt.myChart = [];
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
    total_order() {
      return store.dt.myChart.reduce((total, item) => {
        return total + parseFloat(item.price);
      }, 0);
    },
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
    dish_id() {
      return store.dt.myChart.flatMap((item) =>
        Array.from({ length: item.quantity }, () => item.item.id)
      );
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
