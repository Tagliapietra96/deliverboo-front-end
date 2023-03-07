<template lang="">
    <header class="navbar bg-light fixed-top navbar-expand-md shadow">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="http://localhost:5174/">
                <div class="logo fs-2 fw-bold d-flex align-items-center custom-color" style="height:48px">
                    <i class="fa-solid fa-bowl-food px-2"></i>
                    DeliveBoo
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <div class="offcanvas-title" id="offcanvasNavbarLabel">
                        <div class="logo fs-2 fw-bold d-flex align-items-center custom-color" style="height:48px">
                            <i class="fa-solid fa-bowl-food px-2"></i>
                            DeliveBoo
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item" v-for="element in store.dt.headerLinks">
                            <a class="nav-link" :class="(element.active) ? 'active' : ''" :href="element.url" @click="onLinkClick(element)">{{element.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="header-spacer"></div>
</template>
  
<script>
import { store } from "../stores/store";
export default {
    data() {
        return {
            store,

        };
    },
    methods: {
        onLinkClick(obj){
            store.dt.headerLinks.forEach(element => {
                element.active = false;
            });
            obj.active = true;
        }
    },
    mounted() { },
};
</script>
  
<style lang="scss" scoped>
    .header-spacer{
        height: 74px;
    }
</style>