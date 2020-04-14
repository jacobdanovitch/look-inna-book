import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { Container, Media, ListGroup, Row, Col, Button } from 'react-bootstrap';

import { StoreContentsQuery } from '../../db/Queries/StoreInfo';
import { LoadingView } from '../../components/LoadingView/LoadingView';
import { BookCard } from '../../components/BookCard/BookCard';
import { DynamicGrid } from '../../components/DynamicGrid/DynamicGrid';

interface TParams { store_id: string };
export const Store: FunctionComponent<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {
    const store_id = parseInt(match.params.store_id);
    
    const { loading, error, data } = useQuery(StoreContentsQuery, { variables: { store_id }})

    if(loading){
        return LoadingView(loading)
    }

    if(!data || error){
        return <p>An error has occurred</p>
    }

    const { Store, Offer } = data;
    const books = Offer.map((o: any) => o.Stock)
    console.log(books)

    return <>
        <h3 style={{textAlign: "center"}}>Welcome to {Store[0].store_name}!</h3>
        <DynamicGrid arr={books} itemsPerCol={3} component={BookCard} />
    </>
}

