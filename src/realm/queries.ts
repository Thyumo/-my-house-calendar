import gql from "graphql-tag";

export const getBookingsQuery = gql`
    query GetBookings {
        bookings {
            _id
            endDate
            firstName
            lastName
            startDate
        }
    }
`
