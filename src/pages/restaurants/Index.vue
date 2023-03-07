<template lang="">
  <div v-for="element in store.dt.restaurantsList">
    {{ element }}
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
    store.fn.fetchRestaurants();
  },
};
</script>

<style lang="scss"></style>
