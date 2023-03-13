<template>
  <div>
    <div id="dropin-container"></div>
    <button id="submit-button" @click="submitPayment">Submit payment</button>
  </div>
</template>

<script>
const payButton = document.querySelector("#submit-button");
braintree.dropin.create(
  {
    authorization: "sandbox_hcrmmztj_h28c6qmktphjvv8n",
    container: "#dropin-container",
  },
  (createErr, instance) => {
    payButton.addEventListener("click", () => {
      instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
        axios
          .post("/checkout", { paymentMethodNonce: payload.nonce })
          .then((response) => {
            if (response.data.success) {
              console.log("Payment successful!");
            } else {
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  }
);
import axios from "axios";

export default {
  mounted() {},
  methods: {
    submitPayment() {
      // This method can be used instead of the click event listener in mounted()
    },
  },
};
</script>
