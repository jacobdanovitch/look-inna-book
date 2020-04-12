import { gql } from 'apollo-boost';


// https://moonhighway.com/five-introspection-queries
export const ObjectFieldQuery = gql`query getFields($name: String!) {
  __type(name: $name) {
    fields {
      name
      description
    }
  }
}`