import moment from "moment"

export function useValidation() {
    function isEmpty(input: string) {
        return input.length > 0;
    }

    function isDateValid(date: string | undefined) {
        return moment(date, "DD/MM/YYYY").isValid();
    }

    return { isEmpty, isDateValid }
}