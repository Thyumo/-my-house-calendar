<script setup lang="ts">
    import { ref } from "vue";

    import { useValidation } from "../composables";

    interface Props {
        label: string;
        date?: string;
    }

    const props = withDefaults(defineProps<Props>(), { date: "" });
    const emits = defineEmits(["update:date"]);

    const internalDate = ref(props.date);

    const { isDateValid } = useValidation();

    const isDateInvalid = ref(false);

    function updateDate(date: string | undefined) {
        if (isDateValid(date)) {
            isDateInvalid.value = false;
            emits("update:date", internalDate.value);
        } else {
            isDateInvalid.value = true
        }
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
            v-model="internalDate"
            @change="updateDate(internalDate)"
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
