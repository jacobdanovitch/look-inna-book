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

export type TSubmitCallback = {
    onSubmit: (values: TSchema) => void;
}