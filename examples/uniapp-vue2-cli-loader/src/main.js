import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// import './plugin/hack'

Vue.config.productionTip = false
Vue.use(uView)

App.mpType = 'app'

// #ifdef APP-PLUS
console.log('componentInject APP-PLUS')
// #endif

// #ifdef H5
console.log('componentInject H5')
// #endif

const app = new Vue({
    ...App
})
app.$mount()
