<template>
    <div class="container my-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="dish in products" :key="dish.id">
                <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex align-items-center p-3">
                            <img :src="dish.image" class="img-fluid rounded" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ dish.name }}</h5>
                                <p class="card-text">{{ dish.description }}</p>
                                <p class="card-text">
                                    <small class="text-muted">Prezzo: {{ dish.price }}€</small>
                                </p>
                                <router-link :to="`/checkout/${dish.id}`">
                                    <button class="btn btn-dark">Compra</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { store } from "../../stores/store";
export default {
    data() {
        return {
            store,
            products: [],
        };
    },
    async mounted() {
        const responce = await axios.get(store.dt.beUrl + '/api/products');
        this.products = responce.data.data;
    },
};
</script>
  
<style lang="scss" scoped>
</style>
