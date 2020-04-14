import React, { FunctionComponent } from 'react';
import { TFormField, FormField } from './FormField';

export const FormTextField: FunctionComponent<TFormField> = (props) => <FormField {...props} />
export const FormSelectField: FunctionComponent<TFormField> = (props) => <FormField {...props} control={{ as: "select" }} />