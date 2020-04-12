import React, { FunctionComponent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

import * as uuid from "uuid";

import { Container, Col, Row } from 'react-bootstrap';

import { TUseAuth, TSchema } from '../../types'

import { SubmitOrderMutation } from '../../db/Mutations/SubmitOrder'

import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getCart, CartList } from '../../components/ShoppingCart';

export const Checkout: FunctionComponent<TUseAuth> = ({ useAuth }) => {
    const history = useHistory();
    const [submitOrder, { data }] = useMutation(SubmitOrderMutation);
    const { loading, user } = useAuth();

    if ((user === null) && !loading) {
        history.push('/');
    }

    if (user === null) {
        return null; // typescript is so stupid lmao
    }

    const user_id = user.id

    // https://stackoverflow.com/a/34890276/6766123
    const groupBy = (xs: Array<any>, key: string) => {
        return xs.reduce((rv, x): any => {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    const cart = getCart()
    const grouped = groupBy(cart, 'asin')
    const orders = Object.keys(grouped).map((asin: string) => {
        return {
            asin,
            orderID: uuid.v4(),
            quantity: grouped[asin].length
        }
    })

    const OrderOnSubmit = (formValues: TSchema) => {
        const {
            firstName,
            lastName,
            street,
            postalCode,
            city,
            province,
            creditCardNumber,
            cvv,
            expirationDate
        } = { ...formValues }

        const address = [{
            firstName,
            lastName,
            street,
            postalCode,
            city,
            province,
            user_id
        }]

        const payment = {
            creditCardNumber,
            cvv,
            expirationDate,
            user_id
        }

        submitOrder({ variables: { orders, address, payment } })
    }

    return <Container>
        <Row>
            <h3>Checkout</h3>
        </Row>
        <hr />
        <Row>
            <CartList cart={cart} />
        </Row>
        <Row>
            <AddressForm onSubmit={OrderOnSubmit} user={user} />
        </Row>
    </Container>
}

