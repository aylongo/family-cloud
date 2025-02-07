import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./utils/styles/index.css";

const toastOptions = {
  maxToasts: 20,
  newestOnTop: true,
  position: POSITION.BOTTOM_CENTER,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.1,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: true,
};

Vue.use(Toast, toastOptions);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
