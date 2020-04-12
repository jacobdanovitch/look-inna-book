import { gql } from 'apollo-boost';

export const LastUsedInfoQuery = gql`query LastUsedInfo($user_id: String!) {
  ShippingAddress(where: {user_id: {_eq: $user_id}}, order_by: {lastUsed: desc_nulls_last}) {
    city
    country
    firstName
    lastName
    postalCode
    province
    street
  }
  PaymentInfo(where: {user_id: {_eq: $user_id}}, order_by: {lastUsed: desc}) {
    creditCardNumber
    cvv
    expirationDate
  }
}
`