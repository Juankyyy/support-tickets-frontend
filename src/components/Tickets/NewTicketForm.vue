<template>
    <form class="form mt-10 flex gap-5 flex-col items-center">
        <select @change="categoryChange" v-model="category" :class="{ 'select-error': categoryError }" class="select select-bordered w-full max-w-md">
            <option disabled selected>Tipo</option>
            <option value="General">Problemas Generales</option>
            <option value="Web">Problemas sobre el navegador o alguna página web</option>
            <option value="Sistema">Problemas sobre el Sistema operativo</option>
            <option value="Sugerencia">Sugerencias o feedback sobre nuestra página web</option>
        </select>

        <div :class="{ 'input-error': titleError }" class="input input-bordered flex items-center w-full max-w-md">
            <input v-model="title" type="text" placeholder="Asunto" class="grow" />

            <div class="tooltip tooltip-left sm:tooltip-top" data-tip="De que trata el problema, se consiso">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="IconifyId191c37a8b6fd8fdf214"><g fill="none"><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28.625v-4a6 6 0 1 0-6-6"/><path fill="#000" fill-rule="evenodd" d="M24 37.625a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId191c37a8b6fd8fdf214)"/></svg>
            </div>
        </div>

        <textarea v-model="description" :class="{ 'textarea-error': descriptionError }" class="textarea textarea-bordered w-full max-w-md max-h-52" placeholder="Describe tu problema aquí"></textarea>

        <button @click.prevent="handleTicket" class="btn btn-primary md:w-1/4 w-1/2">
            <span v-if="isLoading" class="loading loading-spinner"></span>
            <span v-else>Crear ticket</span>
        </button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import ticketService from '@/services/ticketsService';

    const router = useRouter();
    const isLoading = ref(false);

    const category = ref("Tipo");
    const title = ref("");
    const description = ref("");

    const categoryError = ref(false);
    const titleError = ref(false);
    const descriptionError = ref(false);

    const handleTicket = async () => {
        isLoading.value = false;

        categoryError.value = false;
        titleError.value = false;
        descriptionError.value = false;

        categoryError.value = category.value === "Tipo";
        titleError.value = title.value === "";
        descriptionError.value = description.value === "";

        if (title.value.length < 5) {
            titleError.value = true;
            console.log("El título debe tener al menos 5 caracteres");
        }

        if (description.value.length < 5) {
            descriptionError.value = true;
            console.log("La descripción debe tener al menos 5 caracteres");
        }

        if (!categoryError.value && !titleError.value && !descriptionError.value) {
            isLoading.value = true;
            const res = await ticketService.CreateTicket(category.value, title.value, description.value);
            
            if (res) {
                isLoading.value = false;

                if(!res.ok) {
                    alert("Error al crear el ticket");
                } else {
                    router.push("/");
                }
            }
        }
    }
</script>

<style>

</style>