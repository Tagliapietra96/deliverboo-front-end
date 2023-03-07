<template lang="">
  <div class="bg-first-section">
  </div>
<div class=" container">
  <div class="py-4">
    <h2 class="pb-4">La selezione di Deliveboo</h2>
    <div class="row g-3">
      <div class="col-5 img-section">
        <img class="my-img-fluid" src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="">
      </div>
      <div class="col-7 img-section">
        <img class="my-img-fluid" src="https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/l_4480_tiramisu-zenzero-fichi.jpg" alt="">
      </div>
      <div class="col-7 img-section">
        <img class="my-img-fluid" src="https://goldenbarristorante.it/wp-content/uploads/2020/02/s9.jpg" alt="">
      </div>
      <div class="col-5 img-section">
        <img class="my-img-fluid" src="https://cdn.vox-cdn.com/thumbor/bif3U7XKUqWpOUv91_fXLfzsIx8=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/71262429/Le_Fantome.0.jpg" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { store } from '../stores/store';
export default {
  data() {
    return {
      
    }
  },

};
</script>

<style scoped lang="scss">
 .bg-first-section {
  background-image: url("../assets/bg-welcome.png");
  height: 60vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}

.img-section{
  height: 200px;
};

.my-img-fluid{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
