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

const parseCheckoutData = (data: any) => {
  console.log(data);
  const { households, cardholders } = data.final_customer[0]
  console.log({ households, cardholders })
  const card = cardholders[0] && cardholders[0].paymentmethod;
  const address = households[0] && households[0].residentialaddress

  console.log({ card, address })

  return { card, address }
}

export type TSection = { onChange: (e: any) => void }

// validationSchema={schema}
export const AddressForm: FunctionComponent<TSubmitCallback & TAuthorizationView> = ({ onSubmit, user }) => {
  const user_id = user ? user.id : ''
  const { loading, error, data } = useQuery(LastUsedInfoQuery, { variables: { user_id } });

  if (loading || (!user_id)) {
    return LoadingView(loading);
  }
  if (error) {
    return <p>An error occurred: {JSON.stringify(error)}</p>
  }

  console.log(data)
  const { card, address } = parseCheckoutData(data);


  // https://stackoverflow.com/a/48087112/6766123
  const randomCC = (length: number) => Array(length).fill(0).map(() => Math.random().toString(36).charAt(2)).join('')
  const lastPayment = card || { cardnumber: randomCC(16), expirationdate: "2020-04-12", cvv: "123" }
  const initialValues = {...address, ...lastPayment}

  return <Formik
    onSubmit={onSubmit}
    initialValues={initialValues}
  >
    {({ handleSubmit, handleChange, values, errors, isValid }) => {
      return <Form noValidate onSubmit={handleSubmit}>
        <ShippingSection onChange={handleChange} />
        <PaymentSection onChange={handleChange} />

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
    }}
  </Formik>
}
//  || isSubmitting