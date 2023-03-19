<template>
   <div class="pt-5">
      <div class="custom-bg">
        <div class="my-col">
          <div>
            <h2 class="pb-4 title text-center">Lavora con noi!</h2>
          </div>
          <p class="text-center pb-4">
            Diventa partner di DeliveBoo e raggiungi sempre più clienti. Ci
            occupiamo noi di prendere gli ordini, così che la tua unica
            preoccupazione sia continuare a preparare il miglior cibo.
          </p>
          <a class="text-center" href="http://127.0.0.1:8000">
            <button class="btn btn-custom btn-white">Lavora con noi!</button>
          </a>
        </div>
        <div class="row"></div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .title {
  // font-family: bold;
  font-weight: bolder;
  font-size: 3rem;
}


.my-col {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 16px;
  color: #ffff;
}

.btn-white {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
  color: #c76262 !important;

  &:hover {
    background-color: #ffffff !important;
    transform: scale(1.05);
  }
}
</style>