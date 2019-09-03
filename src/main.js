import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import getRef from './utils/getRef'

Vue.config.productionTip = false;
Vue.use(antd);
// Vue.use(getRef, { name: 'get-ref'});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
