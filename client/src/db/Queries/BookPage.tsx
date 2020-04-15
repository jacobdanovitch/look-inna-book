import { gql } from 'apollo-boost';
import { BookAttributes } from '../Fragments'

export const BookPageQuery = gql`query BookPageQuery($asin: bpchar!) {
  final_book(where: {asin: {_eq: $asin}}, limit: 1) {
    ...BookAttributes
  }
}
${BookAttributes}
`