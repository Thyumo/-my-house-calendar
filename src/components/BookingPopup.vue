<script setup lang="ts">
    import { ref, toRef } from "vue";
    import { useMutation } from "@vue/apollo-composable";

    import RegularButton from "../baseComponents/RegularButton.vue";
    import BookingPopupForm from "./BookingPopupForm.vue";

    import { usePopup } from "../composables/popup";
    import { createBookingMutation } from "../realm/mutations";

    import type { BookingInputData } from "../types";

    const props = defineProps({ isOpened: Boolean });
    const emits = defineEmits(["update:isOpened"]);

    const { opened, close } = usePopup({ isOpened: toRef(props, "isOpened"), emitter: emits });

    const bookingCreationData = ref<BookingInputData>({
        firstName: "",
        lastName: "",
        startDate: "",
        endDate: ""
    })

    function handleUpdate(update: Partial<BookingInputData>) {
        bookingCreationData.value = { ...bookingCreationData.value, ...update };
    };

    const { mutate: createBooking } = useMutation(createBookingMutation);

    async function handleBookingCreation() {
        const bookingInput = {
            ...bookingCreationData.value,
            endDate: new Date(bookingCreationData.value.endDate),
            startDate: new Date(bookingCreationData.value.startDate)
        }
        await createBooking({ data: bookingInput });
        close()
    }
</script>

<template>
    <Teleport to=".homepage">
        <div v-if="opened" class="modal">
            <div class="title">Réserver la maison</div>

            <BookingPopupForm class="form" :formData="bookingCreationData" @update:formData="handleUpdate($event)" />

            <div class="footer">
                <RegularButton
                    text="Annuler"
                    type="secondary"
                    @click="close()"
                />

                <RegularButton
                    text="Réserver"
                    type="main"
                    @click="handleBookingCreation()"/>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .modal {
        position: fixed;
        top: 20%;
        z-index: 999;
        width: 600px;
        padding: 30px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 16px #00000026;
    }

    .title {
        margin-bottom: 36px;

        font-size: 24px;
    }

    .form {
        margin-bottom: 24px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }
</style>
