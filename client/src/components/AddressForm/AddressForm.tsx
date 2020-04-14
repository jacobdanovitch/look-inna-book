import React, { FunctionComponent, useRef } from "react";
import { useQuery } from '@apollo/react-hooks';
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Form } from "react-bootstrap";

import { TAuthorizationView, TSubmitCallback } from '../../types';
import { LastUsedInfoQuery } from '../../db';

import { LoadingView } from '..';
import { ShippingSection } from './ShippingSection'
import { PaymentSection } from './PaymentSection'


const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  city: yup.string().required(),
  province: yup.string().required(),
  postalCode: yup.string().required(),
  save: yup.bool()
});

export type TSection = { startingID: () => number } // (x: number) => void

// validationSchema={schema}
export const AddressForm: FunctionComponent<TSubmitCallback & TAuthorizationView> = ({ onSubmit, user }) => {
  const user_id = user ? user.id : ''
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

  // https://stackoverflow.com/a/48087112/6766123
  const randomCC = (length: number) => Array(length).fill(0).map(() => Math.random().toString(36).charAt(2)).join('')
  const lastPayment = PaymentInfo[0] || {creditCardNumber: randomCC(16), expirationDate: "2020-04-12", cvv: "123" }
  const initialValues = {...lastAddress, ...lastPayment}

  const page = <Formik
    onSubmit={onSubmit}
    initialValues={initialValues}
  >
    {({ handleSubmit, handleChange, values, errors, isValid, isSubmitting}) => (
        <Form noValidate onSubmit={handleSubmit}>
          <ShippingSection startingID={incrementID}/>

          <PaymentSection startingID={incrementID}/>

          <br /><br />

          <Col>
            <Button
              disabled={!isValid}
              variant="success"
              size="lg"
              type="submit"
            >
              Place Order
            </Button>
          </Col>
        </Form>
      )}
  </Formik>

  countRef.current = 0;
  return page;
}
//  || isSubmitting