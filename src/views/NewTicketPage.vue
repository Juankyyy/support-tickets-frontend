<template>
    <div class="container mt-7 px-3 mx-auto">
        <div class="flex flex-col gap-3 items-center">
            <h1 class="sm:text-3xl text-3xl">Creación de un ticket</h1>

            <div class="text-pretty text-center">
                <p>No importa de qué se trate, ¡te ayudaremos!</p>
                <p>A menos que tu ticket caiga por un portal ;)</p>
            </div>
        </div>

        <NewTicketForm />
    </div>
</template>

<script setup>
    import NewTicketForm from '@/components/Tickets/NewTicketForm.vue';
</script>