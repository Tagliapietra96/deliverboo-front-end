<template>
  <Loader v-if="store.dt.bool.loading" />
  <div v-else class="container">
      <FilterCategories/>
    <div class="my-container">
      <h2 class="pt-4">I ristoranti su DeliveBoo</h2>
      <SearchBar @filterName="filterChild"></SearchBar>
      <div class="d-none d-md-block text-center mb-3 fw-bolder">
        <SearchBtn :static="true"/>
      </div>
      <div v-if="store.dt.str.restaurantsMessage !== ''" class="alert alert-info custom-color fw-bolder py-4 fs-4">
        {{ store.dt.str.restaurantsMessage }}
      </div>
      <div class="py-4">
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
                  }" @click="onMenuClick(restaurant.id)" class="btn btn-primary btn-custom">Menù</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../stores/main-store";
import Loader from "../../components/Loader.vue";
import SearchBar from "../../components/SearchBar.vue";
import SearchBtn from "../../components/SearchBtn.vue";
import FilterCategories from "../../components/FilterCategories.vue";
export default {
  data() {
    return {
      store,
      filter: "",
    };
  },

  methods: {
    onMenuClick(restaurantId) {
      store.dt.num.selectedRestaurant = restaurantId;
    },
    filterChild(filterName) {
      this.filter = filterName;
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
  mounted() {
    store.dt.bool.filtering = false;
    store.fn.storageLocal.load();
    store.fn.ajax.fetchCategories();
    store.fn.ajax.fetchRestaurants();
  },
  beforeUnmount() {
    store.fn.storageLocal.save();
  },
  components: { Loader, SearchBar, SearchBtn, FilterCategories },
};
</script>

<style lang="scss" scoped>
.alert-info {
  text-align: center;
  background-color: #c7626245 !important;
  border-color: #c76262;
}



.my-container {
  min-height: calc(100vh - 214px);
}

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

.my-form-check {
  * {
    transition: transform, 0.5s, font-weight, 0.5s, color, 0.5s;
  }

  &:hover {
    cursor: pointer;

    .my-checkbox {
      // width: 20px;
      // height: 20px;
      transform: scale(1.05);

      &:hover {
        cursor: pointer;
      }
    }

    .text-category {
      font-weight: bold;
      color: #c76262;

      &:hover {
        cursor: pointer;
      }
    }
  }
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
