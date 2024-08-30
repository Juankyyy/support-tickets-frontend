<template>
    <div class="container mx-auto px-4">
        <h1>Home</h1>
        <p>Hola, {{ user }}</p>
    </div>

</template>

<script setup>
    const user = $cookies.get("user");
</script>