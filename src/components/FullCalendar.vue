<script setup lang="ts">
    import { ref } from "vue";
    // @ts-expect-error
    import VueCal from "vue-cal";
    import "vue-cal/dist/vuecal.css";

    import { ACTIVE_VIEW, DISABLED_VIEWS, EVENT_OPTIONS } from "./config";

    const vueCal = ref<InstanceType<typeof VueCal | null>>(null);

    function createFullDayEvent(event: Date) {
        vueCal.value.createEvent(event, 0, { allDay: true, title: "Réservation", class: "day-event", content: "Réservé par: " })
    };

    defineExpose({
        createFullDayEvent
    });
</script>

<template>
    <VueCal
        ref="vueCal"
        class="full-calendar vuecal--green-theme"
        :active-view="ACTIVE_VIEW"
        :disable-views="DISABLED_VIEWS"
        :drag-to-create-event="false"
        :editable-events="EVENT_OPTIONS"
        locale="fr"
        :time="false"
        today-button
        @cell-dblclick="createFullDayEvent($event)"
    >
        <template #today-button>
            <span class="today-button">
                Aujourd'hui
            </span>
        </template>

        <template #no-event>
            <span></span>
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