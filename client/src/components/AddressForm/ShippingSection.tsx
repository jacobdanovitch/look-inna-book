import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormTextField, FormSelectField } from "..";
import { TSection } from './AddressForm'

export const ShippingSection: FunctionComponent<TSection> = ( { onChange } ) => {
    return <>
        <Col>
            <Form.Row>
              <FormTextField
                as={Col}
                sm={4}
                label="First name"
                type="text"
                name="firstname"
                onChange={onChange}
              />

              <FormTextField
                as={Col}
                sm={4}
                label="Last name"
                type="text"
                name="lastname"
                onChange={onChange}
              />
            </Form.Row>
          </Col>

          <Col>
            <Form.Row>
              <FormTextField
                as={Col}
                sm={4}
                label="Street"
                type="text"
                name="street"
                autocomplete="street-address"
                onChange={onChange}
              />


              <FormTextField
                as={Col}
                md="4"
                label="Postal Code"
                type="text"
                name="postalcode"
                onChange={onChange}
              />
            </Form.Row>
          </Col>
          <Col>
            <Form.Row>
              <FormTextField
                as={Col}
                sm="4"
                label="City"
                type="text"
                name="city"
                onChange={onChange}
              />

              <FormSelectField
                as={Col}
                sm="4"
                label="Province"
                type="text"
                name="province"
                onChange={onChange}
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
                label="Country"
                type="text"
                name="country"
                onChange={onChange}
              />
            </Form.Row>
          </Col>
    </>
}