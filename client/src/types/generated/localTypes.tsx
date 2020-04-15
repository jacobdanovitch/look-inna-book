/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitOrder
// ====================================================

export interface SubmitOrder_insert_final_residentialaddress {
  __typename: "final_residentialaddress_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface SubmitOrder_insert_final_paymentmethod {
  __typename: "final_paymentmethod_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface SubmitOrder_insert_final_purchase {
  __typename: "final_purchase_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface SubmitOrder_insert_final_purchaseditem {
  __typename: "final_purchaseditem_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface SubmitOrder {
  /**
   * insert data into the table: "final.residentialaddress"
   */
  insert_final_residentialaddress: SubmitOrder_insert_final_residentialaddress | null;
  /**
   * insert data into the table: "final.paymentmethod"
   */
  insert_final_paymentmethod: SubmitOrder_insert_final_paymentmethod | null;
  /**
   * insert data into the table: "final.purchase"
   */
  insert_final_purchase: SubmitOrder_insert_final_purchase | null;
  /**
   * insert data into the table: "final.purchaseditem"
   */
  insert_final_purchaseditem: SubmitOrder_insert_final_purchaseditem | null;
}

export interface SubmitOrderVariables {
  order: final_purchase_insert_input[];
  items: final_purchaseditem_insert_input[];
  address: final_residentialaddress_insert_input[];
  payment: final_paymentmethod_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BookPageQuery
// ====================================================

export interface BookPageQuery_final_book_authors_AuthoredBook {
  __typename: "final_author";
  fullname: string | null;
}

export interface BookPageQuery_final_book_authors {
  __typename: "final_writtenby";
  /**
   * An object relationship
   */
  AuthoredBook: BookPageQuery_final_book_authors_AuthoredBook;
}

export interface BookPageQuery_final_book {
  __typename: "final_book";
  asin: any;
  category: string | null;
  coverurl: string | null;
  inventory: number | null;
  pages: number | null;
  price: any | null;
  title: string | null;
  /**
   * An array relationship
   */
  authors: BookPageQuery_final_book_authors[];
}

export interface BookPageQuery {
  /**
   * fetch data from the table: "final.book"
   */
  final_book: BookPageQuery_final_book[];
}

export interface BookPageQueryVariables {
  asin: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LastUsedInfo
// ====================================================

export interface LastUsedInfo_final_customer_cardholders_paymentmethod {
  __typename: "final_paymentmethod";
  cardnumber: any;
  cvv: any | null;
  expirationdate: any | null;
}

export interface LastUsedInfo_final_customer_cardholders {
  __typename: "final_cardholder";
  /**
   * An object relationship
   */
  paymentmethod: LastUsedInfo_final_customer_cardholders_paymentmethod;
}

export interface LastUsedInfo_final_customer_households_residentialaddress {
  __typename: "final_residentialaddress";
  city: string | null;
  country: string | null;
  postalcode: string | null;
  province: string | null;
  street: string | null;
  firstname: string | null;
  lastname: string | null;
}

export interface LastUsedInfo_final_customer_households {
  __typename: "final_household";
  /**
   * An object relationship
   */
  residentialaddress: LastUsedInfo_final_customer_households_residentialaddress;
}

export interface LastUsedInfo_final_customer {
  __typename: "final_customer";
  /**
   * An array relationship
   */
  cardholders: LastUsedInfo_final_customer_cardholders[];
  /**
   * An array relationship
   */
  households: LastUsedInfo_final_customer_households[];
}

export interface LastUsedInfo {
  /**
   * fetch data from the table: "final.customer"
   */
  final_customer: LastUsedInfo_final_customer[];
}

export interface LastUsedInfoVariables {
  user_id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFields
// ====================================================

export interface getFields___type_fields {
  __typename: "__Field";
  name: string;
  description: string | null;
}

export interface getFields___type {
  __typename: "__Type";
  fields: getFields___type_fields[] | null;
}

export interface getFields {
  __type: getFields___type | null;
}

export interface getFieldsVariables {
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStoreInfo
// ====================================================

export interface GetStoreInfo_Store {
  __typename: "Store";
  store_id: number;
  store_name: string;
}

export interface GetStoreInfo {
  /**
   * fetch data from the table: "Store"
   */
  Store: GetStoreInfo_Store[];
}

export interface GetStoreInfoVariables {
  user_id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStoreContents
// ====================================================

export interface GetStoreContents_Store {
  __typename: "Store";
  store_id: number;
  store_name: string;
}

export interface GetStoreContents_Offer_Stock {
  __typename: "Book";
  /**
   * title
   */
  title: string | null;
  /**
   * image_url
   */
  image_url: string | null;
  /**
   * category_id
   */
  category_id: string | null;
  /**
   * category
   */
  category: string | null;
  /**
   * author
   */
  author: string | null;
  /**
   * ASIN
   */
  asin: string;
}

export interface GetStoreContents_Offer {
  __typename: "Offer";
  inventory: number;
  price: any;
  /**
   * An object relationship
   */
  Stock: GetStoreContents_Offer_Stock;
}

export interface GetStoreContents {
  /**
   * fetch data from the table: "Store"
   */
  Store: GetStoreContents_Store[];
  /**
   * fetch data from the table: "Offer"
   */
  Offer: GetStoreContents_Offer[];
}

export interface GetStoreContentsVariables {
  store_id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookAttributes
// ====================================================

export interface BookAttributes_authors_AuthoredBook {
  __typename: "final_author";
  fullname: string | null;
}

export interface BookAttributes_authors {
  __typename: "final_writtenby";
  /**
   * An object relationship
   */
  AuthoredBook: BookAttributes_authors_AuthoredBook;
}

export interface BookAttributes {
  __typename: "final_book";
  asin: any;
  category: string | null;
  coverurl: string | null;
  inventory: number | null;
  pages: number | null;
  price: any | null;
  title: string | null;
  /**
   * An array relationship
   */
  authors: BookAttributes_authors[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "final.author"
 */
export enum final_author_constraint {
  author_pkey = "author_pkey",
}

/**
 * update columns of table "final.author"
 */
export enum final_author_update_column {
  authorid = "authorid",
  fullname = "fullname",
}

/**
 * unique or primary key constraints on table "final.book"
 */
export enum final_book_constraint {
  book_pkey = "book_pkey",
}

/**
 * update columns of table "final.book"
 */
export enum final_book_update_column {
  asin = "asin",
  category = "category",
  coverurl = "coverurl",
  inventory = "inventory",
  pages = "pages",
  percentagetaken = "percentagetaken",
  price = "price",
  publisherid = "publisherid",
  subcategory = "subcategory",
  title = "title",
}

/**
 * unique or primary key constraints on table "final.cardholder"
 */
export enum final_cardholder_constraint {
  cardholder_pkey = "cardholder_pkey",
}

/**
 * update columns of table "final.cardholder"
 */
export enum final_cardholder_update_column {
  cardnumber = "cardnumber",
  userid = "userid",
}

/**
 * unique or primary key constraints on table "final.customer"
 */
export enum final_customer_constraint {
  customer_pkey = "customer_pkey",
}

/**
 * update columns of table "final.customer"
 */
export enum final_customer_update_column {
  isadmin = "isadmin",
  userid = "userid",
}

/**
 * unique or primary key constraints on table "final.household"
 */
export enum final_household_constraint {
  household_pkey = "household_pkey",
}

/**
 * update columns of table "final.household"
 */
export enum final_household_update_column {
  residenceid = "residenceid",
  userid = "userid",
}

/**
 * unique or primary key constraints on table "final.paymentmethod"
 */
export enum final_paymentmethod_constraint {
  paymentmethod_pkey = "paymentmethod_pkey",
}

/**
 * update columns of table "final.paymentmethod"
 */
export enum final_paymentmethod_update_column {
  cardnumber = "cardnumber",
  cvv = "cvv",
  expirationdate = "expirationdate",
}

/**
 * unique or primary key constraints on table "final.phonenumber"
 */
export enum final_phonenumber_constraint {
  phonenumber_pkey = "phonenumber_pkey",
}

/**
 * update columns of table "final.phonenumber"
 */
export enum final_phonenumber_update_column {
  phonenumber = "phonenumber",
  publisherid = "publisherid",
}

/**
 * unique or primary key constraints on table "final.publisher"
 */
export enum final_publisher_constraint {
  publisher_pkey = "publisher_pkey",
}

/**
 * update columns of table "final.publisher"
 */
export enum final_publisher_update_column {
  bankinginformation = "bankinginformation",
  publisherid = "publisherid",
  publishername = "publishername",
  residenceid = "residenceid",
}

/**
 * unique or primary key constraints on table "final.purchase"
 */
export enum final_purchase_constraint {
  purchase_pkey = "purchase_pkey",
}

/**
 * update columns of table "final.purchase"
 */
export enum final_purchase_update_column {
  cardnumber = "cardnumber",
  orderid = "orderid",
  ordertime = "ordertime",
  userid = "userid",
}

/**
 * unique or primary key constraints on table "final.purchaseditem"
 */
export enum final_purchaseditem_constraint {
  purchaseditem_pkey = "purchaseditem_pkey",
}

/**
 * update columns of table "final.purchaseditem"
 */
export enum final_purchaseditem_update_column {
  asin = "asin",
  orderid = "orderid",
  quantity = "quantity",
}

/**
 * unique or primary key constraints on table "final.residentialaddress"
 */
export enum final_residentialaddress_constraint {
  residentialaddress_pkey = "residentialaddress_pkey",
}

/**
 * update columns of table "final.residentialaddress"
 */
export enum final_residentialaddress_update_column {
  city = "city",
  country = "country",
  firstname = "firstname",
  lastname = "lastname",
  postalcode = "postalcode",
  province = "province",
  residenceid = "residenceid",
  street = "street",
}

/**
 * unique or primary key constraints on table "final.shipment"
 */
export enum final_shipment_constraint {
  shipment_pkey = "shipment_pkey",
}

/**
 * update columns of table "final.shipment"
 */
export enum final_shipment_update_column {
  orderid = "orderid",
  residenceid = "residenceid",
  trackingid = "trackingid",
}

/**
 * unique or primary key constraints on table "final.writtenby"
 */
export enum final_writtenby_constraint {
  writtenby_pkey = "writtenby_pkey",
}

/**
 * update columns of table "final.writtenby"
 */
export enum final_writtenby_update_column {
  asin = "asin",
  authorid = "authorid",
}

/**
 * expression to compare columns of type Boolean. All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * expression to compare columns of type Int. All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * expression to compare columns of type bigint. All fields are combined with logical 'AND'.
 */
export interface bigint_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type bpchar. All fields are combined with logical 'AND'.
 */
export interface bpchar_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type date. All fields are combined with logical 'AND'.
 */
export interface date_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "final.author". All fields are combined with a logical 'AND'.
 */
export interface final_author_bool_exp {
  _and?: (final_author_bool_exp | null)[] | null;
  _not?: final_author_bool_exp | null;
  _or?: (final_author_bool_exp | null)[] | null;
  authorid?: Int_comparison_exp | null;
  fullname?: String_comparison_exp | null;
  writtenbies?: final_writtenby_bool_exp | null;
}

/**
 * input type for inserting data into table "final.author"
 */
export interface final_author_insert_input {
  authorid?: number | null;
  fullname?: string | null;
  writtenbies?: final_writtenby_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "final.author"
 */
export interface final_author_obj_rel_insert_input {
  data: final_author_insert_input;
  on_conflict?: final_author_on_conflict | null;
}

/**
 * on conflict condition type for table "final.author"
 */
export interface final_author_on_conflict {
  constraint: final_author_constraint;
  update_columns: final_author_update_column[];
  where?: final_author_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.book"
 */
export interface final_book_arr_rel_insert_input {
  data: final_book_insert_input[];
  on_conflict?: final_book_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.book". All fields are combined with a logical 'AND'.
 */
export interface final_book_bool_exp {
  _and?: (final_book_bool_exp | null)[] | null;
  _not?: final_book_bool_exp | null;
  _or?: (final_book_bool_exp | null)[] | null;
  asin?: bpchar_comparison_exp | null;
  authors?: final_writtenby_bool_exp | null;
  category?: String_comparison_exp | null;
  coverurl?: String_comparison_exp | null;
  inventory?: Int_comparison_exp | null;
  pages?: Int_comparison_exp | null;
  percentagetaken?: numeric_comparison_exp | null;
  price?: numeric_comparison_exp | null;
  publisher?: final_publisher_bool_exp | null;
  publisherid?: Int_comparison_exp | null;
  subcategory?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.book"
 */
export interface final_book_insert_input {
  asin?: any | null;
  authors?: final_writtenby_arr_rel_insert_input | null;
  category?: string | null;
  coverurl?: string | null;
  inventory?: number | null;
  pages?: number | null;
  percentagetaken?: any | null;
  price?: any | null;
  publisher?: final_publisher_obj_rel_insert_input | null;
  publisherid?: number | null;
  subcategory?: string | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "final.book"
 */
export interface final_book_obj_rel_insert_input {
  data: final_book_insert_input;
  on_conflict?: final_book_on_conflict | null;
}

/**
 * on conflict condition type for table "final.book"
 */
export interface final_book_on_conflict {
  constraint: final_book_constraint;
  update_columns: final_book_update_column[];
  where?: final_book_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.cardholder"
 */
export interface final_cardholder_arr_rel_insert_input {
  data: final_cardholder_insert_input[];
  on_conflict?: final_cardholder_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.cardholder". All fields are combined with a logical 'AND'.
 */
export interface final_cardholder_bool_exp {
  _and?: (final_cardholder_bool_exp | null)[] | null;
  _not?: final_cardholder_bool_exp | null;
  _or?: (final_cardholder_bool_exp | null)[] | null;
  cardnumber?: bpchar_comparison_exp | null;
  customer?: final_customer_bool_exp | null;
  paymentmethod?: final_paymentmethod_bool_exp | null;
  userid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.cardholder"
 */
export interface final_cardholder_insert_input {
  cardnumber?: any | null;
  customer?: final_customer_obj_rel_insert_input | null;
  paymentmethod?: final_paymentmethod_obj_rel_insert_input | null;
  userid?: string | null;
}

/**
 * on conflict condition type for table "final.cardholder"
 */
export interface final_cardholder_on_conflict {
  constraint: final_cardholder_constraint;
  update_columns: final_cardholder_update_column[];
  where?: final_cardholder_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "final.customer". All fields are combined with a logical 'AND'.
 */
export interface final_customer_bool_exp {
  _and?: (final_customer_bool_exp | null)[] | null;
  _not?: final_customer_bool_exp | null;
  _or?: (final_customer_bool_exp | null)[] | null;
  cardholders?: final_cardholder_bool_exp | null;
  households?: final_household_bool_exp | null;
  isadmin?: Boolean_comparison_exp | null;
  purchases?: final_purchase_bool_exp | null;
  userid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.customer"
 */
export interface final_customer_insert_input {
  cardholders?: final_cardholder_arr_rel_insert_input | null;
  households?: final_household_arr_rel_insert_input | null;
  isadmin?: boolean | null;
  purchases?: final_purchase_arr_rel_insert_input | null;
  userid?: string | null;
}

/**
 * input type for inserting object relation for remote table "final.customer"
 */
export interface final_customer_obj_rel_insert_input {
  data: final_customer_insert_input;
  on_conflict?: final_customer_on_conflict | null;
}

/**
 * on conflict condition type for table "final.customer"
 */
export interface final_customer_on_conflict {
  constraint: final_customer_constraint;
  update_columns: final_customer_update_column[];
  where?: final_customer_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.household"
 */
export interface final_household_arr_rel_insert_input {
  data: final_household_insert_input[];
  on_conflict?: final_household_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.household". All fields are combined with a logical 'AND'.
 */
export interface final_household_bool_exp {
  _and?: (final_household_bool_exp | null)[] | null;
  _not?: final_household_bool_exp | null;
  _or?: (final_household_bool_exp | null)[] | null;
  customer?: final_customer_bool_exp | null;
  residenceid?: Int_comparison_exp | null;
  residentialaddress?: final_residentialaddress_bool_exp | null;
  userid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.household"
 */
export interface final_household_insert_input {
  customer?: final_customer_obj_rel_insert_input | null;
  residenceid?: number | null;
  residentialaddress?: final_residentialaddress_obj_rel_insert_input | null;
  userid?: string | null;
}

/**
 * on conflict condition type for table "final.household"
 */
export interface final_household_on_conflict {
  constraint: final_household_constraint;
  update_columns: final_household_update_column[];
  where?: final_household_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "final.paymentmethod". All fields are combined with a logical 'AND'.
 */
export interface final_paymentmethod_bool_exp {
  _and?: (final_paymentmethod_bool_exp | null)[] | null;
  _not?: final_paymentmethod_bool_exp | null;
  _or?: (final_paymentmethod_bool_exp | null)[] | null;
  cardholders?: final_cardholder_bool_exp | null;
  cardnumber?: bpchar_comparison_exp | null;
  cvv?: bpchar_comparison_exp | null;
  expirationdate?: date_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.paymentmethod"
 */
export interface final_paymentmethod_insert_input {
  cardholders?: final_cardholder_arr_rel_insert_input | null;
  cardnumber?: any | null;
  cvv?: any | null;
  expirationdate?: any | null;
}

/**
 * input type for inserting object relation for remote table "final.paymentmethod"
 */
export interface final_paymentmethod_obj_rel_insert_input {
  data: final_paymentmethod_insert_input;
  on_conflict?: final_paymentmethod_on_conflict | null;
}

/**
 * on conflict condition type for table "final.paymentmethod"
 */
export interface final_paymentmethod_on_conflict {
  constraint: final_paymentmethod_constraint;
  update_columns: final_paymentmethod_update_column[];
  where?: final_paymentmethod_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.phonenumber"
 */
export interface final_phonenumber_arr_rel_insert_input {
  data: final_phonenumber_insert_input[];
  on_conflict?: final_phonenumber_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.phonenumber". All fields are combined with a logical 'AND'.
 */
export interface final_phonenumber_bool_exp {
  _and?: (final_phonenumber_bool_exp | null)[] | null;
  _not?: final_phonenumber_bool_exp | null;
  _or?: (final_phonenumber_bool_exp | null)[] | null;
  phonenumber?: String_comparison_exp | null;
  publisher?: final_publisher_bool_exp | null;
  publisherid?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.phonenumber"
 */
export interface final_phonenumber_insert_input {
  phonenumber?: string | null;
  publisher?: final_publisher_obj_rel_insert_input | null;
  publisherid?: number | null;
}

/**
 * on conflict condition type for table "final.phonenumber"
 */
export interface final_phonenumber_on_conflict {
  constraint: final_phonenumber_constraint;
  update_columns: final_phonenumber_update_column[];
  where?: final_phonenumber_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.publisher"
 */
export interface final_publisher_arr_rel_insert_input {
  data: final_publisher_insert_input[];
  on_conflict?: final_publisher_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.publisher". All fields are combined with a logical 'AND'.
 */
export interface final_publisher_bool_exp {
  _and?: (final_publisher_bool_exp | null)[] | null;
  _not?: final_publisher_bool_exp | null;
  _or?: (final_publisher_bool_exp | null)[] | null;
  bankinginformation?: String_comparison_exp | null;
  books?: final_book_bool_exp | null;
  phonenumbers?: final_phonenumber_bool_exp | null;
  publisherid?: Int_comparison_exp | null;
  publishername?: String_comparison_exp | null;
  residenceid?: Int_comparison_exp | null;
  residentialaddress?: final_residentialaddress_bool_exp | null;
}

/**
 * input type for inserting data into table "final.publisher"
 */
export interface final_publisher_insert_input {
  bankinginformation?: string | null;
  books?: final_book_arr_rel_insert_input | null;
  phonenumbers?: final_phonenumber_arr_rel_insert_input | null;
  publisherid?: number | null;
  publishername?: string | null;
  residenceid?: number | null;
  residentialaddress?: final_residentialaddress_obj_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "final.publisher"
 */
export interface final_publisher_obj_rel_insert_input {
  data: final_publisher_insert_input;
  on_conflict?: final_publisher_on_conflict | null;
}

/**
 * on conflict condition type for table "final.publisher"
 */
export interface final_publisher_on_conflict {
  constraint: final_publisher_constraint;
  update_columns: final_publisher_update_column[];
  where?: final_publisher_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.purchase"
 */
export interface final_purchase_arr_rel_insert_input {
  data: final_purchase_insert_input[];
  on_conflict?: final_purchase_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.purchase". All fields are combined with a logical 'AND'.
 */
export interface final_purchase_bool_exp {
  _and?: (final_purchase_bool_exp | null)[] | null;
  _not?: final_purchase_bool_exp | null;
  _or?: (final_purchase_bool_exp | null)[] | null;
  cardnumber?: bpchar_comparison_exp | null;
  customer?: final_customer_bool_exp | null;
  orderid?: String_comparison_exp | null;
  ordertime?: timestamp_comparison_exp | null;
  purchaseditems?: final_purchaseditem_bool_exp | null;
  shipments?: final_shipment_bool_exp | null;
  userid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.purchase"
 */
export interface final_purchase_insert_input {
  cardnumber?: any | null;
  customer?: final_customer_obj_rel_insert_input | null;
  orderid?: string | null;
  ordertime?: any | null;
  purchaseditems?: final_purchaseditem_arr_rel_insert_input | null;
  shipments?: final_shipment_arr_rel_insert_input | null;
  userid?: string | null;
}

/**
 * input type for inserting object relation for remote table "final.purchase"
 */
export interface final_purchase_obj_rel_insert_input {
  data: final_purchase_insert_input;
  on_conflict?: final_purchase_on_conflict | null;
}

/**
 * on conflict condition type for table "final.purchase"
 */
export interface final_purchase_on_conflict {
  constraint: final_purchase_constraint;
  update_columns: final_purchase_update_column[];
  where?: final_purchase_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.purchaseditem"
 */
export interface final_purchaseditem_arr_rel_insert_input {
  data: final_purchaseditem_insert_input[];
  on_conflict?: final_purchaseditem_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.purchaseditem". All fields are combined with a logical 'AND'.
 */
export interface final_purchaseditem_bool_exp {
  _and?: (final_purchaseditem_bool_exp | null)[] | null;
  _not?: final_purchaseditem_bool_exp | null;
  _or?: (final_purchaseditem_bool_exp | null)[] | null;
  asin?: bpchar_comparison_exp | null;
  orderid?: String_comparison_exp | null;
  purchase?: final_purchase_bool_exp | null;
  quantity?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.purchaseditem"
 */
export interface final_purchaseditem_insert_input {
  asin?: any | null;
  orderid?: string | null;
  purchase?: final_purchase_obj_rel_insert_input | null;
  quantity?: number | null;
}

/**
 * on conflict condition type for table "final.purchaseditem"
 */
export interface final_purchaseditem_on_conflict {
  constraint: final_purchaseditem_constraint;
  update_columns: final_purchaseditem_update_column[];
  where?: final_purchaseditem_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "final.residentialaddress". All fields are combined with a logical 'AND'.
 */
export interface final_residentialaddress_bool_exp {
  _and?: (final_residentialaddress_bool_exp | null)[] | null;
  _not?: final_residentialaddress_bool_exp | null;
  _or?: (final_residentialaddress_bool_exp | null)[] | null;
  city?: String_comparison_exp | null;
  country?: String_comparison_exp | null;
  firstname?: String_comparison_exp | null;
  households?: final_household_bool_exp | null;
  lastname?: String_comparison_exp | null;
  postalcode?: String_comparison_exp | null;
  province?: String_comparison_exp | null;
  publishers?: final_publisher_bool_exp | null;
  residenceid?: Int_comparison_exp | null;
  shipments?: final_shipment_bool_exp | null;
  street?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.residentialaddress"
 */
export interface final_residentialaddress_insert_input {
  city?: string | null;
  country?: string | null;
  firstname?: string | null;
  households?: final_household_arr_rel_insert_input | null;
  lastname?: string | null;
  postalcode?: string | null;
  province?: string | null;
  publishers?: final_publisher_arr_rel_insert_input | null;
  residenceid?: number | null;
  shipments?: final_shipment_arr_rel_insert_input | null;
  street?: string | null;
}

/**
 * input type for inserting object relation for remote table "final.residentialaddress"
 */
export interface final_residentialaddress_obj_rel_insert_input {
  data: final_residentialaddress_insert_input;
  on_conflict?: final_residentialaddress_on_conflict | null;
}

/**
 * on conflict condition type for table "final.residentialaddress"
 */
export interface final_residentialaddress_on_conflict {
  constraint: final_residentialaddress_constraint;
  update_columns: final_residentialaddress_update_column[];
  where?: final_residentialaddress_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.shipment"
 */
export interface final_shipment_arr_rel_insert_input {
  data: final_shipment_insert_input[];
  on_conflict?: final_shipment_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.shipment". All fields are combined with a logical 'AND'.
 */
export interface final_shipment_bool_exp {
  _and?: (final_shipment_bool_exp | null)[] | null;
  _not?: final_shipment_bool_exp | null;
  _or?: (final_shipment_bool_exp | null)[] | null;
  orderid?: String_comparison_exp | null;
  purchase?: final_purchase_bool_exp | null;
  residenceid?: Int_comparison_exp | null;
  residentialaddress?: final_residentialaddress_bool_exp | null;
  trackingid?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.shipment"
 */
export interface final_shipment_insert_input {
  orderid?: string | null;
  purchase?: final_purchase_obj_rel_insert_input | null;
  residenceid?: number | null;
  residentialaddress?: final_residentialaddress_obj_rel_insert_input | null;
  trackingid?: string | null;
}

/**
 * on conflict condition type for table "final.shipment"
 */
export interface final_shipment_on_conflict {
  constraint: final_shipment_constraint;
  update_columns: final_shipment_update_column[];
  where?: final_shipment_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "final.writtenby"
 */
export interface final_writtenby_arr_rel_insert_input {
  data: final_writtenby_insert_input[];
  on_conflict?: final_writtenby_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "final.writtenby". All fields are combined with a logical 'AND'.
 */
export interface final_writtenby_bool_exp {
  AuthoredBook?: final_author_bool_exp | null;
  AuthoredBy?: final_book_bool_exp | null;
  _and?: (final_writtenby_bool_exp | null)[] | null;
  _not?: final_writtenby_bool_exp | null;
  _or?: (final_writtenby_bool_exp | null)[] | null;
  asin?: String_comparison_exp | null;
  authorid?: bigint_comparison_exp | null;
}

/**
 * input type for inserting data into table "final.writtenby"
 */
export interface final_writtenby_insert_input {
  AuthoredBook?: final_author_obj_rel_insert_input | null;
  AuthoredBy?: final_book_obj_rel_insert_input | null;
  asin?: string | null;
  authorid?: any | null;
}

/**
 * on conflict condition type for table "final.writtenby"
 */
export interface final_writtenby_on_conflict {
  constraint: final_writtenby_constraint;
  update_columns: final_writtenby_update_column[];
  where?: final_writtenby_bool_exp | null;
}

/**
 * expression to compare columns of type numeric. All fields are combined with logical 'AND'.
 */
export interface numeric_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type timestamp. All fields are combined with logical 'AND'.
 */
export interface timestamp_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
