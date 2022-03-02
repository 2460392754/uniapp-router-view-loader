import App from './App'
import uView from 'uview-ui'
// import Mixin from './mixins/index'
import Vue from 'vue'

console.log(Vue.Mixin)
// Vue.options._base.mixin(Mixin)
// Vue.Mixin(Mixin)

Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

