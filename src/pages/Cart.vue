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
    {{ total_order }}
    <form class="row g-3 needs-validation" novalidate @submit.prevent="submit">
      <div class="col-md-4">
        <label for="customer_name" class="form-label">Nome e Cognome</label>
        <input
          type="text"
          v-model="customer_name"
          class="form-control"
          name="customer_name"
          required
        />
        <div class="invalid-feedback">Inserisci nome e cognome.</div>
      </div>
      <div class="col-md-4">
        <label for="customer_address" class="form-label">Indirizzo</label>
        <input
          type="text"
          v-model="customer_address"
          class="form-control"
          name="customer_address"
          required
        />
        <div class="invalid-feedback">Inserisci un indirizzo.</div>
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
          required
        />
        <div class="invalid-feedback">Inserisci un numero di telefono.</div>
      </div>

      <div class="col-12">
        <button
          class="btn btn-primary"
          :disabled="store.dt.myChart.length === 0"
          type="submit"
        >
          Submit form
        </button>
      </div>
    </form>
  </div>
  <div>{{ resultPayment }}</div>
  <!--   <div id="paypal-button-container"></div> -->
  <div id="dropin-wrapper">
    <div id="checkout-message"></div>
    <div id="dropin-container"></div>
    <button id="submit-button">Submit payment</button>
  </div>
</template>

<script>
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
          // When the user clicks on the 'Submit payment' button this code will send the
          // encrypted payment information in a variable called a payment method nonce
          $.ajax({
            type: "POST",
            url: "/checkout",
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
              $("#checkout-message").html(
                '<h1>Success</h1><p>Your Drop-in UI is working! Check your <a href="https://sandbox.braintreegateway.com/login">sandbox Control Panel</a> for your test transactions.</p><p>Refresh to try another transaction.</p>'
              );
            } else {
              console.log(result);
              $("#checkout-message").html(
                "<h1>Error</h1><p>Check your console.</p>"
              );
            }
          });
        });
      });
    }
  );
});

/* paypal
  .Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "10.00",
            },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert(
          "Transaction completed by " + details.payer.name.given_name + "!"
        );
      });
    },
  })
  .render("#paypal-button-container"); */
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
import { store } from "../stores/store";
import axios from "axios";
export default {
  data() {
    return {
      customer_name: "",
      customer_address: "",
      customer_phone: "",
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
      // Controlla se "store.dt.myChart" esiste ed è un array valido
      if (store.dt.myChart && Array.isArray(store.dt.myChart)) {
        return store.dt.myChart.reduce((total, item) => {
          return total + parseFloat(item.price);
        }, 0);
      }
      return 0; // restituisce 0 se "store.dt.myChart" non è definito o non è un array
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
