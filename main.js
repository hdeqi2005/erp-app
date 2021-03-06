import Vue from 'vue'
import App from './App'
import cuCustom from './ui/colorui/components/cu-custom.vue'
import store from './store'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)	

// new Vue({
  
// }).$mount('#app')
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store,
	render: h => h(App)
})
app.$mount()
