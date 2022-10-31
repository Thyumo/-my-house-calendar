<script setup lang="ts">
    import FullCalendar from "../components/FullCalendar.vue";
</script>

<template>
    <div class="header">
        Calendrier des réservations de Sainte-Vertus
    </div>

    <FullCalendar />
</template>

<style scoped>
    .header {
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 32px;
    }
</style>
