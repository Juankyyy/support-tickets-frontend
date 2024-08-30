<template>
    <div class="content">
        <header>
            <DarkMode />
        </header>

        <div class="form">
            <router-link to="/" class="btn btn-ghost btn-active text-2xl mb-3">Support Tickets</router-link>
            <label :class="{ 'input-error': emailError }" class="input sm:w-96 input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="email" class="grow" v-model="email" id="userEmail" placeholder="Email" />
            </label>
    
            <label :class="{ 'input-error': passwordError }" class="input sm:w-96 input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                <input type="password" class="grow" v-model="password" id="userPassword" placeholder="123456"/>
            </label>

            <button @click.prevent="handleLogin" class="btn btn-success w-full font-bold">
                <span v-if="isLoading" class="loading loading-spinner"></span>
                <span v-else>Iniciar Sesión</span>
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import DarkMode from '@/components/DarkMode.vue';
    import authService from '@/services/authService';

    // Enrutador
    const router = useRouter();

    // Variables reactivas
    const email = ref("");
    const password = ref("");

    // Errores
    const emailError = ref(false);
    const passwordError = ref(false);

    const isLoading = ref(false);

    const handleLogin = async () => {
        emailError.value = false;
        passwordError.value = false;

        isLoading.value = true;
        const res = await authService.login(email, password);
        
        if (res) {
            isLoading.value = false;
            if (!res.ok) {
                if (res.error.includes("Email")) {
                    emailError.value = true;
                    passwordError.value = true;
                } else if (res.error.includes("Password")) {
                    passwordError.value = true;
                }
            } else {
                router.push("/");
            }
        } else {
            console.log("Error Fetch");
        }
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
        gap: 20px;
    }
</style>