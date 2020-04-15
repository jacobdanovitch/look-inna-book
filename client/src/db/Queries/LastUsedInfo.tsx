import { gql } from 'apollo-boost';

export const LastUsedInfoQuery = gql`query LastUsedInfo($user_id: String!) {
  final_customer(where: {userid: {_eq: $user_id}}) {
    cardholders {
      paymentmethod {
        cardnumber
        cvv
        expirationdate
      }
    }
    households {
      residentialaddress {
        city
        country
        postalcode
        province
        street
        firstname
        lastname
      }
    }
  }
}
`