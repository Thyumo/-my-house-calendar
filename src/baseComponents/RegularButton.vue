<script setup lang="ts">
    interface Props {
        text: string;
        type: "main" | "secondary";
    }

    defineProps<Props>();
    defineEmits(["click"]);
</script>

<template>
    <button :class="type" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<style scoped>
    .main {
        background-color: #42b983;
        color: #fff;
        outline: none;
    }

    .main:hover {
        border-color: #fff;
    }

    .secondary {
        background-color: #e4f5ef;
        color: #42b983;
        outline: none;
    }

    .secondary:hover {
        border-color: #42b983;
    }
</style>
