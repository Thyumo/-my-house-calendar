<script setup lang="ts">
    defineEmits(["open-booking-popup"])
</script>

<template>
    <button class="popup-button" @click="$emit('open-booking-popup')">
        Réserver
    </button>
</template>

<style scoped>
    .popup-button {
        background-color: #e4f5ef;
        color: #42b983;
        font-weight: 600;
        font-size: 24px;
        outline: none;
    }

    .popup-button:hover {
        border-color: #42b983;
    }
</style>
