import gql from "graphql-tag";

export const getBookingsQuery = gql`
    query getBookings {
        bookings {
            _id
            endDate
            firstName
            lastName
            startDate
        }
    }
`
