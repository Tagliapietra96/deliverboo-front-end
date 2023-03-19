<template >
    <button @click="store.dt.bool.filtering ? (store.dt.bool.filtering = false) : (store.dt.bool.filtering = true)"
        :class="dinamicClass" class="btn btn-primary btn-custom open-search shadow">
        <i class="fa-solid fa-magnifying-glass"></i>
    </button>
</template>

<script>
import {store} from '../stores/main-store';
export default {
    props:{
        static: Boolean,
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        dinamicClass(){
           let toReturn = '';
           store.dt.bool.filtering ? toReturn += 'active' : null;
           this.static ? toReturn += ' static' : null;
           return toReturn
        }
    },
}
</script>

<style lang="scss" scoped>
.open-search {
    position: fixed;
    border-radius: 50% !important;
    height: 60px;
    width: 60px;
    top: 89px;
    left: 15px;
    z-index: 15;
    transition: left, 0.5s, opacity, 0.5s;

    &.static {
        position: static !important;
        height: 80px;
        width: 80px;

        &.active {
            opacity: 1;
        }
    }

    &.active {
        left: -150px;
        opacity: 0;
    }
}
</style>