import { gql } from 'apollo-boost';

export const SubmitOrderMutation = gql`
mutation SubmitOrder($orders: [Order_insert_input!]!, $address: [ShippingAddress_insert_input!]!, $payment: [PaymentInfo_insert_input!]!) {
  insert_ShippingAddress(objects: $address, on_conflict: {constraint: Address_owner_id_key, update_columns: lastUsed}) {
    affected_rows
  }
  insert_Order(objects: $orders) {
    affected_rows
  }
  insert_PaymentInfo(objects: $payment, on_conflict: {constraint: Paymentinfo_pkey, update_columns: lastUsed}) {
    affected_rows
  }
}
`