<script setup lang="ts">
    import VueCal from "vue-cal";
    import "vue-cal/dist/vuecal.css";
</script>

<template>
    <VueCal
        class="full-calendar vuecal--green-theme"
    />
</template>

<style scoped>
    .full-calendar {
        height: 500px;
    }
</style>