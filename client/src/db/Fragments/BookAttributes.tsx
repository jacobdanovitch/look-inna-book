import { gql } from 'apollo-boost';

export const BookAttributes = gql`fragment BookAttributes on Book {
    title
    author
    category
    image_url
    category_id
    asin
  }`