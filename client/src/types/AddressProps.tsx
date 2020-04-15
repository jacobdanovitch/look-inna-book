/*
export type TSchema = {
    firstName?: string,
    lastName?: string,
    street?: string,
    postalCode?: string,
    city?: string,
    province?: string,
    creditCardNumber?: string,
    cvv?: string,
    expirationDate?: string
  }
  */

import { 
  Final_Residentialaddress_Insert_Input, 
  Final_Paymentmethod_Insert_Input
} from './generated/hasuraTypes'

export type TSchema = Final_Paymentmethod_Insert_Input & Final_Residentialaddress_Insert_Input;


export type TSubmitCallback = {
    onSubmit: (values: TSchema) => void;
}