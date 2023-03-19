<template lang="">
    <div class="py-5">
        <h2 class="pt-3 title">La selezione di DeliveBoo</h2>
        <div class="py-1 mt-2 mb-5 custom-bg w-100 rounded-1"></div>
        <div class="row g-2 g-sm-3 g-md-5">
          <div
            v-for="(element, i) in store.dt.arr.categoriesList"
            :class="colSelector(i)"
            class="col-6 img-section position-relative filter-hover"
          >
            <router-link
              :to="'/i-nostri-ristoranti'"
              @click="onCardClick(element.name)"
            >
              <img
                class="my-img-fluid rounded-4"
                :src="store.dt.arr.categoriesImgs[i]"
                alt=""
              />
              <span class="description">{{ element.name }}</span>
            </router-link>
          </div>
        </div>
      </div>
</template>

<script>
import { store } from "../stores/main-store";
export default {
    data(){
        return{
            store
        }
    },
    methods: {
    colSelector(num) {
      if (num % 4 === 0) {
        return "col-md-5";
      } else if ((num - 1) % 4 === 0) {
        return "col-md-7";
      } else {
        if (num % 2 === 0) {
          return "col-md-7";
        } else {
          return "col-md-5";
        }
      }
    },
    onCardClick(category) {
      store.dt.arr.selectedCategories = [];
      store.dt.arr.selectedCategories.push(category);
      store.dt.arr.headerLinks[1].active = true;
    },
  },
}
</script>

<style lang="scss" scoped>

.title {
  // font-family: bold;
  font-weight: bolder;
  font-size: 3rem;
}


.img-section {
  height: 200px;
}

    .my-img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 14px #000000;
}

.description {
  font-size: 3rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: bolder;
  color: white;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);

  * {
    box-shadow: 10px 10x black;
  }
}

.filter-hover {
  filter: grayscale(0);
  transform: scale(1);
  transition: filter, 0.5s, transform, 0.5s;

  &:hover {
    filter: grayscale(100%);
    transform: scale(1.05);
  }
}

@media screen and (max-width: 1000px) {
  .description {
    font-size: 2rem;
  }
}

@media screen and (max-width: 500px) {
  .description {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 385px) {
  .description {
    font-size: 1rem;
  }
}
</style>