import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { Container, Media, ListGroup, Row, Col, Button } from 'react-bootstrap';

import { TUseAuth } from '../../types';
import { PreviousOrdersQuery } from '../../db';
import { LoadingView, BookCard, DynamicGrid, CartItem, CartList } from '../../components';

export const Store: FunctionComponent<TUseAuth> = ({ useAuth }) => {
    const { loading: authLoading, user } = useAuth();
    const userid = (!authLoading && user) ? user.id : ''
    const { loading, error, data } = useQuery(PreviousOrdersQuery, { variables: { userid }})

    if(loading){
        return LoadingView(loading)
    }

    if(!data || error){
        return <p>An error has occurred</p>
    }

    /*
    shipments {
      trackingid
      residentialaddress {
        street
        city
        country
      }
    }
    purchaseditems {
      asin
      quantity
    }
    */

    const { ordertime, shipments, purchaseditems } = data;
    const books = purchaseditems.map((o: any) => o)
    console.log(books)

    return <>
        <h3 style={{textAlign: "center"}}>Welcome to {/*Store[0].store_name*/}!</h3>
        <DynamicGrid arr={books} itemsPerCol={3} component={BookCard} />
    </>
}

