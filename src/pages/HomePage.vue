<script setup lang="ts">
    import BookingPopupButton from "../components/BookingPopupButton.vue";
    import FullCalendar from "../components/FullCalendar.vue";
</script>

<template>
    <div class="homepage">
        <div class="header">
            Calendrier des réservations de Sainte-Vertus
        </div>

        <FullCalendar />

        <BookingPopupButton />
    </div>
</template>

<style scoped>
    .homepage {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .header {
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 32px;
    }
</style>
