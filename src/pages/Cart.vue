<template>
  <div class="container">
    <h2 class="pt-3 pb-2">Il tuo Carrello</h2>
    <div class="py-1 mt-2 mb-5 custom-bg w-100 rounded-1"></div>
    <div class="row row-cols-1">
      <div class="col" v-for="(item, index) in myChart" :key="index">
        <div class="single-row py-3 px-5">
            <div class="fw-bolder">{{ item.item.name }}:</div>
          <div>€ {{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myChart: [],
    };
  },
  mounted() {
    const myChart = localStorage.getItem("myChart");
    if (myChart) {
      this.myChart = JSON.parse(myChart);
    }
    console.log(this.myChart)
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 214px);

  .single-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c76262;
    border-collapse: collapse !important;
  }
}
</style>
