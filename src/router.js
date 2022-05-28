import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/TodoList/",
    component: Home,
  },
  {
    path: "/TodoList/tasks",
    component: () => import('./views/Todos.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
