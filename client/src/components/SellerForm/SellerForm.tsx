import React, { FunctionComponent, useState, useRef } from "react";
import { useQuery } from '@apollo/react-hooks';
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Form } from "react-bootstrap";

import { TSubmitCallback } from '../../types';
import { BookPageQuery } from '../../db'
import { LoadingView, FormTextField, FormSelectField } from "..";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    city: yup.string().required(),
    province: yup.string().required(),
    postalCode: yup.string().required(),
    save: yup.bool()
});

// validationSchema={schema}
export const SELLER_ACTION_OPTIONS = { UPDATE: "Add / Update", REMOVE: "Delete" }
export const SellerForm: FunctionComponent<TSubmitCallback> = ({ onSubmit }) => {
    const [ asin, setAsin ] = useState('')
    const asinRef = useRef(asin)
    const { loading, error, data } = useQuery(BookPageQuery, { variables: { asin } } );

    if(loading){
        return LoadingView(loading);
    }

    const book = (data && data.final_book && data.final_book[0]) ? data.final_book[0] : { price: null, inventory: null }

    console.log(book);
    const { price, inventory } = book
    
    const { UPDATE, REMOVE } = SELLER_ACTION_OPTIONS
    const initialValues = { action: UPDATE, ...book }

    const setCurrentAsin = ( e: any ) => {
        asinRef.current = e.target.value
    }

    console.log(initialValues)

    return <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
    >
        {({ handleSubmit, handleChange, values, errors, isValid, isSubmitting, setSubmitting }) => (
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
                            onChange={(e) => {
                                setCurrentAsin(e)
                                handleChange(e)
                            }}
                        />

                        <FormTextField
                            as={Col}
                            sm={2}
                            md={3}
                            label="Price"
                            type="number"
                            name="price"
                            onChange={handleChange}
                        />
                    </Form.Row>
                    <Form.Row>
                        <FormTextField
                            as={Col}
                            sm={2}
                            md={3}
                            label="Inventory"
                            type="number"
                            name="inventory"
                            onChange={handleChange}
                        />
                        <FormSelectField
                            as={Col}
                            sm={2}
                            md={4}
                            label="Action"
                            type="text"
                            name="action"
                            onChange={handleChange}
                        >
                            <option>{REMOVE}</option>
                            <option>{UPDATE}</option>
                        </FormSelectField>
                    </Form.Row>
                </Col>

                <br /><br />

                <Col>
                    <Button
                        disabled={!!book && !isValid}
                        variant="outline-success"
                        size="lg"
                        type="submit"
                    >
                        Submit
                    </Button>

                    <Button
                        disabled={!isValid}
                        variant="outline-info"
                        size="lg"
                        type="submit"
                        onClick={(e: any) => {
                            setSubmitting(false);
                            e.preventDefault();
                            setAsin(asinRef.current);
                        }}
                    >
                        Refresh Info
                    </Button>
                </Col>
            </Form>
        )}
    </Formik>
}
//  || isSubmitting