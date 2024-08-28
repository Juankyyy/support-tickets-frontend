<template>
    <transition name="fade" mode="out-in" @before-enter="disableScroll" @after-enter="enableScroll">
        <MainNavbar class="navbar" v-if="!['/login'].includes($route.path)" />
    </transition>

    
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" @before-enter="disableScroll" @after-enter="enableScroll">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
    import MainNavbar from './components/MainNavbar.vue';
    import { onUnmounted } from 'vue';

    // DarkMode
    const theme = localStorage.getItem("Theme");

    if (!theme) {
        const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (defaultDark) {
            localStorage.setItem("Theme", "dark")
        } else {
            localStorage.setItem("Theme", "light")
        }
    }

    // Scroll
    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = '';
    };

    // Si deseas asegurar que el scroll se reinicie cuando se desmonte el componente:
    onUnmounted(() => {
        enableScroll();
    });
</script>

<style>
    @font-face {
        font-family: 'Manrope Variable';
        font-style: normal;
        font-display: swap;
        font-weight: 200 800;
        src: url(https://cdn.jsdelivr.net/fontsource/fonts/manrope:vf@latest/latin-wght-normal.woff2) format('woff2-variations');
        unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
    }
    
    * {
        font-family: 'Manrope Variable';
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>
