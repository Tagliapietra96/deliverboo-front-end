<template lang="">
  <!-- <TheHeader></TheHeader> -->
  <div class="bg-first-section">
  </div>
<div class=" container">
  <div class="py-4">
    <h2 class="pb-4 title">La selezione di Deliveboo</h2>
    <div class="row g-4">
      <div class="col-5 img-section position-relative filter-hover">
        <img class="my-img-fluid rounded-2" src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="">
          <span class="description">Confort Food</span>
      </div>
      <div class="col-7 img-section position-relative rounded-2 filter-hover">
        <img class="my-img-fluid rounded-2" src="https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/l_4480_tiramisu-zenzero-fichi.jpg" alt="">
          <span class="description">Dolci e Dessert</span>
      </div>
      <div class="col-7 img-section position-relative filter-hover">
        <img class="my-img-fluid rounded-2" src="https://goldenbarristorante.it/wp-content/uploads/2020/02/s9.jpg" alt="">
          <span class="description">Perfetti da condividere</span>
      </div>
      <div class="col-5 img-section position-relative filter-hover">
        <img class="my-img-fluid rounded-2" src="https://cdn.vox-cdn.com/thumbor/bif3U7XKUqWpOUv91_fXLfzsIx8=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/71262429/Le_Fantome.0.jpg" alt="">
          <span class="description">Confort Food</span>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { store } from "../stores/store";
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
 .bg-first-section {
  background-image: url("../assets/bg-homepage.jpg");
  height: 60vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
};

.title{
  font-family: bold;
  font-weight: bold;
}
.img-section{
  height: 200px;
};

.my-img-fluid{
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 14px #000000;
};

.description{
  font-size: 2.5rem;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  position: absolute;
  bottom: 0;
  right: 5%;
}

.filter-hover:hover{
  filter: grayscale(100%);
}
</style>
