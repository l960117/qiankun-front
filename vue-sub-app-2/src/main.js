import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './router/index'
import './public-path'
Vue.use(VueRouter)

Vue.config.productionTip = false

let router = null
let instance = null

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue-sub-app-2' : '/',
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main app', props)
  if (props.baseUrl) {
    axios.defaults.baseURL = props.baseUrl
  }
  render()
}

export async function unmount() {
  console.log('unmount')
  instance.$destroy()
  instance = null
  router = null
}
