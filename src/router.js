import Vue from 'vue'
import Router from 'vue-router'
import BidsList from './views/BidsList'
import CreateBid from './views/CreateBid'
import EditBid from './views/EditBid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'BidsList',
      component: BidsList
    },
    {
      path: '/bids/create',
      name: 'CreateBid',
      component: CreateBid
    },
    {
      path: '/bids/edit/:id',
      name: 'EditBid',
      component: EditBid,
      props: true
    }
  ]
})
