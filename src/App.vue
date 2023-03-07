<template lang="">
  <router-view></router-view>
  <DishesList></DishesList>
</template>

<script>
import { store } from "./stores/store";
import DishesList from "./components/dishes/DishesList.vue";
export default {
  components: {DishesList},
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss">
@use "./styles/main.scss";
</style>
