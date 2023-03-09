<template>
    <div class="container my-5">
        <div class="my-3">
            Stai acquistando il prodotto con <strong>id: {{ $route.params.id }}</strong>
        </div>
        <Payment></Payment>
        <div>
            <button v-if="!disableBuyButton" @click.prevent="beforeBuy" class="btn btn-dark">
                Procedi con l'acquisto
            </button>
            <button v-else class="btn btn-dark">
                {{ loadingPayment ? 'Loading...' : 'Procedi con l\'acquisto' }}
            </button>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { store } from "../../stores/store";
import Payment from '../../components/payment.vue';
export default {
    components: { Payment },
    data() {
        return {
            store,
            disableBuyButton: false,
            loadingPayment: true,
        };
    },
    mounted() {
    },
};
</script>
  
<style lang="scss" scoped>
</style>
