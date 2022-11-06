<script setup lang="ts">
    import { ref } from "vue";

    import InputWithLabel from '../baseComponents/InputWithLabel.vue';

    const formData = ref({
        name: "",
        surname: ""
    });
</script>

<template>
    <div class="booking-popup-form">
        <InputWithLabel label="Nom" :value="formData.name" @update:value="formData.name = $event" />
    
        <InputWithLabel label="Prénom" :value="formData.surname" @update:value="formData.surname = $event" />
    </div>
</template>

<style scoped>
    .booking-popup-form {
        display: flex;
        gap: 8px;
    }
</style>
