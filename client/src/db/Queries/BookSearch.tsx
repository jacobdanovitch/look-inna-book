import { gql, DocumentNode } from 'apollo-boost';
import { BookAttributes } from '../Fragments'

function getGqlString(doc: DocumentNode) {
    return doc.loc && doc.loc.source.body;
  }

// https://stackoverflow.com/a/54429071/6766123
function format(obj: Record<string, any>)
{
    let str = JSON.stringify(obj, null, 4);
    let arr = str.match(/".*?":/g);
    if(!arr){
        return obj
    }

    for(var i = 0; i < arr.length; i++)
        str = str.replace(arr[i], arr[i].replace(/"/g,''));

    return str;
}

export const BookSearchQuery = (where: object) => {
    let filterString = format(where);
    let query = gql`query BookSearchQuery {
        final_book(where: ${filterString}, limit: 10) {
            ...BookAttributes
        }
      }
      ${BookAttributes}
    `
    return query
}