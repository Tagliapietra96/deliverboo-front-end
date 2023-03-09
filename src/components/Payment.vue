<template>
    <div class="container my-5">
        <div class="my-3">
            Payment Component
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { store } from "../stores/store";
export default {
    data() {
        return {
            store,
        };
    },
    mounted() {
    },
};
</script>
  
<style lang="scss" scoped>
</style>
