import { gql, DocumentNode } from 'apollo-boost';

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


const BookAttributes = gql`fragment BookAttributes on Book {
    title
    author
    category
    image_url
    category_id
    asin
  }`

const BookSearchQuery = (where: object) => {
    if(!where){
        return null;
    }
    let filterString = format(where);
    let query = gql`query BookSearchQuery {
        Book(where: ${filterString}, limit: 10) {
            ...BookAttributes
        }
      }
      ${BookAttributes}
    `
    // console.log(getGqlString(query));
    console.log(query);
    return query
}

export default BookSearchQuery;