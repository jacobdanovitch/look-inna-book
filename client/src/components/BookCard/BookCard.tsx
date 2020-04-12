import React, { FunctionComponent } from 'react';
import {
    Card, 
    Button, 
    Tooltip, 
    OverlayTrigger 
} from 'react-bootstrap';

import { TBookProps } from '../../types';
import { updateCart } from '../ShoppingCart';

function renderTooltip(book: TBookProps) {
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

const addToCartHover: FunctionComponent<any> = (book: TBookProps) => (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 1200 }}
        overlay={renderTooltip(book)}
    >
        <p>{book.title}</p>
    </OverlayTrigger>
);


export const BookCard: FunctionComponent<TBookProps> = (book) =>
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
