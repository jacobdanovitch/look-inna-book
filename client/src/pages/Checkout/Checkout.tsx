import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

import * as uuid from "uuid";

import { Container, Col, Row } from 'react-bootstrap';

import { TUseAuth, TSchema } from '../../types'

import { SubmitAddressMutation, SubmitOrderMutation } from '../../db'

import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getCart, CartList } from '../../components/ShoppingCart';

// https://stackoverflow.com/a/34890276/6766123
const groupBy = (xs: Array<any>, key: string) => {
    return xs.reduce((rv, x): any => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

const getOrder = () => {
    const cart = getCart()
    const grouped = groupBy(cart, 'asin')
    
    const orderid = uuid.v4();
    const trackingid = uuid.v4();
    const items = Object.keys(grouped).map((asin: string) => {
        return {
            asin,
            orderid,
            quantity: grouped[asin].length
        }
    })

    return { orderid, trackingid, cart, items }
}

const parseFormValues = (formValues: TSchema ) => {
    const {
        firstname,
        lastname,
        street,
        postalcode,
        city,
        province,
        cardnumber,
        cvv,
        expirationdate
    } = { ...formValues }

    const address = [{
        firstname,
        lastname,
        street,
        postalcode,
        city,
        province
    }]

    const payment = {
        cardnumber,
        cvv,
        expirationdate,
    }


    return { address, payment }
}

export const Checkout: FunctionComponent<TUseAuth> = ({ useAuth }) => {
    const history = useHistory();
    const { loading, user } = useAuth();

    const [submitOrder, ] = useMutation(SubmitOrderMutation);
    const [submitAddress, { data, loading: mutationLoading } ] = useMutation(SubmitAddressMutation, { ignoreResults: false });
    const formResults = useRef<TSchema>({});

    const userid = user ? user.id : ''
    const customer = { userid }

    const { orderid, trackingid, cart, items } = getOrder()

    useEffect(() => {
        if(!mutationLoading && data){
            const residenceid = data.insert_final_residentialaddress.returning[0].residenceid
            const shipment = { trackingid, orderid, residenceid }
            const household = { userid, residenceid }

            const { payment } = parseFormValues(formResults.current);
            const { cardnumber } = payment;
            const order = { orderid, userid, cardnumber }
            const cardholder = { userid, cardnumber }

            const variables = { customer, household, order, shipment, payment, items, cardholder }

            console.log(variables)
            submitOrder({ variables })
        }
    }, [mutationLoading])

    const OrderOnSubmit = (formValues: TSchema) => {
        const { address } = parseFormValues(formValues);
        
        submitAddress({variables: { address }})
        formResults.current = formValues
    }

    if ((user === null) && !loading) {
        history.push('/');
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

