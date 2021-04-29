<template>
  <q-layout view="lHh Lpr lFf">
    
      <Toolbar/>
   

    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import Toolbar from './Toolbar/Toolbar.vue'


export default {
  name: 'MainLayout',
  components: {Toolbar},
  data () {
    return {
      
    }
  }
}
</script>

