<template>
  <AppHeader/>
  <div class="scroll">
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import { store } from "./stores/main-store";
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, AppFooter },
  data() {
    return { store };
  },
  mounted() {
    store.fn.storageLocal.load();
  },
  beforeUnmount() {
    store.fn.storageLocal.save();
  }
};
</script>

<style lang="scss">
@use "./styles/main.scss";

.scroll {
  height: calc(100vh - 74px);
  overflow: auto;
}
</style>
