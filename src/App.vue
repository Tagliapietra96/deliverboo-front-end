<template lang="">
  <AppHeader/>
  <router-view></router-view>
  <DishesList></DishesList>
  <AppFooter/>
</template>

<script>
import { store } from "./stores/store";
import DishesList from "./components/dishes/DishesList.vue";
import AppHeader from './components/AppHeader.vue'; 
import AppFooter from './components/AppFooter.vue'; 
export default {

  components: { DishesList, AppHeader, AppFooter },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss">
@use "./styles/main.scss";
</style>
