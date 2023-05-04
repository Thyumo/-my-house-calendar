import { computed, ref } from "vue";
import moment from "moment"

import { useValidation } from "./validation";

import type { Ref } from "vue";
import type { BookingInputData } from "../types";

export function useFormValidation(formData: Ref<BookingInputData>) {
    const { isDateValid, isEmpty } = useValidation();

    const isFirstNameValid = computed(() => isEmpty(formData.value.firstName));
    const isLastNameValid = computed(() => isEmpty(formData.value.lastName));
    const isStartDateValid = computed(() => isDateValid(formData.value.startDate));
    const isEndDateValid = computed(() => isDateValid(formData.value.endDate));

    const isFormValid = computed(() => {
        return isFirstNameValid.value && isLastNameValid.value && isStartDateValid.value && isEndDateValid.value;
    });

    return { isFormValid };
}