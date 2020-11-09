import Home from '../views/Home.vue'

export default [
  {
    path: '/home1',
    name: 'Home',
    component: Home
  },
  {
    path: '/about1',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
