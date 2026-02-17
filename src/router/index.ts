import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Registro from "../views/Registro.vue";
import Home from "../views/Home.vue";
import Closed from "../views/Closed.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/registro", component: Registro },
  { path: "/home", component: Home },
  { path: "/closed", component: Closed },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
