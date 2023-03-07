import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from './pages/WelcomePage.vue';
import RestaurantsIndex from './pages/restaurants/Index.vue';
import RestautantShow from './pages/restaurants/Show.vue';

const router = createRouter({
    // Serve ad indicare come gestire l'url al cambio pagina
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "welcome",
        component: WelcomePage,
      },
       {
         path: "/i-nostri-ristoranti",
         name: "restaurants",
         component: RestaurantsIndex,
       },
        {
         path: "/ristorante",
         name: "restaurant",
         component: RestautantShow,
        },
      
    ]
  });
  
  export { router };