<template>
    <div class="card skeleton lg:w-96 md:w-80 sm:w-72 w-96">
        <div class="card-body py-5 md:py-8 px-6 md:px-8">
            <div class="card-title skeleton h-7 w-48 bg-black opacity-20"></div>

            <div class="badges flex gap-2 justify-between">
                <!-- Categories -->
                <div class="skeleton h-5 w-16 bg-black opacity-20"></div>

                <!-- Status -->
                <div class="skeleton h-5 w-16 bg-black opacity-20"></div>
            </div>
            
            <p class="skeleton h-5 w-80 sm:w-60 bg-black opacity-20"></p>
            
            <div class="card-actions justify-center mt-3">
                <div class="skeleton bg-black opacity-20 h-8 w-72"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .skeleton {
        animation-duration: 1s;
    }
</style>