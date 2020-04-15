import { gql } from 'apollo-boost';

export const BookAttributes = gql`fragment BookAttributes on final_book {
    asin
    category
    coverurl
    inventory
    pages
    price
    title
    authors {
      AuthoredBook {
        fullname
      }
    }
  }`