import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSpectre from '@devindex/vue-spectre';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-exp.css';
import 'spectre.css/dist/spectre-icons.css';
import 'highlight.js/styles/atom-one-light.css';

Vue.config.productionTip = false;
Vue.use(VueSpectre);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
