import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormTextField, FormSelectField } from "..";
import { TSection } from './AddressForm'

export const PaymentSection: FunctionComponent<TSection> = ( { onChange } ) => {
    return <>
        <Col>
            <Form.Row>
                <FormTextField
                    as={Col}
                    sm={2}
                    md={6}
                    label="Credit Card Number"
                    type="text"
                    name="cardnumber"
                    onChange={onChange}
                />

                <FormTextField
                    as={Col}
                    sm={2}
                    md={2}
                    label="CVV"
                    type="text"
                    name="cvv"
                    onChange={onChange}
                />

                <FormTextField
                    as={Col}
                    sm={2}
                    md={4}
                    label="Expiration Date"
                    type="date"
                    name="expirationdate"
                    onChange={onChange}
                />
            </Form.Row>
        </Col>
    </>
}