import { computed, ref } from "vue";
import moment from "moment"

import { useValidation } from "./validation";

import type { BookingInputData } from "../types";

export function useFormValidation(formData: BookingInputData) {
    const { isDateValid, isEmpty } = useValidation();

    const isFirstNameValid = computed(() => isEmpty(formData.firstName));
    const isLastNameValid = computed(() => isEmpty(formData.lastName));
    const isStartDateValid = computed(() => isDateValid(formData.startDate));
    const isEndDateValid = computed(() => isDateValid(formData.endDate));

    const isFormValid = computed(() => {
        return isFirstNameValid && isLastNameValid && isStartDateValid && isEndDateValid;
    });

    return { isFormValid }
}