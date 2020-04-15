import React, { FunctionComponent } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import { Col, Form, Navbar } from 'react-bootstrap';

import { TUseAuth } from '../../types'
import { ObjectFieldQuery, StoreInfoQuery } from '../../db/Queries';
import { dataMaybeReady } from './NavUtils'
import { BrandLogo, SearchField, SearchInput, AccountManagement, CartLogo } from './NavItems'


export const SiteNavbar: FunctionComponent<TUseAuth> = ({useAuth}) => {
    const { user, auth } = useAuth();

    const [query, setQuery] = React.useState('');
    const [field, setField] = React.useState('title');

    const fieldData = dataMaybeReady(useQuery(ObjectFieldQuery, { variables: { name: 'final_book' } }));
    const options = fieldData.options;

    const user_id = user ? user.id : '';
    const { loading, error, data } = useQuery(StoreInfoQuery, { variables: { user_id }})
    const store = !(loading || error) && data.Store

    // https://stackoverflow.com/a/42121109/6766123
    const history = useHistory();
    function handleClick() {
        history.push(`/search?field=${field}&query=${query}`);
    }

    const handleTyping = (x: any) => setField(x.target.value || field)


    return fieldData.error ? fieldData.message : !loading && <React.Fragment>
        <Navbar bg="light" expand="sm">

                <Col xs={1} md={1}>
                    <BrandLogo />
                </Col>

                <Form.Group as={Col} md="2" controlId="formGridState">
                    {SearchField(options, field, handleTyping)}
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="formGridZip">
                    {SearchInput(query, setQuery, handleClick)}
                </Form.Group>

                <Col md={2}>
                    {AccountManagement({ user, auth }, { store })}
                </Col>

                <Col xs={1} md={1}>
                    <CartLogo/>
                </Col>
        </Navbar>
        <hr />
    </React.Fragment>
}