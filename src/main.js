import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//allows bulma styles to be used sitewide
require("@/assets/sass/main.scss");

createApp(App).use(store).use(router).mount("#app");
