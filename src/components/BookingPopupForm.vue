<script setup lang="ts">
    import DateInputWithLabel from "../baseComponents/DateInputWithLabel.vue";
    import InputWithLabel from '../baseComponents/InputWithLabel.vue';

    import type { BookingInputData } from "../types/BookingInputData";

    defineProps<{ formData: BookingInputData}>()
    defineEmits<{
        (e: "update:formData", value: Partial<BookingInputData>): void
    }>();
</script>

<template>
    <div class="booking-popup-form">
        <div class="form-section">
            <InputWithLabel label="Nom" :text="formData.lastName" @update:text="$emit('update:formData', { lastName: $event })" />
        
            <InputWithLabel label="Prénom" :text="formData.firstName" @update:text="$emit('update:formData', { firstName: $event })" />
        </div>

        <div class="form-section">
            <DateInputWithLabel label="Arrivée (JJ/MM/AAAA)" @update:date="$emit('update:formData', { startDate: $event })" />

            <DateInputWithLabel label="Départ (JJ/MM/AAAA)" @update:date="$emit('update:formData', { endDate: $event })" />
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
