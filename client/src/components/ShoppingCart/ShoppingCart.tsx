import React, { FunctionComponent } from 'react';

import {
    Container, 
    Row, 
    Col, 
    Button, 
    ListGroup, 
    Media 
} from 'react-bootstrap' 

import { TBookProps } from '../../types';
import { getCart, updateCart, removeFromCart } from './CartUtils'

export const CartItem: FunctionComponent<TBookProps> = (book) => {
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

type TCartList = { cart: Array<TBookProps> };
export const CartList: FunctionComponent<TCartList> = ({ cart }) => {
    return <ListGroup>
        {cart.map(CartItem)}
    </ListGroup>;
}

export const ShoppingCart: FunctionComponent = () => {
    const cart = getCart();
    return <Container>
        <Row>
            <Col md="8">
                <h1>Your Cart</h1>
            </Col>
            <Col>
                <Button variant="outline-danger">Clear cart</Button>
            </Col>
        </Row>
        <Row>
            <Col md="8">
                <CartList cart={cart}/>
            </Col>
            <Col>
                <a href="/checkout"><Button variant="warning">Proceed to Checkout</Button></a>
            </Col>
        </Row>
    </Container>
}