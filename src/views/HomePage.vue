<template>
    <div class="container px-3 mx-auto">
        <p>Hola, {{ user }}</p>
        <h1 class="text-4xl">Mis tickets</h1>

        <div class="container flex flex-wrap justify-center gap-3 mt-3 sm:flex-nowrap sm:justify-normal">
            <CardTicket v-for="ticket in tickets" :key="ticket.id" :data="ticket" />
            <p v-if="tickets == null">No tienes tickets</p>
        </div>
    </div>

</template>

<script setup>
    import CardTicket from '@/components/Home/CardTicket.vue';
    import ticketService from '@/services/ticketsService';
    import { ref, onMounted } from 'vue';

    const user = $cookies.get("user");

    const tickets = ref([]);

    const handleMyTickets = async () => {
        const res = await ticketService.GetMyTickets();
        tickets.value = res.data;
    };

    onMounted(() => {
        handleMyTickets();
    });
</script>