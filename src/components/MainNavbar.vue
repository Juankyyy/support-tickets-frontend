<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>

                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    
                    <li><router-link to="/" :class="{ active: $route.path === '/' }" class="mb-1">Mis Tickets</router-link></li>
            
                    <DarkMode v-if="isMobile" />
                </ul>
            </div>

            <router-link to="/" class="btn btn-ghost text-sm md:text-xl">Support Tickets</router-link>
            
            <div class="hidden md:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><router-link to="/" :class="{ active: $route.path === '/' }" class="mr-1">Mis Tickets</router-link></li>

                    <DarkMode />
                </ul>
            </div>
        </div>

        <div class="navbar-end">
            <router-link to="/" class="btn btn-success mr-5 btn-sm sm:btn-md">Crear nuevo Ticket</router-link>
            
            <router-link to="/login" @click.prevent="authService.Logout" class="btn btn-error btn-sm sm:btn-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><path fill="#1d222b" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h7A1.5 1.5 0 0 1 10 1.5v1.939a2 2 0 0 0-.734 1.311H5.75a2.25 2.25 0 1 0 0 4.5h3.516A2 2 0 0 0 10 10.561V12.5A1.5 1.5 0 0 1 8.5 14h-7A1.5 1.5 0 0 1 0 12.5zm10.963 2.807A.75.75 0 0 0 10.5 5v1H5.75a1 1 0 0 0 0 2h4.75v1a.75.75 0 0 0 1.28.53l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-.817-.163" clip-rule="evenodd"/></svg>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import DarkMode from './DarkMode.vue';
    import authService from '@/services/authService';

    const isMobile = ref(window.innerWidth < 768);
</script>