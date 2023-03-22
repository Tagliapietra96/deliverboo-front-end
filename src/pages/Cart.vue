<template>
  <Loader v-if="store.dt.bool.loading" />
  <div v-else>
    <DishChartEdit />
    <ChartList />
    <div class="container">
      <div class="row">
        <div class="col-5">
          <form class="row g-3" novalidate>
            <div class="col-md-12">
              <label for="customer_name" class="form-label">Nome e Cognome*</label>
              <input type="text" v-model="customer_name" class="form-control" name="customer_name"
                :class="{ 'is-invalid': formSubmitted && !customer_name }" required />
              <div class="invalid-feedback" v-if="formSubmitted && !customer_name">
                Inserisci nome e cognome.
              </div>
            </div>
            <div class="col-md-12">
              <label for="customer_address" class="form-label">Indirizzo*</label>
              <input type="text" v-model="customer_address" class="form-control" name="customer_address"
                :class="{ 'is-invalid': formSubmitted && !customer_address }" required />
              <div class="invalid-feedback" v-if="formSubmitted && !customer_address">
                Inserisci un indirizzo.
              </div>
            </div>
            <div class="col-md-12">
              <label for="customer_phone" class="form-label">Numero di telefono*</label>
              <input type="number" v-model="customer_phone" class="form-control" name="customer_phone"
                :class="{ 'is-invalid': formSubmitted && !customer_phone }" required />
              <div class="invalid-feedback" v-if="formSubmitted && !customer_phone">
                Inserisci un numero di telefono.
              </div>
            </div>
            <div class="col-md-12">
              <label for="customer_email" class="form-label">E-mail*</label>
              <input type="email" v-model="customer_email" class="form-control" name="customer_email"
                :class="{ 'is-invalid': formSubmitted && !customer_email }" required />
              <div class="invalid-feedback" v-if="formSubmitted && !customer_email">
                Inserisci una mail valida.
              </div>
            </div>
          </form>
        </div>
        <div class="col-7">
          <div>{{ resultPayment }}</div>
          <div id="dropin-wrapper">
            <div id="checkout-message"></div>
            <div id="dropin-container"></div>
            <button class="btn btn-primary btn-custom mb-5" @click="submit" :disabled="!formComplete" id="submit-button">
              Conferma Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "../router";
window.addEventListener("DOMContentLoaded", function () {
  var payButton = document.querySelector("#submit-button");
  braintree.dropin.create(
    {
      // Insert your tokenization key here
      authorization: "sandbox_hcrmmztj_h28c6qmktphjvv8n",
      container: "#dropin-container",
    },
    function (createErr, instance) {
      payButton.addEventListener("click", function () {
        instance.requestPaymentMethod(function (
          requestPaymentMethodErr,
          payload
        ) {
          store.dt.bool.loading = true;
          // When the user clicks on the 'Submit payment' button this code will send the
          // encrypted payment information in a variable called a payment method nonce
          $.ajax({
            type: "POST",
            url: store.dt.str.paymentUrl + store.dt.arr.payLink,
            data: { paymentMethodNonce: payload.nonce },
          }).done(function (result) {
            // Tear down the Drop-in UI
            instance.teardown(function (teardownErr) {
              if (teardownErr) {
                console.error("Could not tear down Drop-in UI!");
              } else {
                console.info("Drop-in UI has been torn down!");
                // Remove the 'Submit payment' button
                $("#submit-button").remove();
              }
            });

            if (result.success) {
              store.dt.arr.myChart = [];
              store.fn.storageLocal.save();
              store.fn.storageLocal.load();
              router.push("checkout");
            } else {
              $("#checkout-message").html(
                "<h1>Error</h1><p>Pagamento rifiutato.</p>"
              );
            }
            store.dt.bool.loading = false;
          });
        });
      });
    }
  );
});
import { store } from "../stores/main-store";
import axios from "axios";
import Loader from "../components/Loader.vue";
import DishChartEdit from "../components/DishChartEdit.vue";
import ChartList from "../components/ChartList.vue";
export default {
  data() {
    return {
      customer_email: "",
      customer_name: "",
      customer_address: "",
      customer_phone: "",
      formSubmitted: false,
      store,
      resultPayment: "",
    };
  },
  methods: {
    submit() {
      store.dt.arr.payLink = this.dishesBuy;
      this.formSubmitted = true;
      axios
        .post(
          "http://localhost:8000/api/take-data-order",
          {
            customer_email: this.customer_email,
            customer_name: this.customer_name,
            customer_address: this.customer_address,
            customer_phone: this.customer_phone,
            status: "In lavorazione",
            order_date: "2023/03/14",
            order_time: "2023/03/14",
            total_order: this.total_order,
            restaurant_id: this.restaurant_id,
            dish_id: this.dish_id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          store.fn.storageLocal.save();
          store.fn.storageLocal.load();
        })
        .catch((error) => {
          this.resultPayment = "Transazione negata";
        });
    },
  },
  mounted() {
    store.fn.storageLocal.load();
    const reload = localStorage.getItem("reload");
    if (reload) {
      this.reload = JSON.parse(reload);
    }
    if (this.reload === 0) {
      this.reload++;
      window.location.reload();
      localStorage.setItem("reload", JSON.stringify(this.reload));
    } else {
      this.reload = 0;
      localStorage.setItem("reload", JSON.stringify(this.reload));
    }
    store.dt.bool.loading = false;
  },
  beforeUnmount() {
    store.fn.storageLocal.save();
  },
  computed: {
    formComplete() {
      return (
        this.customer_name &&
        this.customer_address &&
        this.customer_phone &&
        this.customer_email
      );
    },

    dishesBuy() {
      return store.dt.arr.myChart.flatMap((item) =>
        Array.from({ length: item.quantity }, () => `&dishes[]=${item.item.id}`)
      );
    },
    dishBuyLink() {
      return `http://127.0.0.1:8000/api/orders/make/payment?token=fake-valid-nonce${this.dishesBuy.join(
        ""
      )}`;
    },
    dish_id() {
      return store.dt.arr.myChart.flatMap((item) =>
        Array.from({ length: item.quantity }, () => item.item.id)
      );
    },
    restaurant_id() {
      const item = store.dt.arr.myChart.find((item) => item.quantity > 0);
      return item ? item.item.restaurant_id : null;
    },
  },
  components: { Loader, DishChartEdit, ChartList },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 214px);

}
</style>
