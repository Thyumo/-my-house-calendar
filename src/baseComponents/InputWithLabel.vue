<script setup lang="ts">
    interface Props {
        label: string;
        value?: string;
    }

    defineProps<Props>();
    defineEmits(["update:value"]);
</script>

<template>
    <div class="input-with-label">
        <label for="inputWithLabel">
            {{ label }}
        </label>

        <input name="inputWithLabel" v-model="value" @change="$emit('update:value', value)" />
    </div>
</template>

<style scoped>
    .input-with-label {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>
