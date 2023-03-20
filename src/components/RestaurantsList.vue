<template>
    <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="(restaurant, i) in filterRestaurants" :key="i">
            <div class="card shadow rounded-3 overflow-hidden">
                <div v-if="restaurant">
                    <div class="img-container position-relative">
                        <img v-if="restaurant.image.includes('http')" class="my-img-fluid" :src="restaurant.image" alt="" />
                        <img v-else class="my-img-fluid" :src="store.dt.beUrl + '/storage/' + restaurant.image" alt="" />
                    </div>
                    <h2 class="title">{{ restaurant.name }}</h2>
                    <div class="category-badge">
                        <span class="badge custom-bg m-2" v-for="(category, index) in restaurant.categories" :key="index">
                            {{ category.name }}
                        </span>
                    </div>

                    <div class="d-flex justify-content-center pb-3 pt-4">
                        <router-link :to="{
                            name: 'ristorante',
                            params: { name: restaurant.name.replace(/\s+/g, '-') },
                        }" @click="onMenuClick(restaurant.id)" class="btn btn-primary btn-custom">Menù
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../stores/main-store';
export default {
    props: { filter: String },
    data() {
        return {
            store
        }
    },
    methods: {
        onMenuClick(restaurantId) {
            store.dt.num.selectedRestaurant = restaurantId;
            console.log(store.dt.num.selectedRestaurant)
        },
    },
    computed: {
        filterRestaurants() {
            if (this.filter === "") {
                return store.dt.arr.restaurantsList;
            } else {
                return store.dt.arr.restaurantsList.filter((restaurant) =>
                    restaurant.name.toLowerCase().includes(this.filter.toLowerCase())
                );
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.title {
    /* font-family: bold; */
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 1rem;
}

.img-container {
    width: 100%;
    height: 150px;
    object-fit: cover;
    padding-bottom: 1rem;
}

.my-img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.card {
    transition: transform, 0.5s;

    &:hover {
        transform: scale(1.05);
    }
}

.category-badge {
    position: absolute;
    top: 0;
    z-index: 3;
}
</style>