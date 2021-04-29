<template>
  <div id="q-app" class="fondo">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped>
  .fondo{
     background-color: rgba(216, 214, 214, 0.925);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
