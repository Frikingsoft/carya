import Vue from 'vue'
import Vuex from 'vuex'
import paginas from './paginas'
import ofertas from './ofertas'
Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      paginas,
      ofertas
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
