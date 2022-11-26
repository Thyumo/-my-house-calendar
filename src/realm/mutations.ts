import gql from "graphql-tag";

export const createBookingMutation = gql`
    mutation createBooking ($data: BookingInsertInput!) {
        insertOneBooking (data: $data) {
            _id
            endDate
            firstName
            lastName
            startDate
        }
    }
`
