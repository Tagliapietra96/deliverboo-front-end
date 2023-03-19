<template>
    <SearchBtn class="d-block d-md-none" :static="false" />
    <div class="link-container shadow py-4" :class="store.dt.bool.filtering ? 'active' : ''">
        <span class="title ps-3 custom-color">Categorie</span>
        <button @click="store.dt.bool.filtering = false" class="btn-close close-search" aria-label="Close"></button>
        <div class="pt-3 px-3" v-for="category in store.dt.arr.categoriesList" :key="category.id"
            @click="store.fn.ajax.fetchRestaurants(category.name)">
            <div class="form-check my-form-check">
                <input class="form-check-input my-checkbox" type="checkbox" id="flexCheckChecked"
                    :checked="store.dt.arr.selectedCategories.includes(category.name)" />
                <label class="form-check-label text-category ps-2">{{
                    category.name
                }}</label>
            </div>
        </div>
        <div @click="
            store.dt.arr.selectedCategories = [];
            store.fn.ajax.fetchRestaurants();" class="custom-color text-decoration-underline delete-categories ps-3">
            Svuota campi di ricerca
        </div>
    </div>
</template>

<script>
import { store } from '../stores/main-store';
import SearchBtn from './SearchBtn.vue';

export default {
    components: { SearchBtn },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>

.title {
  /* font-family: bold; */
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
}

.link-container {
  width: 250px;
  position: fixed;
  left: -400px;
  top: 74px;
  bottom: 0;
  background-color: white !important;
  z-index: 15;
  opacity: 0;
  transition: all, 0.5s;

  .delete-categories {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
  }

  &.active {
    left: 0;
    opacity: 0.99;
  }

  .close-search {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

.my-form-check {
  * {
    transition: transform, 0.5s, font-weight, 0.5s, color, 0.5s;
  }

  &:hover {
    cursor: pointer;

    .my-checkbox {
      // width: 20px;
      // height: 20px;
      transform: scale(1.05);

      &:hover {
        cursor: pointer;
      }
    }

    .text-category {
      font-weight: bold;
      color: #c76262;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>