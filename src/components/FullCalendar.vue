<script setup lang="ts">
    import { ref } from "vue";
    // @ts-expect-error
    import VueCal from "vue-cal";
    import "vue-cal/dist/vuecal.css";

    import { ACTIVE_VIEW, DISABLED_VIEWS, EnabledView, EVENT_OPTIONS } from "./config";

    const vueCal = ref<InstanceType<typeof VueCal | null>>(null);
    const currentView = ref<EnabledView>(ACTIVE_VIEW);

    function createFullDayEvent(event: Date) {
        if (currentView.value !== "week") { return; }

        vueCal.value.createEvent(event, 0, { allDay: true, title: "Réservation par: ", class: "day-event" })
    };

    function setCurrentView(event: { view: EnabledView }) {
        currentView.value = event.view;
    }
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
        @view-change="setCurrentView($event)"
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