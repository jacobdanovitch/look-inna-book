import React, { FunctionComponent } from 'react';
import {
    Card, 
    Button, 
    Tooltip, 
    OverlayTrigger 
} from 'react-bootstrap';

import { Final_Book } from '../../types';
import { updateCart } from '../ShoppingCart';

function renderTooltip(book: Final_Book) {
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

const addToCartHover: FunctionComponent<any> = (book: Final_Book) => (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 1200 }}
        overlay={renderTooltip(book)}
    >
        <p>{book.title}</p>
    </OverlayTrigger>
);


export const BookCard: FunctionComponent<Final_Book> = (book) =>
    <a href={`/book/${book.asin}`}>
        <Card style={{ width: '14rem' }} key={book.asin}>
            <Card.Img variant="top" src={book.coverurl || '#'} />
            <Card.Body>
                <Card.Title>
                    {addToCartHover(book)}
                </Card.Title>
                <Card.Text>
                    {/*book.author*/} ({book.category})
                </Card.Text>
            </Card.Body>
        </Card>
    </a>
