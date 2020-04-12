import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormTextField, FormSelectField } from "..";
import { TSection } from './AddressForm'

export const PaymentSection: FunctionComponent<TSection> = ( { startingID } ) => {
    const incrementID = () => {
        return startingID()
    }
    return <>
        <Col>
            <Form.Row>
                <FormTextField
                    as={Col}
                    sm={2}
                    controlId={`validationFormik0${incrementID()}`}
                    label="Credit Card Number"
                    type="text"
                    name="creditCardNumber"
                />

                <FormTextField
                    as={Col}
                    sm={2}
                    md={2}
                    controlId={`validationFormik0${incrementID()}`}
                    label="CVV"
                    type="text"
                    name="cvv"
                />

                <FormTextField
                    as={Col}
                    sm={2}
                    md={2}
                    controlId={`validationFormik0${incrementID()}`}
                    label="Expiration Date"
                    type="date"
                    name="expirationDate"
                />
            </Form.Row>
        </Col>
    </>
}