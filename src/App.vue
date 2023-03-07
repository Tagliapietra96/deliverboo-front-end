<template lang="">
  
</template>

<script>
import {store} from './stores/store';

export default {
  mounted() {
    store.fn.fetchCategories();
  }
}
</script>

<style lang="scss"></style>
