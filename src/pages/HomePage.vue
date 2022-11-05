<script setup lang="ts">
    import { ref } from "vue";

    import BookingPopup from "../components/BookingPopup.vue";
    import BookingPopupButton from "../components/BookingPopupButton.vue";
    import FullCalendar from "../components/FullCalendar.vue";

    const isBookingPopupOpened = ref(false);

    function openBookingPopup() {
        isBookingPopupOpened.value = true;
    }

    function setIsBookingPopupOpened(event: boolean) {
        isBookingPopupOpened.value = event;
    }
</script>

<template>
    <div class="homepage">
        <div class="header">
            Calendrier des réservations de Sainte-Vertus
        </div>

        <FullCalendar />

        <BookingPopupButton @open-booking-popup="openBookingPopup()" />
    </div>

    <BookingPopup :isOpened="isBookingPopupOpened" @update:isOpened="setIsBookingPopupOpened($event)" />
</template>

<style scoped>
    .homepage {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
    }

    .header {
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 32px;
    }
</style>
