import { gql } from 'apollo-boost';

export const PreviousOrdersQuery = gql`query GetPreviousOrders($user_id: String!) {
    final_purchase(where: {userid: {_eq: $user_id}}) {
      ordertime
      shipments {
        trackingid
        residentialaddress {
          street
          city
          country
        }
      }
      purchaseditems {
        asin
        quantity
      }
    }
  }
  `