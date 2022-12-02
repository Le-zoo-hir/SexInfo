import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import IstDexView from "../views/IstDexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
    },
    {
      path: "/istdex",
      name: "istdex",
      component: IstDexView,
    }
  ],
});

export default router;
