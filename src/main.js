import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.css";
import { createMetaManager } from "vue-meta";
//import { metaManager } from "vue-meta"; // ✅ Import correct pour Vue 3

import { createPinia } from "pinia";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@fortawesome/fontawesome-free/css/all.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import i18n from "./i18n";

// Initialize the app
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(VueSweetalert2);
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  theme: "bubble"
});
// Use Vue Meta for SEO management
app.use(createMetaManager());

// Register the EasyDataTable component globally
app.component("EasyDataTable", Vue3EasyDataTable);

// Mount the app
app.mount("#app");
