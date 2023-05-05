import moment from "moment"

import type { Booking } from "../types";

export function useValidation() {
    function isEmpty(input: string) {
        return input.length > 0;
    }

    function isDateValid(date: string | undefined) {
        return moment(date, "DD/MM/YYYY").isValid();
    }

    function convertToEventFormat(rawBooking: Booking) {
        return {
            start: new Date(rawBooking.startDate),
            end: new Date(rawBooking.endDate),
            title: `Réservé par ${rawBooking.firstName} ${rawBooking.lastName}`
        }
    }

    return { convertToEventFormat, isEmpty, isDateValid }
}