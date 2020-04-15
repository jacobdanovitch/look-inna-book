import { gql } from 'apollo-boost';

export const UpdateBookMutation = gql`mutation UpdateBook($asin: bpchar!, $price: numeric!, $inventory: Int) {
    update_final_book(where: {asin: {_eq: $asin}}, _set: {price: $price, inventory: $inventory}) {
      affected_rows
    }
  }
`

export const DeleteBookMutation = gql`mutation DeleteBook($asin: bpchar!) {
    delete_final_book(where: {asin: {_eq: $asin}}){
      affected_rows
    }
  }
`  