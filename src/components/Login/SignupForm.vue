<template>
    <router-link to="/" class="btn btn-ghost btn-active text-2xl mb-3">Sign Up</router-link>

    <label :class="{ 'input-error': nameError }" class="input sm:w-96 input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input type="email" class="grow" v-model="name" placeholder="Username" />
    </label>

    <label :class="{ 'input-error': emailError }" class="input sm:w-96 input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="email" class="grow" v-model="email" placeholder="Email" />
    </label>

    <label :class="{ 'input-error': passwordError }" class="input sm:w-96 input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
        <input type="password" class="grow" v-model="password" id="userPassword" placeholder="Pass"/>
    </label>

    <button @click.prevent="HandleSignup" class="btn btn-success w-full font-bold">
        <span v-if="isLoading" class="loading loading-spinner"></span>
        <span v-else>Registrarse</span>
    </button>
</template>

<script setup>
    import { ref } from 'vue';
    import authService from '@/services/authService';

    // Variables reactivas
    const name = ref("");
    const email = ref("");
    const password = ref("");

    // Errores
    const nameError = ref(false);
    const emailError = ref(false);
    const passwordError = ref(false);

    const isLoading = ref(false);

    const HandleSignup = async () => {
        nameError.value = false;
        emailError.value = false;
        passwordError.value = false;

        nameError.value = name.value === "";
        emailError.value = email.value === "";
        passwordError.value = password.value === "";

        if (nameError.value == false && emailError.value == false && passwordError.value == false) {
            isLoading.value = true;
            const res = await authService.Signup(name, email, password);
            
            if (res) {
                isLoading.value = false;
                if (!res.ok) {
                    if (res.error.includes("Email")) {
                        emailError.value = true;
                    }
                } else {
                    window.location.reload();
                }
            }
        }
    }
</script>

<style scoped>

</style>