<template>
    <div class="container my-5">
        <div class="my-3">
            Stai acquistando il prodotto con <strong>id: {{ $route.params.id }}</strong>
        </div>
        {{ tokenApi }}
        <Payment :authorization="tokenApi"></Payment>
        <div class="d-flex">
            <div class="me-3">
                <button v-if="!disableBuyButton" @click.prevent="beforeBuy" class="btn btn-dark">
                    Procedi con l'acquisto
                </button>
                <button v-else class="btn btn-dark">
                    {{ loadingPayment ? 'Loading...' : 'Procedi con l\'acquisto' }}
                </button>
            </div>
            <div>
                <router-link :to="`/products`">
                    <button class="btn btn-dark">Indietro</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import Payment from '../../components/payment.vue';
export default {
    components: { Payment },
    data() {
        return {
            tokenApi: "",
            disableBuyButton: true,
            loadingPayment: true,
        };
    },
    async mounted() {
       let responce = await axios.get('http://127.0.0.1:8000/api/orders/generate');
       this.tokenApi = responce.data.token;
       this.disableBuyButton = false;
       this.loadingPayment = false;
    },
};
</script>
  
<style lang="scss" scoped>
</style>
