<template>
    <div>
        <h1>Ticket Page works!</h1>
        <p>Ticket ID: {{ ticketId }}</p>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const ticketId = ref(null);

    onMounted(() => {
        ticketId.value = parseInt(route.params.id);
    });
</script>

<style>

</style>