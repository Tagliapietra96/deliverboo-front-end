<template>
    <div class="shadow-container">
        
        <div class="container pb-5">

            <h3 class="py-5">IL NOSTRO MENU</h3>

            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
                <div class="col" v-for="dish in store.dt.dishesList" :key="dish.id">
                    <div class="card shadow">
                        <img :src="dish.image" class="card-img-top" alt="...">
                        <!-- {{ dish.image }} -->
                        <!-- <img :src="store.dt.beUrl + '/storage/' + dish.image" class="card-img-top" alt="...">

                        <img src="" alt=""> -->

                        <div class="card-body">
                            <h5 class="card-title">{{ dish.name }}</h5>
                            <p class="card-text">{{ dish.description }}</p>
                            <p> Ingredienti: <strong>{{ dish.ingredients }}</strong></p>
                            <p>Prezzo: {{ dish.price }}€</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../../stores/store";
export default {
    data() {
        return {
            store,
        };
    },
    mounted() { 
        store.fn.fetchDishes();
    },
};
</script>
  
<style lang="scss" scoped>
@use "../../styles/main.scss";
 .card{
    height: 100%;
    background-color: #f9fafa;
    img{
        aspect-ratio: 3/4;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
    }
 }

 .shadow-container{
    // box-shadow:
    box-shadow: inset 0px 8px 6px -6px #888, inset 0px 8px 6px -6px #888;
 }
</style>