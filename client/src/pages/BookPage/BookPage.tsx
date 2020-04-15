import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { Container, Row,  Col, Button, Image } from 'react-bootstrap';

import { BookPageQuery } from '../../db/Queries';
import { LoadingView } from '../../components';

import { updateCart } from '../../components/ShoppingCart';

interface TParams { asin: string };
export const BookPage: FunctionComponent<RouteComponentProps<TParams>> = ({ match }: RouteComponentProps<TParams>) => {
    const { loading, error, data } = useQuery(BookPageQuery, { variables: { asin: match.params.asin } });

    if (loading) return LoadingView(loading);
    if (error) return <div>A GraphQL error occurred! {JSON.stringify(error)}</div>;

    const book = data.final_book[0]
    console.log(book)

    const authors = book.authors.map((x: any) => x.AuthoredBook.fullname).join(', ')

    return <Container>
        <Row>
            <Col>
                <Image src={book.coverurl} thumbnail/>
            </Col>
            <Col>
                <h2>{book.title}</h2>
                <h5>By {authors} under {book.category}</h5>
            </Col>
            <Col>
                <Button 
                    variant="outline-warning"
                    onClick={(x: any) => {updateCart(book)}}
                >
                    Add to cart
                </Button>
            </Col>
        </Row>
        <Row>
        </Row>
    </Container>
}
