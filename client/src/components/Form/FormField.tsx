// following: https://codesandbox.io/s/react-bootstrap-formik-pb831?from-embed=&file=/src/form-field.js:0-1167

import React, { FunctionComponent } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Field } from "formik";

export type TFormField = {
    as: any,
    sm?: any,
    md?: any,
    controlId?: string,
    label: string,
    name: string,
    type: string,
    inputGroupPrepend?: any,
    children?: any,
    control?: any
    ref?: any,
    autocomplete?: string
}
type TFormRender = { field: any, form: any }

export const FormField: FunctionComponent<TFormField> = ({ name, as, md, controlId, label, type, inputGroupPrepend, children, control, autocomplete }) => {
    const renderField: FunctionComponent<TFormRender> = ({ field, form }) => {
        const isValid = form.touched[field.name] && !form.errors[field.name];
        const isInvalid = form.touched[field.name] && !isValid;
        const controlOpts = control || {};
        return (
            <Form.Group as={as} md={md} controlId={controlId || `validationFormik-${name}`}>
                <Form.Label>{label}</Form.Label>
                <InputGroup>
                    {inputGroupPrepend}
                    <Form.Control
                        {...field}
                        type={type}
                        isValid={isValid}
                        isInvalid={isInvalid}
                        feedback={form.errors[field.name]}
                        autoComplete={autocomplete}
                        {...controlOpts}
                    >
                        {children}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {form.errors[field.name]}
                    </Form.Control.Feedback>
                </InputGroup>

            </Form.Group>
        );
    }
    return <Field name={name}>
        {renderField}
    </Field>
}