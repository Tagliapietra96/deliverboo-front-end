<template>
    <div v-if="array.length > 0">
        <h3 class="mt-5"><i class="fa-solid" :class="icon"></i> {{ title }}</h3>
        <div class="py-1 mt-2 mb-5 custom-bg w-100 rounded-1"></div>
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-4 mt-3">
            <div class="col" v-for="element in array" :key="element.id">
                <div class="card card-index h-100 mb-3 shadow overflow-hidden" @click="store.fn.chart.onCardClick(element)">
                    <div class="row g-0 h-100 position-relative">
                        <div v-if="!element.visibility" class="custom-bg visibility-banner"><span
                                class="text-white fw-bolder">PRODOTTO NON DISPONIBILE</span></div>
                        <div class="col-4 h-100" :style="
                            element.visibility
                                ? 'filter: grayscale(0)'
                                : 'filter: grayscale(100%)'
                        ">
                            <img v-if="element.image.includes('http')" class="img-fluid rounded-start h-100"
                                :src="element.image" alt="" />
                            <img v-else class="img-fluid rounded-start h-100"
                                :src="store.dt.str.beUrl + '/storage/' + element.image" alt="" />
                        </div>
                        <div class="col-8 h-100">
                            <div class="card-body h-100 d-flex flex-column">
                                <h5 class="card-title">{{ element.name }}</h5>
                                <p class="card-text">{{ element.description }}</p>
                                <div class="flex-fill"></div>
                                <p class="card-text">
                                    <small class="text-muted">Prezzo:€ {{ element.price.toFixed(2) }}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../stores/main-store';
export default {
    props: {
        array: Array,
        icon: String,
        title: String
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
.visibility-banner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 12;
}


.card-index {
  transition: all, 0.4s;

  img {
    min-height: 250px;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}
</style>