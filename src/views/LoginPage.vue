<template>
    <div class="content">
        <header>
            <DarkMode />
        </header>

        <div class="form">
            <LoginForm v-if="isLogin" />
            <SignupForm v-if="!isLogin" />
            
            <p @click.prevent="changeForm" class="self-start link link-hover text-slate-500">
                {{ isLogin ? 'Registrarse' : 'Login' }}
            </p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import DarkMode from '@/components/DarkMode.vue';
    import LoginForm from '@/components/Login/LoginForm.vue';
    import SignupForm from '@/components/Login/SignupForm.vue';

    const isLogin = ref(true);

    const changeForm = () => {
        isLogin.value = !isLogin.value;
    }
</script>

<style scoped>
    header {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>