import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from './pages/WelcomePage.vue';

const router = createRouter({
    // Serve ad indicare come gestire l'url al cambio pagina
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "welcome",
        component: HomePage
      },
    //   {
    //     path: "/chi-siamo",
    //     name: "about",
    //     component: AboutPage
    //   },
      
    ]
  });
  
  export { router };