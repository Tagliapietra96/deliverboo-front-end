<template>
  <Loader v-if="store.dt.bool.loading"></Loader>
  <div v-else class="my-container">
    <ChartPopUp />
    <DishShow />
    <ChartPreview />
    <div class="container pb-5">
      <h3 class="py-5">IL NOSTRO MENU</h3>
      <div v-if="
        store.dt.arr.myChart.length > 0 &&
        store.dt.arr.myChart[0].item.restaurant_id !== store.dt.num.selectedRestaurant"
        class="alert alert-info custom-color fw-bolder py-4 fs-4">
        Stai provando ad acquistare un prodotto di un ristorante diverso da
        quello al quale stai già acquistando. Sei pregato di selezionare piatti
        da un ristorante alla volta! <br />
        Se vuoi comunque acquistare questi prodotti, svuota prima il carrello
        <br />
        <!-- @click="store.dt.arr.myChart = []; store.fn.saveStorage(); store.fn.loadStorage()" -->
        <button v-if="store.dt.arr.myChart.length > 0" class="btn btn-ptimary btn-custom mt-3"
          @click="store.fn.chart.deleteChart()">
          Svuota carrello
        </button>
      </div>
      <DishTypeRow :array="store.dt.arr.antipasti" :title="'Antipasti'" :icon="'fa-shrimp'"/>
      <DishTypeRow :array="store.dt.arr.primi" :title="'Primi'" :icon="'fa-plate-wheat'"/>
      <DishTypeRow :array="store.dt.arr.secondi" :title="'Secondi'" :icon="'fa-drumstick-bite'"/>
      <DishTypeRow :array="store.dt.arr.pizze" :title="'Pizze'" :icon="'fa-pizza-slice'"/>
      <DishTypeRow :array="store.dt.arr.contorni" :title="'Contorni'" :icon="'fa-seedling'"/>
      <DishTypeRow :array="store.dt.arr.panini" :title="'Panini'" :icon="'fa-burger'"/>
      <DishTypeRow :array="store.dt.arr.dolci" :title="'Dolci'" :icon="'fa-candy-cane'" />
      <DishTypeRow :array="store.dt.arr.bevande" :title="'Bevande'" :icon="'fa-martini-glass-citrus'"/>
    </div>
  </div>
</template>

<script>
import { store } from "../../stores/main-store";
import ChartPopUp from "../ChartPopUp.vue";
import ChartPreview from "../ChartPreview.vue";
import DishShow from "../DishShow.vue";
import DishTypeRow from "../DishTypeRow.vue";
import Loader from "../Loader.vue";
export default {
  components: { Loader, ChartPopUp, DishShow, ChartPreview, DishTypeRow },
  data() {
    return {
      store,
    };
  },
  computed: {
  },
  methods: {
  },
  created() {
    store.dt.obj.cardShow.active = false;
    store.dt.num.dishShoppingIndex = 0;
    store.dt.obj.cardShow.quantity = 1;
  },
  mounted() {

    store.fn.ajax.fetchDishes();
    store.fn.storageLocal.load();
  },
  beforeUnmount() {
    store.fn.storageLocal.save();
  },
};
</script>

<style lang="scss" scoped>
@use "../../styles/main.scss";
.alert-info {
  text-align: center;
  background-color: #c7626245 !important;
  border-color: #c76262;
}
.my-container {
  min-height: calc(100vh - 214px);
}
small {
  cursor: pointer;
}
</style>
