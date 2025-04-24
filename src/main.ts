import { createApp } from "vue";
import router from "./router";
import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue"; // import the App component

const app = createApp(App); // Pass the App component here
app.use(router); // use the router object
app.use(Toast); // use the Toast plugin
app.mount("#app");
