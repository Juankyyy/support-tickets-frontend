<template>
    <div class="card bg-slate-200 text-black w-96">
        <div class="card-body">
            <h2 class="card-title">
                <span class="overflow-hidden text-ellipsis">{{ props.data.title }}</span>
            </h2>

            <p class="overflow-hidden text-ellipsis">{{ props.data.description }}</p>
            
            <div class="card-actions justify-end">
                <button v-if="props.data.status == 'Solved'" class="btn btn-success">Ver Respuesta</button>
                <button v-else class="btn btn-info">Ver</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({ data: Object });
</script>

<style>

</style>