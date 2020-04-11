import React, { FunctionComponent } from 'react';

import { LoadingView } from '../LoadingView/LoadingView';
import { BookCard } from '../BookCard/BookCard';
import { DynamicGrid } from '../DynamicGrid/DynamicGrid';

import { useQuery } from "@apollo/react-hooks";


const BookQuery: FunctionComponent<any> = ({query}) => {
    const { loading, error, data } = useQuery(query);

    if (loading) return LoadingView(loading);
    if (error) return <div>A GraphQL error occurred! {JSON.stringify(error)}</div>;

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '1%' }}>Book list</h1>
            <DynamicGrid arr={data.Book} itemsPerCol={3} component={BookCard} />
        </div>
    );
};

export default BookQuery;