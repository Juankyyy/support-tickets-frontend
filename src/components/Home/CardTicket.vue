<template>
    <div class="card bg-slate-300 text-black lg:w-96 md:w-80 sm:w-72 w-96">
        <div class="card-body py-5 md:py-8 px-6 md:px-8">
            <h2 class="card-title">
                <span class="overflow-hidden text-ellipsis line-clamp-1" :title="props.data.title">{{ props.data.title }}</span>
            </h2>

            <div class="badges flex gap-2 justify-between">
                <!-- Categories -->
                <div v-if="props.data.category == 'General'" title="Problemas generales" class="badge badge-success">{{ props.data.category }}</div>
                <div v-if="props.data.category == 'Web'" title="Problemas relacionados a páginas webs" class="badge badge-info">{{ props.data.category }}</div>
                <div v-if="props.data.category == 'Sistema'" title="Problemas del sistema operativo" class="badge badge-error">{{ props.data.category }}</div>
                <div v-if="props.data.category == 'Sugerencias'" title="Sugerencias sobre esta página web" class="badge badge-accent">{{ props.data.category }}</div>

                <!-- Status -->
                <div v-if="props.data.status == 'Solved'" title="Solucionado" class="badge badge-success">Solucionado</div>
                <div v-if="props.data.status == 'Unsolved'" class="badge badge-primary">Sin Resolver</div>
                <div v-if="props.data.status == 'Unsolvable'" class="badge badge-error">Sin solución</div>
            </div>
            
            <p class="overflow-hidden text-ellipsis line-clamp-1 sm:line-clamp-2" :title="props.data.description">{{ props.data.description }}</p>
            
            <div class="card-actions justify-center">
                <button v-if="props.data.status == 'Solved'" class="btn btn-sm sm:btn-md sm:btn-block w-5/6 btn-success shadow-slate-400 shadow-md">Ver Respuesta</button>
                <button v-else-if="props.data.status == 'Unsolvable'" class="btn btn-sm sm:btn-md w-5/6 sm:btn-block btn-error shadow-slate-400 shadow-md">Editar Ticket</button>
                <button v-else class="btn btn-sm sm:btn-md w-5/6 sm:btn-block btn-info shadow-slate-400 shadow-md">Ver</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({ data: Object });
</script>

<style>
    .badge {
        cursor: default;
    }
</style>