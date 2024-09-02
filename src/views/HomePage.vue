<template>
    <div class="container px-3 mx-auto">
        <h1>Home</h1>
        <p>Hola, {{ user }}</p>
    </div>

</template>

<script setup>
    const user = $cookies.get("user");
</script>