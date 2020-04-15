import React, { FunctionComponent } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { RouteComponentProps, useLocation } from 'react-router-dom';

import { BookCard, DynamicGrid, LoadingView } from '../../components';
import { BookSearchQuery } from '../../db/Queries';

function cleanQuery(query: string) {
    return `%${query.replace(/\s+/g, "%")}%`.replace(/\%{2,}/g, "%");
}

function useQueryParams() {
    return new URLSearchParams(useLocation().search);
}

type TParams = { field: string, query: string };
export const SearchResults: FunctionComponent<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {
    const params = useQueryParams();
    const field = params.get("field") || ''
    const query = params.get("query") || '';

    const queryObj = {
        [field]: { _ilike: cleanQuery(query) },
    }
    console.log(queryObj)

    const bookQuery = BookSearchQuery(queryObj)
    const { loading, error, data } = useQuery(bookQuery);
    if (loading) return LoadingView(loading);
    if (error) return <div>A GraphQL error occurred! {JSON.stringify(error)}</div>;

    return <div>
        <h1 style={{ textAlign: 'center', marginBottom: '1%' }}>Book list</h1>
        <DynamicGrid arr={data.final_book} itemsPerCol={3} component={BookCard} />
    </div>
}