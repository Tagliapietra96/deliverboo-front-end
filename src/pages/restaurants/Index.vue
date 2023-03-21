<template>
  <Loader v-if="store.dt.bool.loading" />
  <div v-else class="container">
    <FilterCategories />
    <div class="my-container">
      <h2 class="pt-4">I ristoranti su DeliveBoo</h2>
      <SearchBar @filterName="filterChild"></SearchBar>
      <div class="d-none d-md-block text-center mb-3 fw-bolder">
        <SearchBtn :static="true" />
      </div>
      <div v-if="store.dt.str.restaurantsMessage !== ''" class="alert alert-info custom-color fw-bolder py-4 fs-4">
        {{ store.dt.str.restaurantsMessage }}
      </div>
      <div class="py-4">
        <RestaurantsList :filter="filter" />
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
import RestaurantsList from "../../components/RestaurantsList.vue";
export default {
  data() {
    return {
      store,
      filter: "",
    };
  },

  methods: {
    filterChild(filterName) {
      this.filter = filterName;
    },
  },
  created() {
    store.dt.bool.loading = true;
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
  components: { Loader, SearchBar, SearchBtn, FilterCategories, RestaurantsList },
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

</style>
