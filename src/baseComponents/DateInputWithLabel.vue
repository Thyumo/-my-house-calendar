<script setup lang="ts">
    import { ref } from "vue";
    import moment from "moment"

    interface Props {
        label: string;
        date?: string;
    }

    const props = defineProps<Props>();
    const emits = defineEmits(["update:date"]);

    const isDateInvalid = ref(false);

    function updateDate(date: string | undefined) {
        if (validateDate(date)) {
            isDateInvalid.value = false;
            emits("update:date", date);
        } else {
            isDateInvalid.value = true
        }
    }

    function validateDate(date: string | undefined) {
        return moment(date, "DD/MM/YYYY").isValid();
    }
</script>

<template>
    <div class="input-with-label">
        <label for="inputWithLabel">
            {{ label }}
        </label>

        <input
            class="date-input"
            :class="{ 'error': isDateInvalid }"
            name="inputWithLabel"
            v-model="props.date"
            @change="updateDate(date)"
        />
    </div>
</template>

<style scoped>
    .input-with-label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        flex: 1;
    }

    .date-input {
        border: 0.75px solid;
        border-radius: 4px;
    }

    .date-input:focus {
        outline: none;
        border: 1px solid #42b983;
    }

    .error {
        border: 0.75px solid red;
    }
</style>
