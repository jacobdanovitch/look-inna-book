import React, { FunctionComponent } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps, useLocation } from 'react-router-dom';

import BookQuery from '../BookQuery/BookQuery';

import BookSearchQuery from '../../queries/BookSearchQuery';

function cleanQuery(query: string) {
    return `%${query.replace(/\s+/g, "%")}%`.replace(/\%{2,}/g, "%");
}

function useQueryParams() {
    return new URLSearchParams(useLocation().search);
}



type TParams = { field: string, query: string };


const SearchResults: FunctionComponent<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {
    let params = useQueryParams();
    let field = params.get("field") || '', query = params.get("query") || '';

    console.log(field)
    console.log(query)
    return <BookQuery query={BookSearchQuery({
        [field]: { _ilike: cleanQuery(query) },
    })}/>
}

export default SearchResults;