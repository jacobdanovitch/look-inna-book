import { gql } from 'apollo-boost';

export const SubmitAddressMutation = gql`mutation SubmitAddress($address: [final_residentialaddress_insert_input!]!){
  insert_final_residentialaddress(objects: $address) {
    affected_rows
    returning {
      residenceid
    }
  }
}
`

export const SubmitOrderMutation = gql`mutation SubmitOrder(
  $customer: [final_customer_insert_input!]!, 
  $household: [final_household_insert_input!]!, 
  $order: [final_purchase_insert_input!]!, 
  $items: [final_purchaseditem_insert_input!]!, 
  $payment: [final_paymentmethod_insert_input!]!,
  $shipment: [final_shipment_insert_input!]!,
  $cardholder: [final_cardholder_insert_input!]!
) {
  insert_final_customer(objects: $customer, on_conflict: {constraint: customer_pkey, update_columns: userid}) {
    affected_rows
  }
  insert_final_household(objects: $household) {
    affected_rows
  }
  insert_final_paymentmethod(objects: $payment) {
    affected_rows
  }
  
  insert_final_purchase(objects: $order) {
    affected_rows
  }
  insert_final_purchaseditem(objects: $items) {
    affected_rows
  }

  insert_final_shipment(objects:$shipment){
    affected_rows
  }

  insert_final_cardholder(objects:$cardholder){
    affected_rows
  }
}
`