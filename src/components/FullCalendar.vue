<script setup lang="ts">
    import { computed, ref } from "vue";
    import { useQuery } from "@vue/apollo-composable";
    // @ts-expect-error
    import VueCal from "vue-cal";
    import "vue-cal/dist/vuecal.css";

    import { ACTIVE_VIEW, DISABLED_VIEWS, EnabledView, EVENT_OPTIONS } from "./config";
    import { useValidation } from "../composables";
    import { getBookingsQuery } from "../realm/queries";

    import type { Booking } from "../types";

    const vueCal = ref<InstanceType<typeof VueCal | null>>(null);
    const currentView = ref<EnabledView>(ACTIVE_VIEW);

    const { result } = useQuery<{ bookings: Booking[] }>(getBookingsQuery);
    const { convertToEventFormat } = useValidation();
    const events = computed(() => {
        if (! result || ! result.value || ! result.value.bookings) { return []; }

        return result.value.bookings.map(convertToEventFormat);
    });

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
        v-if="result && result.bookings"
        ref="vueCal"
        class="full-calendar vuecal--green-theme"
        :active-view="ACTIVE_VIEW"
        :disable-views="DISABLED_VIEWS"
        :drag-to-create-event="false"
        :editable-events="EVENT_OPTIONS"
        :events="events"
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
        width: 100%;
    }

    .today-button {
        padding: 4px;
        border: solid 1px;
        border-radius: 8px;
        color: #42b983;
    }
</style>