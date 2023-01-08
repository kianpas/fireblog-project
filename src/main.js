import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { auth } from "./firebase/firebaseInit";

Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
