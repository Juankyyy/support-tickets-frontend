import { createRouter, createWebHistory } from "vue-router";

// Imports de Views
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import NewTicketPage from "@/views/NewTicketPage.vue";
import TicketPage from "@/views/TicketPage.vue";

// Rutas para las Views
const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage,
        meta: { 
            title: "Home",
            requireAuth: true
        }
    },
    {
        name: "LoginPage",
        path: "/login",
        component: LoginPage,
        meta: {
            title: "Login",
            requireAuth: false,
        }
    },
    {
        name: "NewTicketPage",
        path: "/new-ticket",
        component: NewTicketPage,
        meta: {
            title: "Nuevo Ticket",
            requireAuth: true,
        }
    },
    {
        name: "TicketPage",
        path: "/ticket/:id",
        component: TicketPage,
        meta: {
            title: "Ticket",
            requireAuth: true,
        }
    }
]

// Inicialización | Rutas de la app
const router = createRouter({
    history: createWebHistory(), routes
})

router.beforeEach((to, from, next) => {
    const auth = $cookies.get("auth");
    const needAuth = to.meta.requireAuth;
    
    // Vistas con autenticación requerida
    if (needAuth && !auth) {
        next("login")
    } else if (auth && to.path == "/login") {
        // Login con sesión abierta
        next(from.fullPath)
        next()
    } else {
        // Titulos en las paginas
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    }
});

export default router;