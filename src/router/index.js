import { createRouter, createWebHistory } from "vue-router";

// Imports de Views

// Rutas para las Views

// Inicialización | Rutas de la app
const router = createRouter({
    history: createWebHistory(), routes
})

// Titulos en las vistas
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;