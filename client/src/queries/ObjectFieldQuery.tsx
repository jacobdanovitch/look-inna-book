import { gql } from 'apollo-boost';


// https://moonhighway.com/five-introspection-queries
const ObjectFieldQuery = gql`query getFields($name: String!) {
  __type(name: $name) {
    fields {
      name
      description
    }
  }
}`


/*(where: object) => {
    let filterString = format(where);
    let query = gql`query BookFieldQuery {
        Book(where: ${filterString}, limit: 10) {
            ...BookAttributes
        }
      }
      ${BookAttributes}
    `
    console.log(getGqlString(query));
    return query
}
*/

export default ObjectFieldQuery;