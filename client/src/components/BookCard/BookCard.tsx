import React, { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import BookProps from '../../types/BookProps';
import { updateCart } from '../ShoppingCart/ShoppingCart';

function renderTooltip(book: BookProps) {
    function innerTooltip(props: any){
        return (
            <Tooltip id="button-tooltip" {...props}>
                <Button 
                variant="warning"
                onClick={() => updateCart(book)}
                >
                    Add to cart
                </Button>
            </Tooltip>
        );
    }
    return innerTooltip
}

const addToCartHover: FunctionComponent<any> = (book: BookProps) => (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 1200 }}
        overlay={renderTooltip(book)}
    >
        <p>{book.title}</p>
    </OverlayTrigger>
);


export const BookCard: FunctionComponent<BookProps> = (book) =>
    <a href={`/book/${book.asin}`}>
        <Card style={{ width: '14rem' }} key={book.asin}>
            <Card.Img variant="top" src={book.image_url} />
            <Card.Body>
                <Card.Title>
                    {addToCartHover(book)}
                </Card.Title>
                <Card.Text>
                    {book.author} ({book.category})
                </Card.Text>
            </Card.Body>
        </Card>
    </a>
