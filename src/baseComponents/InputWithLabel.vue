<script setup lang="ts">
    interface Props {
        label: string;
        text?: string;
    }

    const props = defineProps<Props>();
    defineEmits(["update:text"]);
</script>

<template>
    <div class="input-with-label">
        <label for="inputWithLabel">
            {{ label }}
        </label>

        <input
            class="text-input"
            name="inputWithLabel"
            v-model="props.text"
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

    .text-input {
        border: 0.75px solid;
        border-radius: 4px;
    }

    .text-input:focus {
        outline: none;
        border: 1px solid #42b983;
    }
</style>
