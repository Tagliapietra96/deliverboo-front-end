<template>
  <div>
    <div
      class="d-flex flex-row-reverse"
      v-for="(item, index) in myChart"
      :key="index"
    >
      <div>{{ item.price }}</div>
      <div class="w-100" v-for="(item2, index) in item" :key="index">
        <div>{{ item2.name }}</div>
      </div>
    </div>
    <div class="d-flex justify-content-between w-50"></div>
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
  },
};
</script>
