<template>
  <div class="titulo row">
    <div class="col-4 flex items-center">
      <q-btn flat class="boton q-ml-md" icon="menu" size="18px"/>
    </div>
    <div class="col-4 texto">
      <h1>
        CarYa
         <q-avatar class="q-ml-xs logo">
          <img src="../../../public/imagenes/logo.png"/>
        </q-avatar>
      </h1>
    </div>
    <nav class="menu col-4">
         <q-btn
          v-for="(item, index) in paginas"
          :key="index"
          :icon="item.icono"
          :label="item.nombre"
          class="paginas"
        />  
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    paginas:{
      get(){
        return this.$store.state.paginas.paginas
      } 
    }   
  },
};
</script>

<style scoped>
.titulo {
  height: 70px;
  position: absolute;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.705);
  z-index: 1;
  background-color: rgba(4, 57, 73, 0.589);
  width: 100%;
}
.boton {
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: cornsilk;
  border-radius: 50%;
}
.texto {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.texto h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  letter-spacing: 3px;
  color: cornsilk;
  font-family: 'Times New Roman', Times, serif;
  text-shadow: 2px 2px 4px rgb(0, 0, 0) ;
}
.menu{
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: flex-end;
}
.menu .paginas{
  padding-top: 5px;
  height: 45%;
  width: 120px;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color:cornsilk;
  overflow: hidden;
  border-top: 2px solid cornsilk;
}
.menu .paginas:hover{
  transition: .5s;
  height: 90%;
  
}
.logo{
  height: 60px;
  width: 60px;
}

</style>