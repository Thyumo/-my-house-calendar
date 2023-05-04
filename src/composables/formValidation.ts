import { computed } from "vue";

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
        const isDataValid = isFirstNameValid.value && isLastNameValid.value && isStartDateValid.value && isEndDateValid.value
        if (! isDataValid) { return false };
    
        const isBookingIntervalValid = (new Date(formData.value.startDate)).getTime() <= (new Date(formData.value.endDate)).getTime();
        return isBookingIntervalValid;
    });

    return { isFormValid };
}