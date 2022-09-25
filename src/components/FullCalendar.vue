<script setup lang="ts">
    import VueCal from "vue-cal";
    import "vue-cal/dist/vuecal.css";

    import { ACTIVE_VIEW, DISABLED_VIEWS, EVENT_OPTIONS } from "./config";
</script>

<template>
    <VueCal
        class="full-calendar vuecal--green-theme"
        :active-view="ACTIVE_VIEW"
        :disable-views="DISABLED_VIEWS"
        :editable-events="EVENT_OPTIONS"
        locale="fr"
        today-button
    >
        <template #today-button>
            <span class="today-button">
                Aujourd'hui
            </span>
        </template>
    </VueCal>
</template>

<style scoped>
    .full-calendar {
        height: 500px;
    }

    .today-button {
        padding: 4px;
        border: solid 1px;
        border-radius: 8px;
        color: #42b983;
    }
</style>