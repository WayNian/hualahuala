import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/routers/index";

createApp(App).use(createPinia()).use(router).mount("#app");
