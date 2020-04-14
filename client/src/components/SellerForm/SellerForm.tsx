import React, { FunctionComponent, useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Form } from "react-bootstrap";

import { TSubmitCallback } from '../../types';
import { LoadingView } from '..';
import { FormTextField, FormSelectField } from "..";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    province: yup.string().required(),
    postalCode: yup.string().required(),
    save: yup.bool()
});

// validationSchema={schema}
export const SellerForm: FunctionComponent<TSubmitCallback> = ({ onSubmit }) => {
    /*
    const { loading, error, data } = useQuery(LastUsedInfoQuery, { variables: { user_id } });
    
    const countRef = useRef(0);
    const incrementID = () => {
      countRef.current  = countRef.current+1
      return countRef.current;
    }
  
    if(loading || (!user_id)){
      return LoadingView(loading);
    }
    if(error){
      return <p>An error occurred</p>
    }
  
    const { ShippingAddress, PaymentInfo } = data
    const lastAddress = ShippingAddress[0] || {
      firstName: "Jacob",
      lastName: "Danovitch",
      city: undefined,
      province: "ON",
      country: "Canada",
      postalCode: ""
    }
    */
    const [ADD, REMOVE, UPDATE] = ["Add inventory", "Remove Inventory", "Update Item"]
    const initialValues = {action: ADD}

    return <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
    >
        {({ handleSubmit, handleChange, values, errors, isValid, isSubmitting }) => (
            <Form noValidate onSubmit={handleSubmit}>
                <Col>
                    <Form.Row>
                        <FormTextField
                            as={Col}
                            sm={2}
                            md={6}
                            label="ASIN"
                            type="text"
                            name="asin"
                        />

                        <FormSelectField
                            as={Col}
                            sm={2}
                            md={4}
                            label="Action"
                            type="text"
                            name="action"
                        >
                            <option>{ADD}</option>
                            <option>{REMOVE}</option>
                            <option>{UPDATE}</option>
                        </FormSelectField>
                    </Form.Row>
                    <Form.Row>
                        <FormTextField
                            as={Col}
                            sm={2}
                            md={3}
                            label="Price"
                            type="number"
                            name="price"
                        />

                        <FormTextField
                            as={Col}
                            sm={2}
                            md={3}
                            label="Quantity"
                            type="number"
                            name="inventory"
                        />

                        <FormTextField
                            as={Col}
                            sm={2}
                            md={3}
                            label="Warehouse ID"
                            type="number"
                            name="warehouse_id"
                        />
                    </Form.Row>
                </Col>

                <br /><br />

                <Col>
                    <Button
                        disabled={!isValid}
                        variant="outline-success"
                        size="lg"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Col>
            </Form>
        )}
    </Formik>
}
//  || isSubmitting