import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
