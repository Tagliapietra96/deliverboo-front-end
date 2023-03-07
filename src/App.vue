<template lang="">
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<script>
import { store } from "./stores/store";
import AppHeader from './components/AppHeader.vue'; 
import AppFooter from './components/AppFooter.vue'; 
export default {
  components: { AppHeader, AppFooter },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss">
@use "./styles/main.scss";
</style>
