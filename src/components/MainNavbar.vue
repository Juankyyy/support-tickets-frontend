<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-black">
    <div class="container-fluid container">
        <router-link class="navbar-brand" to="/">Support Tickets</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Mis tickets</router-link>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>

            <router-link class="btn btn-success me-3" to="/newticket">Crear nuevo Ticket</router-link>
            <router-link class="btn btn-danger" to="/login">Cerrar Sesión</router-link>
        </div>
    </div>
    </nav>
</template>

<script setup>

</script>

<style>

</style>