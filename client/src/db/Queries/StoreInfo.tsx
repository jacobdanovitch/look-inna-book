import { gql } from 'apollo-boost';

export const StoreInfoQuery = gql`query GetStoreInfo($user_id: String!) {
  Store(where: {user_id: {_eq: $user_id}}) {
    store_id
    store_name
  }
}
`

export const StoreContentsQuery = gql`query GetStoreContents($store_id: Int!) {
    Store(where: {store_id: {_eq: $store_id}}) {
      store_id
      store_name
    }
    Offer(where: {store_id: {_eq: $store_id}}) {
      inventory
      price
      Stock {
        title
        image_url
        category_id
        category
        author
        asin
      }
    }
  }
  `