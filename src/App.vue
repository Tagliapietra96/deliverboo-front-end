<template lang="">
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
import { store } from "./stores/store";
import TheHeader from './components/TheHeader.vue'; 
export default {
  components: { TheHeader },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss">

</style>
