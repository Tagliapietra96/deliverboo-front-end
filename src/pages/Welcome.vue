<template lang="">
  <Loader v-if="store.dt.loading" />
  <main v-else>
    <div class="bg-first-section"></div>
    <div class="container">
      <Carousel></Carousel>
      <CategoriesGallery/>
    </div>
    <WorkWithUs/>
  </main>
</template>

<script>
import { store } from "../stores/store";
import Loader from "../components/Loader.vue";
import SearchBar from "../components/SearchBar.vue";
import Carousel from "../components/Carousel.vue";
import CategoriesGallery from "../components/CategoriesGallery.vue";
import WorkWithUs from "../components/WorkWithUs.vue";
export default {
  components: { Loader, SearchBar, Carousel, CategoriesGallery, WorkWithUs },
  data() {
    return {
      store,
    };
  },
  
  mounted() {
    store.fn.fetchCategories();
    store.fn.fetchRestaurants();
    store.fn.loadStorage();

  },
  beforeUnmount() {
    store.fn.saveStorage()
  },
};
</script>

<style scoped lang="scss">
.bg-first-section {
  background-image: url("../assets/bg-homepage.jpg");
  height: 60vh;
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
}

</style>
