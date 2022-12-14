import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import VueFeather from "vue-feather";
import "./laravelEcho";

createApp(App)
  .use(store)
  .use(router)
  .component(VueFeather.name, VueFeather)
  .mount("#app");
