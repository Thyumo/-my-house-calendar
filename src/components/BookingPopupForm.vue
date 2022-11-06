<script setup lang="ts">
    import { ref } from "vue";

    import DateInputWithLabel from "../baseComponents/DateInputWithLabel.vue";
    import InputWithLabel from '../baseComponents/InputWithLabel.vue';

    const formData = ref({
        name: "",
        surname: ""
    });
</script>

<template>
    <div class="booking-popup-form">
        <div class="form-section">
            <InputWithLabel label="Nom" :value="formData.name" @update:value="formData.name = $event" />
        
            <InputWithLabel label="Prénom" :value="formData.surname" @update:value="formData.surname = $event" />
        </div>

        <div class="form-section">
            <DateInputWithLabel label="Arrivée (JJ/MM/AAAA)" />

            <DateInputWithLabel label="Départ (JJ/MM/AAAA)" />
        </div>
    </div>
</template>

<style scoped>
    .booking-popup-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .form-section {
        display: flex;
        gap: 8px;
    }
</style>
