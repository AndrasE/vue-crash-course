import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // create a history object
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
  ],
});

export default router; // create a router object
