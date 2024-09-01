<template>
    <div class="container mx-10">
        <h1>Home</h1>
        <p>Hola, {{ user }}</p>
    </div>

</template>

<script setup>
    const user = $cookies.get("user");
</script>