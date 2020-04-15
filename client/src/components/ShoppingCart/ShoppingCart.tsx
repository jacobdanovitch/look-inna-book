import React, { FunctionComponent } from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    Media
} from 'react-bootstrap'

import { Final_Book } from '../../types';
import { getCart, updateCart, removeFromCart, clearCart } from './CartUtils'

type TCartItem = { book: Final_Book, hideButton?: boolean}
export const CartItem: FunctionComponent<TCartItem> = ({ book, hideButton }) => {
    const authors = book.authors.map((x: any) => x.AuthoredBook.fullname).join(', ')
    return <ListGroup.Item>
        <Media>
            <img
                width={128}
                height={128}
                className="mr-3"
                src={book.coverurl || '#'}
                alt="Cover image of book"
            />
            <Media.Body>
                <h6><a href={`/book/${book.asin}`}>{book.title}</a></h6>
                <p style={{ fontSize: "smaller" }}>{authors}</p>
                <hr />
                <div>
                    <span>{book.price && `From ${book.price}`} {book.inventory && `| ${book.inventory} remaining`} </span>
                    {!hideButton &&
                        <Button
                            variant="outline-danger"
                            style={{ float: "right" }}
                            onClick={() => {
                                removeFromCart(book);
                                window.location.reload(false);
                            }}
                        >
                            Remove
                        </Button>
                    }
                </div>
            </Media.Body>
        </Media>
    </ListGroup.Item>
}

type TCartList = { cart: Array<Final_Book> };
export const CartList: FunctionComponent<TCartList> = ({ cart }) => {
    return <ListGroup>
        {cart.map((b: Final_Book) => <CartItem book={b}/>)}
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
                <Button variant="outline-danger" onClick={() => {
                    clearCart();
                    window.location.reload(false);
                }}>Clear cart</Button>
            </Col>
        </Row>
        <Row>
            <Col md="8">
                <CartList cart={cart} />
            </Col>
            <Col>
                <a href="/checkout"><Button variant="warning">Proceed to Checkout</Button></a>
            </Col>
        </Row>
    </Container>
}