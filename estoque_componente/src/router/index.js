import Vue from 'vue'
import Router from 'vue-router'
import ViewProduto from '@/views/Produto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewProduto',
      component: ViewProduto
    }
  ]
})
