<template>
  <q-page class="row justify-center">
    <div class="col-12 fondo">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
        class="imagenes"
      >
        <q-carousel-slide
          :name="1"
          img-src="../../public/imagenes/autos/auto1.png"
          class="slider"
        />
        <q-carousel-slide
          :name="2"
          img-src="../../public/imagenes/autos/auto2.png"
          class="slider"
        />
        <q-carousel-slide
          :name="3"
          img-src="../../public/imagenes/autos/auto3.png"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
       
      </q-carousel>
    </div>
    <div class="col-12 row">
       
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1,
    };
  },
};
</script>
<style scoped>
.fondo {
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 400px;
  border-radius: 1%;
  box-shadow: 1px 1px 3px rgb(0, 0, 0);
}

.imagenes{
  height:100%;
  background-color: rgba(47, 47, 48, 0.479);
}
.slider{
  width: 100%;
  
}

</style>
