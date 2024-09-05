<template>
    <div class="container px-3 mx-auto">
        <p>Hola, {{ user }}</p>
        <h1 v-if="tickets && !isLoading" class="text-3xl">Mis tickets</h1>

        <div class="container flex flex-wrap justify-center gap-3 mt-7  xl:justify-normal relative">
            <!-- Skeletons -->
            <div v-if="isLoading" class="container flex flex-wrap justify-center gap-3 mt-7  xl:justify-normal relative">
                <CardTicketSkeleton v-for="n in 3" :key="n" />
            </div>

            <CardTicket v-for="ticket in tickets" :key="ticket.id" :data="ticket" />
            <NoTicketsMsg v-if="!tickets" />
        </div>
    </div>

</template>

<script setup>
    import CardTicket from '@/components/Home/CardTicket.vue';
    import CardTicketSkeleton from '@/components/Home/CardTicketSkeleton.vue';
    import NoTicketsMsg from '@/components/Home/NoTicketsMsg.vue';
    import ticketService from '@/services/ticketsService';
    import { ref, onMounted } from 'vue';

    const user = $cookies.get("user");

    const tickets = ref([]);
    const isLoading = ref(false);

    const handleMyTickets = async () => {
        isLoading.value = true;
        const res = await ticketService.GetMyTickets();
        
        tickets.value = res.data;
        isLoading.value = false;
    };

    onMounted(() => {
        handleMyTickets();
    });
</script>