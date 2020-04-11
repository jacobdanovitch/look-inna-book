import { gql, DocumentNode } from 'apollo-boost';


const BookAttributes = gql`fragment BookAttributes on Book {
    title
    author
    category
    image_url
    category_id
    asin
  }`

const BookPageQuery = gql`query BookPageQuery($asin: String!) {
  Book(where: {asin: {_eq: $asin}}, limit: 1) {
    ...BookAttributes
  }
}
${BookAttributes}
`

export default BookPageQuery;


