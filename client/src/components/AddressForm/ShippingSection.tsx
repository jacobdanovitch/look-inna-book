import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormTextField, FormSelectField } from "..";
import { TSection } from './AddressForm'

export const ShippingSection: FunctionComponent<TSection> = ( { startingID } ) => {
    const incrementID = () => {
        return startingID()
    }
    return <>
        <Col>
            <Form.Row>
              <FormTextField
                as={Col}
                sm={4}
                controlId={`validationFormik0${incrementID()}`}
                label="First name"
                type="text"
                name="firstName"
              />

              <FormTextField
                as={Col}
                sm={4}
                controlId={`validationFormik0${incrementID()}`}
                label="Last name"
                type="text"
                name="lastName"
              />
            </Form.Row>
          </Col>

          <Col>
            <Form.Row>
              <FormTextField
                as={Col}
                sm={4}
                controlId={`validationFormik0${incrementID()}`}
                label="Street"
                type="text"
                name="street"
                autocomplete="street-address"
              />


              <FormTextField
                as={Col}
                md="4"
                controlId={`validationFormik0${incrementID()}`}
                label="Postal Code"
                type="text"
                name="postalCode"
              />
            </Form.Row>
          </Col>
          <Col>
            <Form.Row>
              <FormSelectField
                as={Col}
                sm="4"
                controlId={`validationFormik0${incrementID()}`}
                label="City"
                type="text"
                name="city"
              >
                <option value="">Select a city</option>
                <option>Toronto</option>
                <option>Markham</option>
                <option>Mississauga</option>
              </FormSelectField>

              <FormSelectField
                as={Col}
                sm="4"
                controlId={`validationFormik0${incrementID()}`}
                label="Province"
                type="text"
                name="province"
              >
                <option value="">Select a state</option>
                <option>ON</option>
                <option>QB</option>
                <option>MT</option>
                <option>BC</option>
              </FormSelectField>

              <FormTextField
                as={Col}
                md="4"
                controlId={`validationFormik0${incrementID()}`}
                label="Country"
                type="text"
                name="country"
              />
            </Form.Row>
          </Col>
    </>
}