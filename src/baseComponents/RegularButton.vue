<script setup lang="ts">
    interface Props {
        disabled?: boolean;
        text: string;
        type: "main" | "secondary";
    }

    defineProps<Props>();
    defineEmits(["click"]);
</script>

<template>
    <button :class="[type, { 'disabled': ! disabled }]" @click="$emit('click')">
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

    .disabled {
        background-color: #eff4f7;
        color: #90a4ae;
        outline: none;
    }

    .disabled:hover {
        cursor: default;
        border-color: #eff4f7;
    }
</style>
