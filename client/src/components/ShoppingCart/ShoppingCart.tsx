import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Media from 'react-bootstrap/Media';

import BookProps from '../../types/BookProps';

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]')

export const updateCart = (item: BookProps) => {
    let cart = getCart();
    cart.push(item);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (item: BookProps) => {
    let cart = getCart().filter((x: BookProps) => x.asin !== item.asin);
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const CartItem: FunctionComponent<BookProps> = (book) => {
    return <ListGroup.Item>
        <Media>
            <img
                width={128}
                height={128}
                className="mr-3"
                src={book.image_url}
                alt="Cover image of book"
            />
            <Media.Body>
                <h5><a href={`/book/${book.asin}`}>{book.title}</a></h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo.
                </p>
                <Button 
                    variant="outline-danger"
                    onClick={() => {
                        removeFromCart(book);
                        window.location.reload(false);
                    }}
                >
                    Remove
                </Button>
            </Media.Body>
        </Media>
    </ListGroup.Item>
}

export const ShoppingCart: FunctionComponent<any> = () => {
    const cart = getCart();
    console.log(cart);

    return <Container>
        <h1>Your Cart</h1>
        <Row>
            <Col md="8">
                <ListGroup>
                    {cart.map(CartItem)}
                </ListGroup>
            </Col>
            <Col>
                <Button variant="warning">Proceed to Checkout</Button>
            </Col>
        </Row>
    </Container>
}