<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<script>
import { store } from "./stores/main-store";
import AppHeader from './components/AppHeader.vue'; 
import AppFooter from './components/AppFooter.vue'; 
export default {
  components: { AppHeader, AppFooter },
  data() {
    return {};
  },
  mounted() {
    store.fn.storageLocal.load();
  },
  beforeUnmount(){
    store.fn.storageLocal.save();
  }
};
</script>

<style lang="scss">
@use "./styles/main.scss";
</style>
