<script setup lang="ts">
    import VueCal from "vue-cal";
    import "vue-cal/dist/vuecal.css";

    import { ACTIVE_VIEW, DISABLED_VIEWS } from "./config";
</script>

<template>
    <VueCal
        class="full-calendar vuecal--green-theme"
        :active-view="ACTIVE_VIEW"
        :disable-views="DISABLED_VIEWS"    
    />
</template>

<style scoped>
    .full-calendar {
        height: 500px;
    }
</style>