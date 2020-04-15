import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  bpchar: any;
  timestamptz: any;
  date: any;
  timestamp: any;
  bigint: any;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "Book" */
export type Book = {
   __typename?: 'Book';
  /** ASIN */
  asin: Scalars['String'];
  /** author */
  author?: Maybe<Scalars['String']>;
  /** category */
  category?: Maybe<Scalars['String']>;
  /** category_id */
  category_id?: Maybe<Scalars['String']>;
  /** filename */
  filename?: Maybe<Scalars['String']>;
  /** image_url */
  image_url?: Maybe<Scalars['String']>;
  /** title */
  title?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Book" */
export type Book_Aggregate = {
   __typename?: 'Book_aggregate';
  aggregate?: Maybe<Book_Aggregate_Fields>;
  nodes: Array<Book>;
};

/** aggregate fields of "Book" */
export type Book_Aggregate_Fields = {
   __typename?: 'Book_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Book_Max_Fields>;
  min?: Maybe<Book_Min_Fields>;
};


/** aggregate fields of "Book" */
export type Book_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Book_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Book" */
export type Book_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Book_Max_Order_By>;
  min?: Maybe<Book_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Book" */
export type Book_Arr_Rel_Insert_Input = {
  data: Array<Book_Insert_Input>;
  on_conflict?: Maybe<Book_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Book". All fields are combined with a logical 'AND'. */
export type Book_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Book_Bool_Exp>>>;
  _not?: Maybe<Book_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Book_Bool_Exp>>>;
  asin?: Maybe<String_Comparison_Exp>;
  author?: Maybe<String_Comparison_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  category_id?: Maybe<String_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Book" */
export enum Book_Constraint {
  /** unique or primary key constraint */
  BookPkey = 'Book_pkey'
}

/** input type for inserting data into table "Book" */
export type Book_Insert_Input = {
  asin?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Book_Max_Fields = {
   __typename?: 'Book_max_fields';
  asin?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Book" */
export type Book_Max_Order_By = {
  asin?: Maybe<Order_By>;
  author?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Book_Min_Fields = {
   __typename?: 'Book_min_fields';
  asin?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Book" */
export type Book_Min_Order_By = {
  asin?: Maybe<Order_By>;
  author?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "Book" */
export type Book_Mutation_Response = {
   __typename?: 'Book_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Book>;
};

/** input type for inserting object relation for remote table "Book" */
export type Book_Obj_Rel_Insert_Input = {
  data: Book_Insert_Input;
  on_conflict?: Maybe<Book_On_Conflict>;
};

/** on conflict condition type for table "Book" */
export type Book_On_Conflict = {
  constraint: Book_Constraint;
  update_columns: Array<Book_Update_Column>;
  where?: Maybe<Book_Bool_Exp>;
};

/** ordering options when selecting data from "Book" */
export type Book_Order_By = {
  asin?: Maybe<Order_By>;
  author?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "Book" */
export enum Book_Select_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Author = 'author',
  /** column name */
  Category = 'category',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Filename = 'filename',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "Book" */
export type Book_Set_Input = {
  asin?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "Book" */
export enum Book_Update_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Author = 'author',
  /** column name */
  Category = 'category',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Filename = 'filename',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Title = 'title'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};


/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "final.author" */
export type Final_Author = {
   __typename?: 'final_author';
  authorid: Scalars['Int'];
  fullname?: Maybe<Scalars['String']>;
  /** An array relationship */
  writtenbies: Array<Final_Writtenby>;
  /** An aggregated array relationship */
  writtenbies_aggregate: Final_Writtenby_Aggregate;
};


/** columns and relationships of "final.author" */
export type Final_AuthorWrittenbiesArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};


/** columns and relationships of "final.author" */
export type Final_AuthorWrittenbies_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};

/** aggregated selection of "final.author" */
export type Final_Author_Aggregate = {
   __typename?: 'final_author_aggregate';
  aggregate?: Maybe<Final_Author_Aggregate_Fields>;
  nodes: Array<Final_Author>;
};

/** aggregate fields of "final.author" */
export type Final_Author_Aggregate_Fields = {
   __typename?: 'final_author_aggregate_fields';
  avg?: Maybe<Final_Author_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Author_Max_Fields>;
  min?: Maybe<Final_Author_Min_Fields>;
  stddev?: Maybe<Final_Author_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Author_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Author_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Author_Sum_Fields>;
  var_pop?: Maybe<Final_Author_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Author_Var_Samp_Fields>;
  variance?: Maybe<Final_Author_Variance_Fields>;
};


/** aggregate fields of "final.author" */
export type Final_Author_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Author_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.author" */
export type Final_Author_Aggregate_Order_By = {
  avg?: Maybe<Final_Author_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Author_Max_Order_By>;
  min?: Maybe<Final_Author_Min_Order_By>;
  stddev?: Maybe<Final_Author_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Author_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Author_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Author_Sum_Order_By>;
  var_pop?: Maybe<Final_Author_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Author_Var_Samp_Order_By>;
  variance?: Maybe<Final_Author_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.author" */
export type Final_Author_Arr_Rel_Insert_Input = {
  data: Array<Final_Author_Insert_Input>;
  on_conflict?: Maybe<Final_Author_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Author_Avg_Fields = {
   __typename?: 'final_author_avg_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.author" */
export type Final_Author_Avg_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.author". All fields are combined with a logical 'AND'. */
export type Final_Author_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Author_Bool_Exp>>>;
  _not?: Maybe<Final_Author_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Author_Bool_Exp>>>;
  authorid?: Maybe<Int_Comparison_Exp>;
  fullname?: Maybe<String_Comparison_Exp>;
  writtenbies?: Maybe<Final_Writtenby_Bool_Exp>;
};

/** unique or primary key constraints on table "final.author" */
export enum Final_Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for incrementing integer columne in table "final.author" */
export type Final_Author_Inc_Input = {
  authorid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.author" */
export type Final_Author_Insert_Input = {
  authorid?: Maybe<Scalars['Int']>;
  fullname?: Maybe<Scalars['String']>;
  writtenbies?: Maybe<Final_Writtenby_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Final_Author_Max_Fields = {
   __typename?: 'final_author_max_fields';
  authorid?: Maybe<Scalars['Int']>;
  fullname?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.author" */
export type Final_Author_Max_Order_By = {
  authorid?: Maybe<Order_By>;
  fullname?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Author_Min_Fields = {
   __typename?: 'final_author_min_fields';
  authorid?: Maybe<Scalars['Int']>;
  fullname?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.author" */
export type Final_Author_Min_Order_By = {
  authorid?: Maybe<Order_By>;
  fullname?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.author" */
export type Final_Author_Mutation_Response = {
   __typename?: 'final_author_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Author>;
};

/** input type for inserting object relation for remote table "final.author" */
export type Final_Author_Obj_Rel_Insert_Input = {
  data: Final_Author_Insert_Input;
  on_conflict?: Maybe<Final_Author_On_Conflict>;
};

/** on conflict condition type for table "final.author" */
export type Final_Author_On_Conflict = {
  constraint: Final_Author_Constraint;
  update_columns: Array<Final_Author_Update_Column>;
  where?: Maybe<Final_Author_Bool_Exp>;
};

/** ordering options when selecting data from "final.author" */
export type Final_Author_Order_By = {
  authorid?: Maybe<Order_By>;
  fullname?: Maybe<Order_By>;
  writtenbies_aggregate?: Maybe<Final_Writtenby_Aggregate_Order_By>;
};

/** select columns of table "final.author" */
export enum Final_Author_Select_Column {
  /** column name */
  Authorid = 'authorid',
  /** column name */
  Fullname = 'fullname'
}

/** input type for updating data in table "final.author" */
export type Final_Author_Set_Input = {
  authorid?: Maybe<Scalars['Int']>;
  fullname?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Final_Author_Stddev_Fields = {
   __typename?: 'final_author_stddev_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.author" */
export type Final_Author_Stddev_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Author_Stddev_Pop_Fields = {
   __typename?: 'final_author_stddev_pop_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.author" */
export type Final_Author_Stddev_Pop_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Author_Stddev_Samp_Fields = {
   __typename?: 'final_author_stddev_samp_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.author" */
export type Final_Author_Stddev_Samp_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Author_Sum_Fields = {
   __typename?: 'final_author_sum_fields';
  authorid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.author" */
export type Final_Author_Sum_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** update columns of table "final.author" */
export enum Final_Author_Update_Column {
  /** column name */
  Authorid = 'authorid',
  /** column name */
  Fullname = 'fullname'
}

/** aggregate var_pop on columns */
export type Final_Author_Var_Pop_Fields = {
   __typename?: 'final_author_var_pop_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.author" */
export type Final_Author_Var_Pop_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Author_Var_Samp_Fields = {
   __typename?: 'final_author_var_samp_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.author" */
export type Final_Author_Var_Samp_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Author_Variance_Fields = {
   __typename?: 'final_author_variance_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.author" */
export type Final_Author_Variance_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** columns and relationships of "final.book" */
export type Final_Book = {
   __typename?: 'final_book';
  asin: Scalars['bpchar'];
  /** An array relationship */
  authors: Array<Final_Writtenby>;
  /** An aggregated array relationship */
  authors_aggregate: Final_Writtenby_Aggregate;
  category?: Maybe<Scalars['String']>;
  coverurl?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  percentagetaken?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  publisher?: Maybe<Final_Publisher>;
  publisherid?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "final.book" */
export type Final_BookAuthorsArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};


/** columns and relationships of "final.book" */
export type Final_BookAuthors_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};

/** aggregated selection of "final.book" */
export type Final_Book_Aggregate = {
   __typename?: 'final_book_aggregate';
  aggregate?: Maybe<Final_Book_Aggregate_Fields>;
  nodes: Array<Final_Book>;
};

/** aggregate fields of "final.book" */
export type Final_Book_Aggregate_Fields = {
   __typename?: 'final_book_aggregate_fields';
  avg?: Maybe<Final_Book_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Book_Max_Fields>;
  min?: Maybe<Final_Book_Min_Fields>;
  stddev?: Maybe<Final_Book_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Book_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Book_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Book_Sum_Fields>;
  var_pop?: Maybe<Final_Book_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Book_Var_Samp_Fields>;
  variance?: Maybe<Final_Book_Variance_Fields>;
};


/** aggregate fields of "final.book" */
export type Final_Book_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Book_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.book" */
export type Final_Book_Aggregate_Order_By = {
  avg?: Maybe<Final_Book_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Book_Max_Order_By>;
  min?: Maybe<Final_Book_Min_Order_By>;
  stddev?: Maybe<Final_Book_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Book_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Book_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Book_Sum_Order_By>;
  var_pop?: Maybe<Final_Book_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Book_Var_Samp_Order_By>;
  variance?: Maybe<Final_Book_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.book" */
export type Final_Book_Arr_Rel_Insert_Input = {
  data: Array<Final_Book_Insert_Input>;
  on_conflict?: Maybe<Final_Book_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Book_Avg_Fields = {
   __typename?: 'final_book_avg_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.book" */
export type Final_Book_Avg_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.book". All fields are combined with a logical 'AND'. */
export type Final_Book_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Book_Bool_Exp>>>;
  _not?: Maybe<Final_Book_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Book_Bool_Exp>>>;
  asin?: Maybe<Bpchar_Comparison_Exp>;
  authors?: Maybe<Final_Writtenby_Bool_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  coverurl?: Maybe<String_Comparison_Exp>;
  inventory?: Maybe<Int_Comparison_Exp>;
  pages?: Maybe<Int_Comparison_Exp>;
  percentagetaken?: Maybe<Numeric_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  publisher?: Maybe<Final_Publisher_Bool_Exp>;
  publisherid?: Maybe<Int_Comparison_Exp>;
  subcategory?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.book" */
export enum Final_Book_Constraint {
  /** unique or primary key constraint */
  BookPkey = 'book_pkey'
}

/** input type for incrementing integer columne in table "final.book" */
export type Final_Book_Inc_Input = {
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.book" */
export type Final_Book_Insert_Input = {
  asin?: Maybe<Scalars['bpchar']>;
  authors?: Maybe<Final_Writtenby_Arr_Rel_Insert_Input>;
  category?: Maybe<Scalars['String']>;
  coverurl?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  percentagetaken?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  publisher?: Maybe<Final_Publisher_Obj_Rel_Insert_Input>;
  publisherid?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Book_Max_Fields = {
   __typename?: 'final_book_max_fields';
  category?: Maybe<Scalars['String']>;
  coverurl?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  percentagetaken?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  publisherid?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.book" */
export type Final_Book_Max_Order_By = {
  category?: Maybe<Order_By>;
  coverurl?: Maybe<Order_By>;
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Book_Min_Fields = {
   __typename?: 'final_book_min_fields';
  category?: Maybe<Scalars['String']>;
  coverurl?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  percentagetaken?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  publisherid?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.book" */
export type Final_Book_Min_Order_By = {
  category?: Maybe<Order_By>;
  coverurl?: Maybe<Order_By>;
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.book" */
export type Final_Book_Mutation_Response = {
   __typename?: 'final_book_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Book>;
};

/** input type for inserting object relation for remote table "final.book" */
export type Final_Book_Obj_Rel_Insert_Input = {
  data: Final_Book_Insert_Input;
  on_conflict?: Maybe<Final_Book_On_Conflict>;
};

/** on conflict condition type for table "final.book" */
export type Final_Book_On_Conflict = {
  constraint: Final_Book_Constraint;
  update_columns: Array<Final_Book_Update_Column>;
  where?: Maybe<Final_Book_Bool_Exp>;
};

/** ordering options when selecting data from "final.book" */
export type Final_Book_Order_By = {
  asin?: Maybe<Order_By>;
  authors_aggregate?: Maybe<Final_Writtenby_Aggregate_Order_By>;
  category?: Maybe<Order_By>;
  coverurl?: Maybe<Order_By>;
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisher?: Maybe<Final_Publisher_Order_By>;
  publisherid?: Maybe<Order_By>;
  subcategory?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** select columns of table "final.book" */
export enum Final_Book_Select_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Category = 'category',
  /** column name */
  Coverurl = 'coverurl',
  /** column name */
  Inventory = 'inventory',
  /** column name */
  Pages = 'pages',
  /** column name */
  Percentagetaken = 'percentagetaken',
  /** column name */
  Price = 'price',
  /** column name */
  Publisherid = 'publisherid',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "final.book" */
export type Final_Book_Set_Input = {
  asin?: Maybe<Scalars['bpchar']>;
  category?: Maybe<Scalars['String']>;
  coverurl?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  percentagetaken?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  publisherid?: Maybe<Scalars['Int']>;
  subcategory?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Final_Book_Stddev_Fields = {
   __typename?: 'final_book_stddev_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.book" */
export type Final_Book_Stddev_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Book_Stddev_Pop_Fields = {
   __typename?: 'final_book_stddev_pop_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.book" */
export type Final_Book_Stddev_Pop_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Book_Stddev_Samp_Fields = {
   __typename?: 'final_book_stddev_samp_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.book" */
export type Final_Book_Stddev_Samp_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Book_Sum_Fields = {
   __typename?: 'final_book_sum_fields';
  inventory?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  percentagetaken?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.book" */
export type Final_Book_Sum_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** update columns of table "final.book" */
export enum Final_Book_Update_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Category = 'category',
  /** column name */
  Coverurl = 'coverurl',
  /** column name */
  Inventory = 'inventory',
  /** column name */
  Pages = 'pages',
  /** column name */
  Percentagetaken = 'percentagetaken',
  /** column name */
  Price = 'price',
  /** column name */
  Publisherid = 'publisherid',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Final_Book_Var_Pop_Fields = {
   __typename?: 'final_book_var_pop_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.book" */
export type Final_Book_Var_Pop_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Book_Var_Samp_Fields = {
   __typename?: 'final_book_var_samp_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.book" */
export type Final_Book_Var_Samp_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Book_Variance_Fields = {
   __typename?: 'final_book_variance_fields';
  inventory?: Maybe<Scalars['Float']>;
  pages?: Maybe<Scalars['Float']>;
  percentagetaken?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.book" */
export type Final_Book_Variance_Order_By = {
  inventory?: Maybe<Order_By>;
  pages?: Maybe<Order_By>;
  percentagetaken?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** columns and relationships of "final.cardholder" */
export type Final_Cardholder = {
   __typename?: 'final_cardholder';
  cardnumber: Scalars['bpchar'];
  /** An object relationship */
  customer: Final_Customer;
  /** An object relationship */
  paymentmethod: Final_Paymentmethod;
  userid: Scalars['String'];
};

/** aggregated selection of "final.cardholder" */
export type Final_Cardholder_Aggregate = {
   __typename?: 'final_cardholder_aggregate';
  aggregate?: Maybe<Final_Cardholder_Aggregate_Fields>;
  nodes: Array<Final_Cardholder>;
};

/** aggregate fields of "final.cardholder" */
export type Final_Cardholder_Aggregate_Fields = {
   __typename?: 'final_cardholder_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Cardholder_Max_Fields>;
  min?: Maybe<Final_Cardholder_Min_Fields>;
};


/** aggregate fields of "final.cardholder" */
export type Final_Cardholder_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Cardholder_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.cardholder" */
export type Final_Cardholder_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Cardholder_Max_Order_By>;
  min?: Maybe<Final_Cardholder_Min_Order_By>;
};

/** input type for inserting array relation for remote table "final.cardholder" */
export type Final_Cardholder_Arr_Rel_Insert_Input = {
  data: Array<Final_Cardholder_Insert_Input>;
  on_conflict?: Maybe<Final_Cardholder_On_Conflict>;
};

/** Boolean expression to filter rows from the table "final.cardholder". All fields are combined with a logical 'AND'. */
export type Final_Cardholder_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Cardholder_Bool_Exp>>>;
  _not?: Maybe<Final_Cardholder_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Cardholder_Bool_Exp>>>;
  cardnumber?: Maybe<Bpchar_Comparison_Exp>;
  customer?: Maybe<Final_Customer_Bool_Exp>;
  paymentmethod?: Maybe<Final_Paymentmethod_Bool_Exp>;
  userid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.cardholder" */
export enum Final_Cardholder_Constraint {
  /** unique or primary key constraint */
  CardholderPkey = 'cardholder_pkey'
}

/** input type for inserting data into table "final.cardholder" */
export type Final_Cardholder_Insert_Input = {
  cardnumber?: Maybe<Scalars['bpchar']>;
  customer?: Maybe<Final_Customer_Obj_Rel_Insert_Input>;
  paymentmethod?: Maybe<Final_Paymentmethod_Obj_Rel_Insert_Input>;
  userid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Cardholder_Max_Fields = {
   __typename?: 'final_cardholder_max_fields';
  userid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.cardholder" */
export type Final_Cardholder_Max_Order_By = {
  userid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Cardholder_Min_Fields = {
   __typename?: 'final_cardholder_min_fields';
  userid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.cardholder" */
export type Final_Cardholder_Min_Order_By = {
  userid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.cardholder" */
export type Final_Cardholder_Mutation_Response = {
   __typename?: 'final_cardholder_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Cardholder>;
};

/** input type for inserting object relation for remote table "final.cardholder" */
export type Final_Cardholder_Obj_Rel_Insert_Input = {
  data: Final_Cardholder_Insert_Input;
  on_conflict?: Maybe<Final_Cardholder_On_Conflict>;
};

/** on conflict condition type for table "final.cardholder" */
export type Final_Cardholder_On_Conflict = {
  constraint: Final_Cardholder_Constraint;
  update_columns: Array<Final_Cardholder_Update_Column>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};

/** ordering options when selecting data from "final.cardholder" */
export type Final_Cardholder_Order_By = {
  cardnumber?: Maybe<Order_By>;
  customer?: Maybe<Final_Customer_Order_By>;
  paymentmethod?: Maybe<Final_Paymentmethod_Order_By>;
  userid?: Maybe<Order_By>;
};

/** select columns of table "final.cardholder" */
export enum Final_Cardholder_Select_Column {
  /** column name */
  Cardnumber = 'cardnumber',
  /** column name */
  Userid = 'userid'
}

/** input type for updating data in table "final.cardholder" */
export type Final_Cardholder_Set_Input = {
  cardnumber?: Maybe<Scalars['bpchar']>;
  userid?: Maybe<Scalars['String']>;
};

/** update columns of table "final.cardholder" */
export enum Final_Cardholder_Update_Column {
  /** column name */
  Cardnumber = 'cardnumber',
  /** column name */
  Userid = 'userid'
}

/** columns and relationships of "final.customer" */
export type Final_Customer = {
   __typename?: 'final_customer';
  /** An array relationship */
  cardholders: Array<Final_Cardholder>;
  /** An aggregated array relationship */
  cardholders_aggregate: Final_Cardholder_Aggregate;
  /** An array relationship */
  households: Array<Final_Household>;
  /** An aggregated array relationship */
  households_aggregate: Final_Household_Aggregate;
  isadmin?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  purchases: Array<Final_Purchase>;
  /** An aggregated array relationship */
  purchases_aggregate: Final_Purchase_Aggregate;
  userid: Scalars['String'];
};


/** columns and relationships of "final.customer" */
export type Final_CustomerCardholdersArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** columns and relationships of "final.customer" */
export type Final_CustomerCardholders_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** columns and relationships of "final.customer" */
export type Final_CustomerHouseholdsArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** columns and relationships of "final.customer" */
export type Final_CustomerHouseholds_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** columns and relationships of "final.customer" */
export type Final_CustomerPurchasesArgs = {
  distinct_on?: Maybe<Array<Final_Purchase_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchase_Order_By>>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};


/** columns and relationships of "final.customer" */
export type Final_CustomerPurchases_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Purchase_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchase_Order_By>>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};

/** aggregated selection of "final.customer" */
export type Final_Customer_Aggregate = {
   __typename?: 'final_customer_aggregate';
  aggregate?: Maybe<Final_Customer_Aggregate_Fields>;
  nodes: Array<Final_Customer>;
};

/** aggregate fields of "final.customer" */
export type Final_Customer_Aggregate_Fields = {
   __typename?: 'final_customer_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Customer_Max_Fields>;
  min?: Maybe<Final_Customer_Min_Fields>;
};


/** aggregate fields of "final.customer" */
export type Final_Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.customer" */
export type Final_Customer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Customer_Max_Order_By>;
  min?: Maybe<Final_Customer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "final.customer" */
export type Final_Customer_Arr_Rel_Insert_Input = {
  data: Array<Final_Customer_Insert_Input>;
  on_conflict?: Maybe<Final_Customer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "final.customer". All fields are combined with a logical 'AND'. */
export type Final_Customer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Customer_Bool_Exp>>>;
  _not?: Maybe<Final_Customer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Customer_Bool_Exp>>>;
  cardholders?: Maybe<Final_Cardholder_Bool_Exp>;
  households?: Maybe<Final_Household_Bool_Exp>;
  isadmin?: Maybe<Boolean_Comparison_Exp>;
  purchases?: Maybe<Final_Purchase_Bool_Exp>;
  userid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.customer" */
export enum Final_Customer_Constraint {
  /** unique or primary key constraint */
  CustomerPkey = 'customer_pkey'
}

/** input type for inserting data into table "final.customer" */
export type Final_Customer_Insert_Input = {
  cardholders?: Maybe<Final_Cardholder_Arr_Rel_Insert_Input>;
  households?: Maybe<Final_Household_Arr_Rel_Insert_Input>;
  isadmin?: Maybe<Scalars['Boolean']>;
  purchases?: Maybe<Final_Purchase_Arr_Rel_Insert_Input>;
  userid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Customer_Max_Fields = {
   __typename?: 'final_customer_max_fields';
  userid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.customer" */
export type Final_Customer_Max_Order_By = {
  userid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Customer_Min_Fields = {
   __typename?: 'final_customer_min_fields';
  userid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.customer" */
export type Final_Customer_Min_Order_By = {
  userid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.customer" */
export type Final_Customer_Mutation_Response = {
   __typename?: 'final_customer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Customer>;
};

/** input type for inserting object relation for remote table "final.customer" */
export type Final_Customer_Obj_Rel_Insert_Input = {
  data: Final_Customer_Insert_Input;
  on_conflict?: Maybe<Final_Customer_On_Conflict>;
};

/** on conflict condition type for table "final.customer" */
export type Final_Customer_On_Conflict = {
  constraint: Final_Customer_Constraint;
  update_columns: Array<Final_Customer_Update_Column>;
  where?: Maybe<Final_Customer_Bool_Exp>;
};

/** ordering options when selecting data from "final.customer" */
export type Final_Customer_Order_By = {
  cardholders_aggregate?: Maybe<Final_Cardholder_Aggregate_Order_By>;
  households_aggregate?: Maybe<Final_Household_Aggregate_Order_By>;
  isadmin?: Maybe<Order_By>;
  purchases_aggregate?: Maybe<Final_Purchase_Aggregate_Order_By>;
  userid?: Maybe<Order_By>;
};

/** select columns of table "final.customer" */
export enum Final_Customer_Select_Column {
  /** column name */
  Isadmin = 'isadmin',
  /** column name */
  Userid = 'userid'
}

/** input type for updating data in table "final.customer" */
export type Final_Customer_Set_Input = {
  isadmin?: Maybe<Scalars['Boolean']>;
  userid?: Maybe<Scalars['String']>;
};

/** update columns of table "final.customer" */
export enum Final_Customer_Update_Column {
  /** column name */
  Isadmin = 'isadmin',
  /** column name */
  Userid = 'userid'
}

/** columns and relationships of "final.household" */
export type Final_Household = {
   __typename?: 'final_household';
  /** An object relationship */
  customer: Final_Customer;
  residenceid: Scalars['Int'];
  /** An object relationship */
  residentialaddress: Final_Residentialaddress;
  userid: Scalars['String'];
};

/** aggregated selection of "final.household" */
export type Final_Household_Aggregate = {
   __typename?: 'final_household_aggregate';
  aggregate?: Maybe<Final_Household_Aggregate_Fields>;
  nodes: Array<Final_Household>;
};

/** aggregate fields of "final.household" */
export type Final_Household_Aggregate_Fields = {
   __typename?: 'final_household_aggregate_fields';
  avg?: Maybe<Final_Household_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Household_Max_Fields>;
  min?: Maybe<Final_Household_Min_Fields>;
  stddev?: Maybe<Final_Household_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Household_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Household_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Household_Sum_Fields>;
  var_pop?: Maybe<Final_Household_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Household_Var_Samp_Fields>;
  variance?: Maybe<Final_Household_Variance_Fields>;
};


/** aggregate fields of "final.household" */
export type Final_Household_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Household_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.household" */
export type Final_Household_Aggregate_Order_By = {
  avg?: Maybe<Final_Household_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Household_Max_Order_By>;
  min?: Maybe<Final_Household_Min_Order_By>;
  stddev?: Maybe<Final_Household_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Household_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Household_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Household_Sum_Order_By>;
  var_pop?: Maybe<Final_Household_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Household_Var_Samp_Order_By>;
  variance?: Maybe<Final_Household_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.household" */
export type Final_Household_Arr_Rel_Insert_Input = {
  data: Array<Final_Household_Insert_Input>;
  on_conflict?: Maybe<Final_Household_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Household_Avg_Fields = {
   __typename?: 'final_household_avg_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.household" */
export type Final_Household_Avg_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.household". All fields are combined with a logical 'AND'. */
export type Final_Household_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Household_Bool_Exp>>>;
  _not?: Maybe<Final_Household_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Household_Bool_Exp>>>;
  customer?: Maybe<Final_Customer_Bool_Exp>;
  residenceid?: Maybe<Int_Comparison_Exp>;
  residentialaddress?: Maybe<Final_Residentialaddress_Bool_Exp>;
  userid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.household" */
export enum Final_Household_Constraint {
  /** unique or primary key constraint */
  HouseholdPkey = 'household_pkey'
}

/** input type for incrementing integer columne in table "final.household" */
export type Final_Household_Inc_Input = {
  residenceid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.household" */
export type Final_Household_Insert_Input = {
  customer?: Maybe<Final_Customer_Obj_Rel_Insert_Input>;
  residenceid?: Maybe<Scalars['Int']>;
  residentialaddress?: Maybe<Final_Residentialaddress_Obj_Rel_Insert_Input>;
  userid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Household_Max_Fields = {
   __typename?: 'final_household_max_fields';
  residenceid?: Maybe<Scalars['Int']>;
  userid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.household" */
export type Final_Household_Max_Order_By = {
  residenceid?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Household_Min_Fields = {
   __typename?: 'final_household_min_fields';
  residenceid?: Maybe<Scalars['Int']>;
  userid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.household" */
export type Final_Household_Min_Order_By = {
  residenceid?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.household" */
export type Final_Household_Mutation_Response = {
   __typename?: 'final_household_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Household>;
};

/** input type for inserting object relation for remote table "final.household" */
export type Final_Household_Obj_Rel_Insert_Input = {
  data: Final_Household_Insert_Input;
  on_conflict?: Maybe<Final_Household_On_Conflict>;
};

/** on conflict condition type for table "final.household" */
export type Final_Household_On_Conflict = {
  constraint: Final_Household_Constraint;
  update_columns: Array<Final_Household_Update_Column>;
  where?: Maybe<Final_Household_Bool_Exp>;
};

/** ordering options when selecting data from "final.household" */
export type Final_Household_Order_By = {
  customer?: Maybe<Final_Customer_Order_By>;
  residenceid?: Maybe<Order_By>;
  residentialaddress?: Maybe<Final_Residentialaddress_Order_By>;
  userid?: Maybe<Order_By>;
};

/** select columns of table "final.household" */
export enum Final_Household_Select_Column {
  /** column name */
  Residenceid = 'residenceid',
  /** column name */
  Userid = 'userid'
}

/** input type for updating data in table "final.household" */
export type Final_Household_Set_Input = {
  residenceid?: Maybe<Scalars['Int']>;
  userid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Final_Household_Stddev_Fields = {
   __typename?: 'final_household_stddev_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.household" */
export type Final_Household_Stddev_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Household_Stddev_Pop_Fields = {
   __typename?: 'final_household_stddev_pop_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.household" */
export type Final_Household_Stddev_Pop_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Household_Stddev_Samp_Fields = {
   __typename?: 'final_household_stddev_samp_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.household" */
export type Final_Household_Stddev_Samp_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Household_Sum_Fields = {
   __typename?: 'final_household_sum_fields';
  residenceid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.household" */
export type Final_Household_Sum_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** update columns of table "final.household" */
export enum Final_Household_Update_Column {
  /** column name */
  Residenceid = 'residenceid',
  /** column name */
  Userid = 'userid'
}

/** aggregate var_pop on columns */
export type Final_Household_Var_Pop_Fields = {
   __typename?: 'final_household_var_pop_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.household" */
export type Final_Household_Var_Pop_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Household_Var_Samp_Fields = {
   __typename?: 'final_household_var_samp_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.household" */
export type Final_Household_Var_Samp_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Household_Variance_Fields = {
   __typename?: 'final_household_variance_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.household" */
export type Final_Household_Variance_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** columns and relationships of "final.paymentmethod" */
export type Final_Paymentmethod = {
   __typename?: 'final_paymentmethod';
  /** An array relationship */
  cardholders: Array<Final_Cardholder>;
  /** An aggregated array relationship */
  cardholders_aggregate: Final_Cardholder_Aggregate;
  cardnumber: Scalars['bpchar'];
  cvv?: Maybe<Scalars['bpchar']>;
  expirationdate?: Maybe<Scalars['date']>;
};


/** columns and relationships of "final.paymentmethod" */
export type Final_PaymentmethodCardholdersArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** columns and relationships of "final.paymentmethod" */
export type Final_PaymentmethodCardholders_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};

/** aggregated selection of "final.paymentmethod" */
export type Final_Paymentmethod_Aggregate = {
   __typename?: 'final_paymentmethod_aggregate';
  aggregate?: Maybe<Final_Paymentmethod_Aggregate_Fields>;
  nodes: Array<Final_Paymentmethod>;
};

/** aggregate fields of "final.paymentmethod" */
export type Final_Paymentmethod_Aggregate_Fields = {
   __typename?: 'final_paymentmethod_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Paymentmethod_Max_Fields>;
  min?: Maybe<Final_Paymentmethod_Min_Fields>;
};


/** aggregate fields of "final.paymentmethod" */
export type Final_Paymentmethod_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Paymentmethod_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.paymentmethod" */
export type Final_Paymentmethod_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Paymentmethod_Max_Order_By>;
  min?: Maybe<Final_Paymentmethod_Min_Order_By>;
};

/** input type for inserting array relation for remote table "final.paymentmethod" */
export type Final_Paymentmethod_Arr_Rel_Insert_Input = {
  data: Array<Final_Paymentmethod_Insert_Input>;
  on_conflict?: Maybe<Final_Paymentmethod_On_Conflict>;
};

/** Boolean expression to filter rows from the table "final.paymentmethod". All fields are combined with a logical 'AND'. */
export type Final_Paymentmethod_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Paymentmethod_Bool_Exp>>>;
  _not?: Maybe<Final_Paymentmethod_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Paymentmethod_Bool_Exp>>>;
  cardholders?: Maybe<Final_Cardholder_Bool_Exp>;
  cardnumber?: Maybe<Bpchar_Comparison_Exp>;
  cvv?: Maybe<Bpchar_Comparison_Exp>;
  expirationdate?: Maybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.paymentmethod" */
export enum Final_Paymentmethod_Constraint {
  /** unique or primary key constraint */
  PaymentmethodPkey = 'paymentmethod_pkey'
}

/** input type for inserting data into table "final.paymentmethod" */
export type Final_Paymentmethod_Insert_Input = {
  cardholders?: Maybe<Final_Cardholder_Arr_Rel_Insert_Input>;
  cardnumber?: Maybe<Scalars['bpchar']>;
  cvv?: Maybe<Scalars['bpchar']>;
  expirationdate?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Final_Paymentmethod_Max_Fields = {
   __typename?: 'final_paymentmethod_max_fields';
  expirationdate?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "final.paymentmethod" */
export type Final_Paymentmethod_Max_Order_By = {
  expirationdate?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Paymentmethod_Min_Fields = {
   __typename?: 'final_paymentmethod_min_fields';
  expirationdate?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "final.paymentmethod" */
export type Final_Paymentmethod_Min_Order_By = {
  expirationdate?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.paymentmethod" */
export type Final_Paymentmethod_Mutation_Response = {
   __typename?: 'final_paymentmethod_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Paymentmethod>;
};

/** input type for inserting object relation for remote table "final.paymentmethod" */
export type Final_Paymentmethod_Obj_Rel_Insert_Input = {
  data: Final_Paymentmethod_Insert_Input;
  on_conflict?: Maybe<Final_Paymentmethod_On_Conflict>;
};

/** on conflict condition type for table "final.paymentmethod" */
export type Final_Paymentmethod_On_Conflict = {
  constraint: Final_Paymentmethod_Constraint;
  update_columns: Array<Final_Paymentmethod_Update_Column>;
  where?: Maybe<Final_Paymentmethod_Bool_Exp>;
};

/** ordering options when selecting data from "final.paymentmethod" */
export type Final_Paymentmethod_Order_By = {
  cardholders_aggregate?: Maybe<Final_Cardholder_Aggregate_Order_By>;
  cardnumber?: Maybe<Order_By>;
  cvv?: Maybe<Order_By>;
  expirationdate?: Maybe<Order_By>;
};

/** select columns of table "final.paymentmethod" */
export enum Final_Paymentmethod_Select_Column {
  /** column name */
  Cardnumber = 'cardnumber',
  /** column name */
  Cvv = 'cvv',
  /** column name */
  Expirationdate = 'expirationdate'
}

/** input type for updating data in table "final.paymentmethod" */
export type Final_Paymentmethod_Set_Input = {
  cardnumber?: Maybe<Scalars['bpchar']>;
  cvv?: Maybe<Scalars['bpchar']>;
  expirationdate?: Maybe<Scalars['date']>;
};

/** update columns of table "final.paymentmethod" */
export enum Final_Paymentmethod_Update_Column {
  /** column name */
  Cardnumber = 'cardnumber',
  /** column name */
  Cvv = 'cvv',
  /** column name */
  Expirationdate = 'expirationdate'
}

/** columns and relationships of "final.phonenumber" */
export type Final_Phonenumber = {
   __typename?: 'final_phonenumber';
  phonenumber: Scalars['String'];
  /** An object relationship */
  publisher?: Maybe<Final_Publisher>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "final.phonenumber" */
export type Final_Phonenumber_Aggregate = {
   __typename?: 'final_phonenumber_aggregate';
  aggregate?: Maybe<Final_Phonenumber_Aggregate_Fields>;
  nodes: Array<Final_Phonenumber>;
};

/** aggregate fields of "final.phonenumber" */
export type Final_Phonenumber_Aggregate_Fields = {
   __typename?: 'final_phonenumber_aggregate_fields';
  avg?: Maybe<Final_Phonenumber_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Phonenumber_Max_Fields>;
  min?: Maybe<Final_Phonenumber_Min_Fields>;
  stddev?: Maybe<Final_Phonenumber_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Phonenumber_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Phonenumber_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Phonenumber_Sum_Fields>;
  var_pop?: Maybe<Final_Phonenumber_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Phonenumber_Var_Samp_Fields>;
  variance?: Maybe<Final_Phonenumber_Variance_Fields>;
};


/** aggregate fields of "final.phonenumber" */
export type Final_Phonenumber_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.phonenumber" */
export type Final_Phonenumber_Aggregate_Order_By = {
  avg?: Maybe<Final_Phonenumber_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Phonenumber_Max_Order_By>;
  min?: Maybe<Final_Phonenumber_Min_Order_By>;
  stddev?: Maybe<Final_Phonenumber_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Phonenumber_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Phonenumber_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Phonenumber_Sum_Order_By>;
  var_pop?: Maybe<Final_Phonenumber_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Phonenumber_Var_Samp_Order_By>;
  variance?: Maybe<Final_Phonenumber_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.phonenumber" */
export type Final_Phonenumber_Arr_Rel_Insert_Input = {
  data: Array<Final_Phonenumber_Insert_Input>;
  on_conflict?: Maybe<Final_Phonenumber_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Phonenumber_Avg_Fields = {
   __typename?: 'final_phonenumber_avg_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Avg_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.phonenumber". All fields are combined with a logical 'AND'. */
export type Final_Phonenumber_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Phonenumber_Bool_Exp>>>;
  _not?: Maybe<Final_Phonenumber_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Phonenumber_Bool_Exp>>>;
  phonenumber?: Maybe<String_Comparison_Exp>;
  publisher?: Maybe<Final_Publisher_Bool_Exp>;
  publisherid?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.phonenumber" */
export enum Final_Phonenumber_Constraint {
  /** unique or primary key constraint */
  PhonenumberPkey = 'phonenumber_pkey'
}

/** input type for incrementing integer columne in table "final.phonenumber" */
export type Final_Phonenumber_Inc_Input = {
  publisherid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.phonenumber" */
export type Final_Phonenumber_Insert_Input = {
  phonenumber?: Maybe<Scalars['String']>;
  publisher?: Maybe<Final_Publisher_Obj_Rel_Insert_Input>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Final_Phonenumber_Max_Fields = {
   __typename?: 'final_phonenumber_max_fields';
  phonenumber?: Maybe<Scalars['String']>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Max_Order_By = {
  phonenumber?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Phonenumber_Min_Fields = {
   __typename?: 'final_phonenumber_min_fields';
  phonenumber?: Maybe<Scalars['String']>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Min_Order_By = {
  phonenumber?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.phonenumber" */
export type Final_Phonenumber_Mutation_Response = {
   __typename?: 'final_phonenumber_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Phonenumber>;
};

/** input type for inserting object relation for remote table "final.phonenumber" */
export type Final_Phonenumber_Obj_Rel_Insert_Input = {
  data: Final_Phonenumber_Insert_Input;
  on_conflict?: Maybe<Final_Phonenumber_On_Conflict>;
};

/** on conflict condition type for table "final.phonenumber" */
export type Final_Phonenumber_On_Conflict = {
  constraint: Final_Phonenumber_Constraint;
  update_columns: Array<Final_Phonenumber_Update_Column>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};

/** ordering options when selecting data from "final.phonenumber" */
export type Final_Phonenumber_Order_By = {
  phonenumber?: Maybe<Order_By>;
  publisher?: Maybe<Final_Publisher_Order_By>;
  publisherid?: Maybe<Order_By>;
};

/** select columns of table "final.phonenumber" */
export enum Final_Phonenumber_Select_Column {
  /** column name */
  Phonenumber = 'phonenumber',
  /** column name */
  Publisherid = 'publisherid'
}

/** input type for updating data in table "final.phonenumber" */
export type Final_Phonenumber_Set_Input = {
  phonenumber?: Maybe<Scalars['String']>;
  publisherid?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Final_Phonenumber_Stddev_Fields = {
   __typename?: 'final_phonenumber_stddev_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Stddev_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Phonenumber_Stddev_Pop_Fields = {
   __typename?: 'final_phonenumber_stddev_pop_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Stddev_Pop_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Phonenumber_Stddev_Samp_Fields = {
   __typename?: 'final_phonenumber_stddev_samp_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Stddev_Samp_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Phonenumber_Sum_Fields = {
   __typename?: 'final_phonenumber_sum_fields';
  publisherid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Sum_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** update columns of table "final.phonenumber" */
export enum Final_Phonenumber_Update_Column {
  /** column name */
  Phonenumber = 'phonenumber',
  /** column name */
  Publisherid = 'publisherid'
}

/** aggregate var_pop on columns */
export type Final_Phonenumber_Var_Pop_Fields = {
   __typename?: 'final_phonenumber_var_pop_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Var_Pop_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Phonenumber_Var_Samp_Fields = {
   __typename?: 'final_phonenumber_var_samp_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Var_Samp_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Phonenumber_Variance_Fields = {
   __typename?: 'final_phonenumber_variance_fields';
  publisherid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.phonenumber" */
export type Final_Phonenumber_Variance_Order_By = {
  publisherid?: Maybe<Order_By>;
};

/** columns and relationships of "final.publisher" */
export type Final_Publisher = {
   __typename?: 'final_publisher';
  bankinginformation?: Maybe<Scalars['String']>;
  /** An array relationship */
  books: Array<Final_Book>;
  /** An aggregated array relationship */
  books_aggregate: Final_Book_Aggregate;
  /** An array relationship */
  phonenumbers: Array<Final_Phonenumber>;
  /** An aggregated array relationship */
  phonenumbers_aggregate: Final_Phonenumber_Aggregate;
  publisherid: Scalars['Int'];
  publishername?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  /** An object relationship */
  residentialaddress?: Maybe<Final_Residentialaddress>;
};


/** columns and relationships of "final.publisher" */
export type Final_PublisherBooksArgs = {
  distinct_on?: Maybe<Array<Final_Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Book_Order_By>>;
  where?: Maybe<Final_Book_Bool_Exp>;
};


/** columns and relationships of "final.publisher" */
export type Final_PublisherBooks_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Book_Order_By>>;
  where?: Maybe<Final_Book_Bool_Exp>;
};


/** columns and relationships of "final.publisher" */
export type Final_PublisherPhonenumbersArgs = {
  distinct_on?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Phonenumber_Order_By>>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};


/** columns and relationships of "final.publisher" */
export type Final_PublisherPhonenumbers_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Phonenumber_Order_By>>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};

/** aggregated selection of "final.publisher" */
export type Final_Publisher_Aggregate = {
   __typename?: 'final_publisher_aggregate';
  aggregate?: Maybe<Final_Publisher_Aggregate_Fields>;
  nodes: Array<Final_Publisher>;
};

/** aggregate fields of "final.publisher" */
export type Final_Publisher_Aggregate_Fields = {
   __typename?: 'final_publisher_aggregate_fields';
  avg?: Maybe<Final_Publisher_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Publisher_Max_Fields>;
  min?: Maybe<Final_Publisher_Min_Fields>;
  stddev?: Maybe<Final_Publisher_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Publisher_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Publisher_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Publisher_Sum_Fields>;
  var_pop?: Maybe<Final_Publisher_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Publisher_Var_Samp_Fields>;
  variance?: Maybe<Final_Publisher_Variance_Fields>;
};


/** aggregate fields of "final.publisher" */
export type Final_Publisher_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Publisher_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.publisher" */
export type Final_Publisher_Aggregate_Order_By = {
  avg?: Maybe<Final_Publisher_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Publisher_Max_Order_By>;
  min?: Maybe<Final_Publisher_Min_Order_By>;
  stddev?: Maybe<Final_Publisher_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Publisher_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Publisher_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Publisher_Sum_Order_By>;
  var_pop?: Maybe<Final_Publisher_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Publisher_Var_Samp_Order_By>;
  variance?: Maybe<Final_Publisher_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.publisher" */
export type Final_Publisher_Arr_Rel_Insert_Input = {
  data: Array<Final_Publisher_Insert_Input>;
  on_conflict?: Maybe<Final_Publisher_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Publisher_Avg_Fields = {
   __typename?: 'final_publisher_avg_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.publisher" */
export type Final_Publisher_Avg_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.publisher". All fields are combined with a logical 'AND'. */
export type Final_Publisher_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Publisher_Bool_Exp>>>;
  _not?: Maybe<Final_Publisher_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Publisher_Bool_Exp>>>;
  bankinginformation?: Maybe<String_Comparison_Exp>;
  books?: Maybe<Final_Book_Bool_Exp>;
  phonenumbers?: Maybe<Final_Phonenumber_Bool_Exp>;
  publisherid?: Maybe<Int_Comparison_Exp>;
  publishername?: Maybe<String_Comparison_Exp>;
  residenceid?: Maybe<Int_Comparison_Exp>;
  residentialaddress?: Maybe<Final_Residentialaddress_Bool_Exp>;
};

/** unique or primary key constraints on table "final.publisher" */
export enum Final_Publisher_Constraint {
  /** unique or primary key constraint */
  PublisherPkey = 'publisher_pkey'
}

/** input type for incrementing integer columne in table "final.publisher" */
export type Final_Publisher_Inc_Input = {
  publisherid?: Maybe<Scalars['Int']>;
  residenceid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.publisher" */
export type Final_Publisher_Insert_Input = {
  bankinginformation?: Maybe<Scalars['String']>;
  books?: Maybe<Final_Book_Arr_Rel_Insert_Input>;
  phonenumbers?: Maybe<Final_Phonenumber_Arr_Rel_Insert_Input>;
  publisherid?: Maybe<Scalars['Int']>;
  publishername?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  residentialaddress?: Maybe<Final_Residentialaddress_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Final_Publisher_Max_Fields = {
   __typename?: 'final_publisher_max_fields';
  bankinginformation?: Maybe<Scalars['String']>;
  publisherid?: Maybe<Scalars['Int']>;
  publishername?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "final.publisher" */
export type Final_Publisher_Max_Order_By = {
  bankinginformation?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
  publishername?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Publisher_Min_Fields = {
   __typename?: 'final_publisher_min_fields';
  bankinginformation?: Maybe<Scalars['String']>;
  publisherid?: Maybe<Scalars['Int']>;
  publishername?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "final.publisher" */
export type Final_Publisher_Min_Order_By = {
  bankinginformation?: Maybe<Order_By>;
  publisherid?: Maybe<Order_By>;
  publishername?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.publisher" */
export type Final_Publisher_Mutation_Response = {
   __typename?: 'final_publisher_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Publisher>;
};

/** input type for inserting object relation for remote table "final.publisher" */
export type Final_Publisher_Obj_Rel_Insert_Input = {
  data: Final_Publisher_Insert_Input;
  on_conflict?: Maybe<Final_Publisher_On_Conflict>;
};

/** on conflict condition type for table "final.publisher" */
export type Final_Publisher_On_Conflict = {
  constraint: Final_Publisher_Constraint;
  update_columns: Array<Final_Publisher_Update_Column>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};

/** ordering options when selecting data from "final.publisher" */
export type Final_Publisher_Order_By = {
  bankinginformation?: Maybe<Order_By>;
  books_aggregate?: Maybe<Final_Book_Aggregate_Order_By>;
  phonenumbers_aggregate?: Maybe<Final_Phonenumber_Aggregate_Order_By>;
  publisherid?: Maybe<Order_By>;
  publishername?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
  residentialaddress?: Maybe<Final_Residentialaddress_Order_By>;
};

/** select columns of table "final.publisher" */
export enum Final_Publisher_Select_Column {
  /** column name */
  Bankinginformation = 'bankinginformation',
  /** column name */
  Publisherid = 'publisherid',
  /** column name */
  Publishername = 'publishername',
  /** column name */
  Residenceid = 'residenceid'
}

/** input type for updating data in table "final.publisher" */
export type Final_Publisher_Set_Input = {
  bankinginformation?: Maybe<Scalars['String']>;
  publisherid?: Maybe<Scalars['Int']>;
  publishername?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Final_Publisher_Stddev_Fields = {
   __typename?: 'final_publisher_stddev_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.publisher" */
export type Final_Publisher_Stddev_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Publisher_Stddev_Pop_Fields = {
   __typename?: 'final_publisher_stddev_pop_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.publisher" */
export type Final_Publisher_Stddev_Pop_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Publisher_Stddev_Samp_Fields = {
   __typename?: 'final_publisher_stddev_samp_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.publisher" */
export type Final_Publisher_Stddev_Samp_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Publisher_Sum_Fields = {
   __typename?: 'final_publisher_sum_fields';
  publisherid?: Maybe<Scalars['Int']>;
  residenceid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.publisher" */
export type Final_Publisher_Sum_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** update columns of table "final.publisher" */
export enum Final_Publisher_Update_Column {
  /** column name */
  Bankinginformation = 'bankinginformation',
  /** column name */
  Publisherid = 'publisherid',
  /** column name */
  Publishername = 'publishername',
  /** column name */
  Residenceid = 'residenceid'
}

/** aggregate var_pop on columns */
export type Final_Publisher_Var_Pop_Fields = {
   __typename?: 'final_publisher_var_pop_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.publisher" */
export type Final_Publisher_Var_Pop_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Publisher_Var_Samp_Fields = {
   __typename?: 'final_publisher_var_samp_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.publisher" */
export type Final_Publisher_Var_Samp_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Publisher_Variance_Fields = {
   __typename?: 'final_publisher_variance_fields';
  publisherid?: Maybe<Scalars['Float']>;
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.publisher" */
export type Final_Publisher_Variance_Order_By = {
  publisherid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
};

/** columns and relationships of "final.purchase" */
export type Final_Purchase = {
   __typename?: 'final_purchase';
  cardnumber?: Maybe<Scalars['bpchar']>;
  /** An object relationship */
  customer?: Maybe<Final_Customer>;
  orderid: Scalars['String'];
  ordertime?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  purchaseditems: Array<Final_Purchaseditem>;
  /** An aggregated array relationship */
  purchaseditems_aggregate: Final_Purchaseditem_Aggregate;
  /** An array relationship */
  shipments: Array<Final_Shipment>;
  /** An aggregated array relationship */
  shipments_aggregate: Final_Shipment_Aggregate;
  userid?: Maybe<Scalars['String']>;
};


/** columns and relationships of "final.purchase" */
export type Final_PurchasePurchaseditemsArgs = {
  distinct_on?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchaseditem_Order_By>>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};


/** columns and relationships of "final.purchase" */
export type Final_PurchasePurchaseditems_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchaseditem_Order_By>>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};


/** columns and relationships of "final.purchase" */
export type Final_PurchaseShipmentsArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};


/** columns and relationships of "final.purchase" */
export type Final_PurchaseShipments_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};

/** aggregated selection of "final.purchase" */
export type Final_Purchase_Aggregate = {
   __typename?: 'final_purchase_aggregate';
  aggregate?: Maybe<Final_Purchase_Aggregate_Fields>;
  nodes: Array<Final_Purchase>;
};

/** aggregate fields of "final.purchase" */
export type Final_Purchase_Aggregate_Fields = {
   __typename?: 'final_purchase_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Purchase_Max_Fields>;
  min?: Maybe<Final_Purchase_Min_Fields>;
};


/** aggregate fields of "final.purchase" */
export type Final_Purchase_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Purchase_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.purchase" */
export type Final_Purchase_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Purchase_Max_Order_By>;
  min?: Maybe<Final_Purchase_Min_Order_By>;
};

/** input type for inserting array relation for remote table "final.purchase" */
export type Final_Purchase_Arr_Rel_Insert_Input = {
  data: Array<Final_Purchase_Insert_Input>;
  on_conflict?: Maybe<Final_Purchase_On_Conflict>;
};

/** Boolean expression to filter rows from the table "final.purchase". All fields are combined with a logical 'AND'. */
export type Final_Purchase_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Purchase_Bool_Exp>>>;
  _not?: Maybe<Final_Purchase_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Purchase_Bool_Exp>>>;
  cardnumber?: Maybe<Bpchar_Comparison_Exp>;
  customer?: Maybe<Final_Customer_Bool_Exp>;
  orderid?: Maybe<String_Comparison_Exp>;
  ordertime?: Maybe<Timestamp_Comparison_Exp>;
  purchaseditems?: Maybe<Final_Purchaseditem_Bool_Exp>;
  shipments?: Maybe<Final_Shipment_Bool_Exp>;
  userid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.purchase" */
export enum Final_Purchase_Constraint {
  /** unique or primary key constraint */
  PurchasePkey = 'purchase_pkey'
}

/** input type for inserting data into table "final.purchase" */
export type Final_Purchase_Insert_Input = {
  cardnumber?: Maybe<Scalars['bpchar']>;
  customer?: Maybe<Final_Customer_Obj_Rel_Insert_Input>;
  orderid?: Maybe<Scalars['String']>;
  ordertime?: Maybe<Scalars['timestamp']>;
  purchaseditems?: Maybe<Final_Purchaseditem_Arr_Rel_Insert_Input>;
  shipments?: Maybe<Final_Shipment_Arr_Rel_Insert_Input>;
  userid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Purchase_Max_Fields = {
   __typename?: 'final_purchase_max_fields';
  orderid?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.purchase" */
export type Final_Purchase_Max_Order_By = {
  orderid?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Purchase_Min_Fields = {
   __typename?: 'final_purchase_min_fields';
  orderid?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.purchase" */
export type Final_Purchase_Min_Order_By = {
  orderid?: Maybe<Order_By>;
  userid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.purchase" */
export type Final_Purchase_Mutation_Response = {
   __typename?: 'final_purchase_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Purchase>;
};

/** input type for inserting object relation for remote table "final.purchase" */
export type Final_Purchase_Obj_Rel_Insert_Input = {
  data: Final_Purchase_Insert_Input;
  on_conflict?: Maybe<Final_Purchase_On_Conflict>;
};

/** on conflict condition type for table "final.purchase" */
export type Final_Purchase_On_Conflict = {
  constraint: Final_Purchase_Constraint;
  update_columns: Array<Final_Purchase_Update_Column>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};

/** ordering options when selecting data from "final.purchase" */
export type Final_Purchase_Order_By = {
  cardnumber?: Maybe<Order_By>;
  customer?: Maybe<Final_Customer_Order_By>;
  orderid?: Maybe<Order_By>;
  ordertime?: Maybe<Order_By>;
  purchaseditems_aggregate?: Maybe<Final_Purchaseditem_Aggregate_Order_By>;
  shipments_aggregate?: Maybe<Final_Shipment_Aggregate_Order_By>;
  userid?: Maybe<Order_By>;
};

/** select columns of table "final.purchase" */
export enum Final_Purchase_Select_Column {
  /** column name */
  Cardnumber = 'cardnumber',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Ordertime = 'ordertime',
  /** column name */
  Userid = 'userid'
}

/** input type for updating data in table "final.purchase" */
export type Final_Purchase_Set_Input = {
  cardnumber?: Maybe<Scalars['bpchar']>;
  orderid?: Maybe<Scalars['String']>;
  ordertime?: Maybe<Scalars['timestamp']>;
  userid?: Maybe<Scalars['String']>;
};

/** update columns of table "final.purchase" */
export enum Final_Purchase_Update_Column {
  /** column name */
  Cardnumber = 'cardnumber',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Ordertime = 'ordertime',
  /** column name */
  Userid = 'userid'
}

/** columns and relationships of "final.purchaseditem" */
export type Final_Purchaseditem = {
   __typename?: 'final_purchaseditem';
  asin: Scalars['bpchar'];
  orderid: Scalars['String'];
  /** An object relationship */
  purchase: Final_Purchase;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "final.purchaseditem" */
export type Final_Purchaseditem_Aggregate = {
   __typename?: 'final_purchaseditem_aggregate';
  aggregate?: Maybe<Final_Purchaseditem_Aggregate_Fields>;
  nodes: Array<Final_Purchaseditem>;
};

/** aggregate fields of "final.purchaseditem" */
export type Final_Purchaseditem_Aggregate_Fields = {
   __typename?: 'final_purchaseditem_aggregate_fields';
  avg?: Maybe<Final_Purchaseditem_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Purchaseditem_Max_Fields>;
  min?: Maybe<Final_Purchaseditem_Min_Fields>;
  stddev?: Maybe<Final_Purchaseditem_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Purchaseditem_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Purchaseditem_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Purchaseditem_Sum_Fields>;
  var_pop?: Maybe<Final_Purchaseditem_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Purchaseditem_Var_Samp_Fields>;
  variance?: Maybe<Final_Purchaseditem_Variance_Fields>;
};


/** aggregate fields of "final.purchaseditem" */
export type Final_Purchaseditem_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.purchaseditem" */
export type Final_Purchaseditem_Aggregate_Order_By = {
  avg?: Maybe<Final_Purchaseditem_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Purchaseditem_Max_Order_By>;
  min?: Maybe<Final_Purchaseditem_Min_Order_By>;
  stddev?: Maybe<Final_Purchaseditem_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Purchaseditem_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Purchaseditem_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Purchaseditem_Sum_Order_By>;
  var_pop?: Maybe<Final_Purchaseditem_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Purchaseditem_Var_Samp_Order_By>;
  variance?: Maybe<Final_Purchaseditem_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.purchaseditem" */
export type Final_Purchaseditem_Arr_Rel_Insert_Input = {
  data: Array<Final_Purchaseditem_Insert_Input>;
  on_conflict?: Maybe<Final_Purchaseditem_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Purchaseditem_Avg_Fields = {
   __typename?: 'final_purchaseditem_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.purchaseditem". All fields are combined with a logical 'AND'. */
export type Final_Purchaseditem_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Purchaseditem_Bool_Exp>>>;
  _not?: Maybe<Final_Purchaseditem_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Purchaseditem_Bool_Exp>>>;
  asin?: Maybe<Bpchar_Comparison_Exp>;
  orderid?: Maybe<String_Comparison_Exp>;
  purchase?: Maybe<Final_Purchase_Bool_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.purchaseditem" */
export enum Final_Purchaseditem_Constraint {
  /** unique or primary key constraint */
  PurchaseditemPkey = 'purchaseditem_pkey'
}

/** input type for incrementing integer columne in table "final.purchaseditem" */
export type Final_Purchaseditem_Inc_Input = {
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.purchaseditem" */
export type Final_Purchaseditem_Insert_Input = {
  asin?: Maybe<Scalars['bpchar']>;
  orderid?: Maybe<Scalars['String']>;
  purchase?: Maybe<Final_Purchase_Obj_Rel_Insert_Input>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Final_Purchaseditem_Max_Fields = {
   __typename?: 'final_purchaseditem_max_fields';
  orderid?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Max_Order_By = {
  orderid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Purchaseditem_Min_Fields = {
   __typename?: 'final_purchaseditem_min_fields';
  orderid?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Min_Order_By = {
  orderid?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.purchaseditem" */
export type Final_Purchaseditem_Mutation_Response = {
   __typename?: 'final_purchaseditem_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Purchaseditem>;
};

/** input type for inserting object relation for remote table "final.purchaseditem" */
export type Final_Purchaseditem_Obj_Rel_Insert_Input = {
  data: Final_Purchaseditem_Insert_Input;
  on_conflict?: Maybe<Final_Purchaseditem_On_Conflict>;
};

/** on conflict condition type for table "final.purchaseditem" */
export type Final_Purchaseditem_On_Conflict = {
  constraint: Final_Purchaseditem_Constraint;
  update_columns: Array<Final_Purchaseditem_Update_Column>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};

/** ordering options when selecting data from "final.purchaseditem" */
export type Final_Purchaseditem_Order_By = {
  asin?: Maybe<Order_By>;
  orderid?: Maybe<Order_By>;
  purchase?: Maybe<Final_Purchase_Order_By>;
  quantity?: Maybe<Order_By>;
};

/** select columns of table "final.purchaseditem" */
export enum Final_Purchaseditem_Select_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "final.purchaseditem" */
export type Final_Purchaseditem_Set_Input = {
  asin?: Maybe<Scalars['bpchar']>;
  orderid?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Final_Purchaseditem_Stddev_Fields = {
   __typename?: 'final_purchaseditem_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Purchaseditem_Stddev_Pop_Fields = {
   __typename?: 'final_purchaseditem_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Purchaseditem_Stddev_Samp_Fields = {
   __typename?: 'final_purchaseditem_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Purchaseditem_Sum_Fields = {
   __typename?: 'final_purchaseditem_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** update columns of table "final.purchaseditem" */
export enum Final_Purchaseditem_Update_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Final_Purchaseditem_Var_Pop_Fields = {
   __typename?: 'final_purchaseditem_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Purchaseditem_Var_Samp_Fields = {
   __typename?: 'final_purchaseditem_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Purchaseditem_Variance_Fields = {
   __typename?: 'final_purchaseditem_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.purchaseditem" */
export type Final_Purchaseditem_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "final.residentialaddress" */
export type Final_Residentialaddress = {
   __typename?: 'final_residentialaddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  /** An array relationship */
  households: Array<Final_Household>;
  /** An aggregated array relationship */
  households_aggregate: Final_Household_Aggregate;
  lastname?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  /** An array relationship */
  publishers: Array<Final_Publisher>;
  /** An aggregated array relationship */
  publishers_aggregate: Final_Publisher_Aggregate;
  residenceid: Scalars['Int'];
  /** An array relationship */
  shipments: Array<Final_Shipment>;
  /** An aggregated array relationship */
  shipments_aggregate: Final_Shipment_Aggregate;
  street?: Maybe<Scalars['String']>;
};


/** columns and relationships of "final.residentialaddress" */
export type Final_ResidentialaddressHouseholdsArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** columns and relationships of "final.residentialaddress" */
export type Final_ResidentialaddressHouseholds_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** columns and relationships of "final.residentialaddress" */
export type Final_ResidentialaddressPublishersArgs = {
  distinct_on?: Maybe<Array<Final_Publisher_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Publisher_Order_By>>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};


/** columns and relationships of "final.residentialaddress" */
export type Final_ResidentialaddressPublishers_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Publisher_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Publisher_Order_By>>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};


/** columns and relationships of "final.residentialaddress" */
export type Final_ResidentialaddressShipmentsArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};


/** columns and relationships of "final.residentialaddress" */
export type Final_ResidentialaddressShipments_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};

/** aggregated selection of "final.residentialaddress" */
export type Final_Residentialaddress_Aggregate = {
   __typename?: 'final_residentialaddress_aggregate';
  aggregate?: Maybe<Final_Residentialaddress_Aggregate_Fields>;
  nodes: Array<Final_Residentialaddress>;
};

/** aggregate fields of "final.residentialaddress" */
export type Final_Residentialaddress_Aggregate_Fields = {
   __typename?: 'final_residentialaddress_aggregate_fields';
  avg?: Maybe<Final_Residentialaddress_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Residentialaddress_Max_Fields>;
  min?: Maybe<Final_Residentialaddress_Min_Fields>;
  stddev?: Maybe<Final_Residentialaddress_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Residentialaddress_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Residentialaddress_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Residentialaddress_Sum_Fields>;
  var_pop?: Maybe<Final_Residentialaddress_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Residentialaddress_Var_Samp_Fields>;
  variance?: Maybe<Final_Residentialaddress_Variance_Fields>;
};


/** aggregate fields of "final.residentialaddress" */
export type Final_Residentialaddress_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Residentialaddress_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.residentialaddress" */
export type Final_Residentialaddress_Aggregate_Order_By = {
  avg?: Maybe<Final_Residentialaddress_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Residentialaddress_Max_Order_By>;
  min?: Maybe<Final_Residentialaddress_Min_Order_By>;
  stddev?: Maybe<Final_Residentialaddress_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Residentialaddress_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Residentialaddress_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Residentialaddress_Sum_Order_By>;
  var_pop?: Maybe<Final_Residentialaddress_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Residentialaddress_Var_Samp_Order_By>;
  variance?: Maybe<Final_Residentialaddress_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.residentialaddress" */
export type Final_Residentialaddress_Arr_Rel_Insert_Input = {
  data: Array<Final_Residentialaddress_Insert_Input>;
  on_conflict?: Maybe<Final_Residentialaddress_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Residentialaddress_Avg_Fields = {
   __typename?: 'final_residentialaddress_avg_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Avg_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.residentialaddress". All fields are combined with a logical 'AND'. */
export type Final_Residentialaddress_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Residentialaddress_Bool_Exp>>>;
  _not?: Maybe<Final_Residentialaddress_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Residentialaddress_Bool_Exp>>>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  households?: Maybe<Final_Household_Bool_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  postalcode?: Maybe<String_Comparison_Exp>;
  province?: Maybe<String_Comparison_Exp>;
  publishers?: Maybe<Final_Publisher_Bool_Exp>;
  residenceid?: Maybe<Int_Comparison_Exp>;
  shipments?: Maybe<Final_Shipment_Bool_Exp>;
  street?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.residentialaddress" */
export enum Final_Residentialaddress_Constraint {
  /** unique or primary key constraint */
  ResidentialaddressPkey = 'residentialaddress_pkey'
}

/** input type for incrementing integer columne in table "final.residentialaddress" */
export type Final_Residentialaddress_Inc_Input = {
  residenceid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.residentialaddress" */
export type Final_Residentialaddress_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  households?: Maybe<Final_Household_Arr_Rel_Insert_Input>;
  lastname?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  publishers?: Maybe<Final_Publisher_Arr_Rel_Insert_Input>;
  residenceid?: Maybe<Scalars['Int']>;
  shipments?: Maybe<Final_Shipment_Arr_Rel_Insert_Input>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Residentialaddress_Max_Fields = {
   __typename?: 'final_residentialaddress_max_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Max_Order_By = {
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  postalcode?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Residentialaddress_Min_Fields = {
   __typename?: 'final_residentialaddress_min_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Min_Order_By = {
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  postalcode?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.residentialaddress" */
export type Final_Residentialaddress_Mutation_Response = {
   __typename?: 'final_residentialaddress_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Residentialaddress>;
};

/** input type for inserting object relation for remote table "final.residentialaddress" */
export type Final_Residentialaddress_Obj_Rel_Insert_Input = {
  data: Final_Residentialaddress_Insert_Input;
  on_conflict?: Maybe<Final_Residentialaddress_On_Conflict>;
};

/** on conflict condition type for table "final.residentialaddress" */
export type Final_Residentialaddress_On_Conflict = {
  constraint: Final_Residentialaddress_Constraint;
  update_columns: Array<Final_Residentialaddress_Update_Column>;
  where?: Maybe<Final_Residentialaddress_Bool_Exp>;
};

/** ordering options when selecting data from "final.residentialaddress" */
export type Final_Residentialaddress_Order_By = {
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  households_aggregate?: Maybe<Final_Household_Aggregate_Order_By>;
  lastname?: Maybe<Order_By>;
  postalcode?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  publishers_aggregate?: Maybe<Final_Publisher_Aggregate_Order_By>;
  residenceid?: Maybe<Order_By>;
  shipments_aggregate?: Maybe<Final_Shipment_Aggregate_Order_By>;
  street?: Maybe<Order_By>;
};

/** select columns of table "final.residentialaddress" */
export enum Final_Residentialaddress_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Postalcode = 'postalcode',
  /** column name */
  Province = 'province',
  /** column name */
  Residenceid = 'residenceid',
  /** column name */
  Street = 'street'
}

/** input type for updating data in table "final.residentialaddress" */
export type Final_Residentialaddress_Set_Input = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Final_Residentialaddress_Stddev_Fields = {
   __typename?: 'final_residentialaddress_stddev_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Stddev_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Residentialaddress_Stddev_Pop_Fields = {
   __typename?: 'final_residentialaddress_stddev_pop_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Stddev_Pop_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Residentialaddress_Stddev_Samp_Fields = {
   __typename?: 'final_residentialaddress_stddev_samp_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Stddev_Samp_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Residentialaddress_Sum_Fields = {
   __typename?: 'final_residentialaddress_sum_fields';
  residenceid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Sum_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** update columns of table "final.residentialaddress" */
export enum Final_Residentialaddress_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Postalcode = 'postalcode',
  /** column name */
  Province = 'province',
  /** column name */
  Residenceid = 'residenceid',
  /** column name */
  Street = 'street'
}

/** aggregate var_pop on columns */
export type Final_Residentialaddress_Var_Pop_Fields = {
   __typename?: 'final_residentialaddress_var_pop_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Var_Pop_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Residentialaddress_Var_Samp_Fields = {
   __typename?: 'final_residentialaddress_var_samp_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Var_Samp_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Residentialaddress_Variance_Fields = {
   __typename?: 'final_residentialaddress_variance_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.residentialaddress" */
export type Final_Residentialaddress_Variance_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** columns and relationships of "final.shipment" */
export type Final_Shipment = {
   __typename?: 'final_shipment';
  orderid?: Maybe<Scalars['String']>;
  /** An object relationship */
  purchase?: Maybe<Final_Purchase>;
  residenceid?: Maybe<Scalars['Int']>;
  /** An object relationship */
  residentialaddress?: Maybe<Final_Residentialaddress>;
  trackingid: Scalars['String'];
};

/** aggregated selection of "final.shipment" */
export type Final_Shipment_Aggregate = {
   __typename?: 'final_shipment_aggregate';
  aggregate?: Maybe<Final_Shipment_Aggregate_Fields>;
  nodes: Array<Final_Shipment>;
};

/** aggregate fields of "final.shipment" */
export type Final_Shipment_Aggregate_Fields = {
   __typename?: 'final_shipment_aggregate_fields';
  avg?: Maybe<Final_Shipment_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Shipment_Max_Fields>;
  min?: Maybe<Final_Shipment_Min_Fields>;
  stddev?: Maybe<Final_Shipment_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Shipment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Shipment_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Shipment_Sum_Fields>;
  var_pop?: Maybe<Final_Shipment_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Shipment_Var_Samp_Fields>;
  variance?: Maybe<Final_Shipment_Variance_Fields>;
};


/** aggregate fields of "final.shipment" */
export type Final_Shipment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Shipment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.shipment" */
export type Final_Shipment_Aggregate_Order_By = {
  avg?: Maybe<Final_Shipment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Shipment_Max_Order_By>;
  min?: Maybe<Final_Shipment_Min_Order_By>;
  stddev?: Maybe<Final_Shipment_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Shipment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Shipment_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Shipment_Sum_Order_By>;
  var_pop?: Maybe<Final_Shipment_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Shipment_Var_Samp_Order_By>;
  variance?: Maybe<Final_Shipment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.shipment" */
export type Final_Shipment_Arr_Rel_Insert_Input = {
  data: Array<Final_Shipment_Insert_Input>;
  on_conflict?: Maybe<Final_Shipment_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Shipment_Avg_Fields = {
   __typename?: 'final_shipment_avg_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.shipment" */
export type Final_Shipment_Avg_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.shipment". All fields are combined with a logical 'AND'. */
export type Final_Shipment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Final_Shipment_Bool_Exp>>>;
  _not?: Maybe<Final_Shipment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Shipment_Bool_Exp>>>;
  orderid?: Maybe<String_Comparison_Exp>;
  purchase?: Maybe<Final_Purchase_Bool_Exp>;
  residenceid?: Maybe<Int_Comparison_Exp>;
  residentialaddress?: Maybe<Final_Residentialaddress_Bool_Exp>;
  trackingid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.shipment" */
export enum Final_Shipment_Constraint {
  /** unique or primary key constraint */
  ShipmentPkey = 'shipment_pkey'
}

/** input type for incrementing integer columne in table "final.shipment" */
export type Final_Shipment_Inc_Input = {
  residenceid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "final.shipment" */
export type Final_Shipment_Insert_Input = {
  orderid?: Maybe<Scalars['String']>;
  purchase?: Maybe<Final_Purchase_Obj_Rel_Insert_Input>;
  residenceid?: Maybe<Scalars['Int']>;
  residentialaddress?: Maybe<Final_Residentialaddress_Obj_Rel_Insert_Input>;
  trackingid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Final_Shipment_Max_Fields = {
   __typename?: 'final_shipment_max_fields';
  orderid?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  trackingid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "final.shipment" */
export type Final_Shipment_Max_Order_By = {
  orderid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
  trackingid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Shipment_Min_Fields = {
   __typename?: 'final_shipment_min_fields';
  orderid?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  trackingid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "final.shipment" */
export type Final_Shipment_Min_Order_By = {
  orderid?: Maybe<Order_By>;
  residenceid?: Maybe<Order_By>;
  trackingid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.shipment" */
export type Final_Shipment_Mutation_Response = {
   __typename?: 'final_shipment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Shipment>;
};

/** input type for inserting object relation for remote table "final.shipment" */
export type Final_Shipment_Obj_Rel_Insert_Input = {
  data: Final_Shipment_Insert_Input;
  on_conflict?: Maybe<Final_Shipment_On_Conflict>;
};

/** on conflict condition type for table "final.shipment" */
export type Final_Shipment_On_Conflict = {
  constraint: Final_Shipment_Constraint;
  update_columns: Array<Final_Shipment_Update_Column>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};

/** ordering options when selecting data from "final.shipment" */
export type Final_Shipment_Order_By = {
  orderid?: Maybe<Order_By>;
  purchase?: Maybe<Final_Purchase_Order_By>;
  residenceid?: Maybe<Order_By>;
  residentialaddress?: Maybe<Final_Residentialaddress_Order_By>;
  trackingid?: Maybe<Order_By>;
};

/** select columns of table "final.shipment" */
export enum Final_Shipment_Select_Column {
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Residenceid = 'residenceid',
  /** column name */
  Trackingid = 'trackingid'
}

/** input type for updating data in table "final.shipment" */
export type Final_Shipment_Set_Input = {
  orderid?: Maybe<Scalars['String']>;
  residenceid?: Maybe<Scalars['Int']>;
  trackingid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Final_Shipment_Stddev_Fields = {
   __typename?: 'final_shipment_stddev_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.shipment" */
export type Final_Shipment_Stddev_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Shipment_Stddev_Pop_Fields = {
   __typename?: 'final_shipment_stddev_pop_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.shipment" */
export type Final_Shipment_Stddev_Pop_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Shipment_Stddev_Samp_Fields = {
   __typename?: 'final_shipment_stddev_samp_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.shipment" */
export type Final_Shipment_Stddev_Samp_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Shipment_Sum_Fields = {
   __typename?: 'final_shipment_sum_fields';
  residenceid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "final.shipment" */
export type Final_Shipment_Sum_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** update columns of table "final.shipment" */
export enum Final_Shipment_Update_Column {
  /** column name */
  Orderid = 'orderid',
  /** column name */
  Residenceid = 'residenceid',
  /** column name */
  Trackingid = 'trackingid'
}

/** aggregate var_pop on columns */
export type Final_Shipment_Var_Pop_Fields = {
   __typename?: 'final_shipment_var_pop_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.shipment" */
export type Final_Shipment_Var_Pop_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Shipment_Var_Samp_Fields = {
   __typename?: 'final_shipment_var_samp_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.shipment" */
export type Final_Shipment_Var_Samp_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Shipment_Variance_Fields = {
   __typename?: 'final_shipment_variance_fields';
  residenceid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.shipment" */
export type Final_Shipment_Variance_Order_By = {
  residenceid?: Maybe<Order_By>;
};

/** columns and relationships of "final.writtenby" */
export type Final_Writtenby = {
   __typename?: 'final_writtenby';
  /** An object relationship */
  AuthoredBook: Final_Author;
  /** An object relationship */
  AuthoredBy: Final_Book;
  asin: Scalars['String'];
  authorid: Scalars['bigint'];
};

/** aggregated selection of "final.writtenby" */
export type Final_Writtenby_Aggregate = {
   __typename?: 'final_writtenby_aggregate';
  aggregate?: Maybe<Final_Writtenby_Aggregate_Fields>;
  nodes: Array<Final_Writtenby>;
};

/** aggregate fields of "final.writtenby" */
export type Final_Writtenby_Aggregate_Fields = {
   __typename?: 'final_writtenby_aggregate_fields';
  avg?: Maybe<Final_Writtenby_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Final_Writtenby_Max_Fields>;
  min?: Maybe<Final_Writtenby_Min_Fields>;
  stddev?: Maybe<Final_Writtenby_Stddev_Fields>;
  stddev_pop?: Maybe<Final_Writtenby_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Final_Writtenby_Stddev_Samp_Fields>;
  sum?: Maybe<Final_Writtenby_Sum_Fields>;
  var_pop?: Maybe<Final_Writtenby_Var_Pop_Fields>;
  var_samp?: Maybe<Final_Writtenby_Var_Samp_Fields>;
  variance?: Maybe<Final_Writtenby_Variance_Fields>;
};


/** aggregate fields of "final.writtenby" */
export type Final_Writtenby_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Final_Writtenby_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "final.writtenby" */
export type Final_Writtenby_Aggregate_Order_By = {
  avg?: Maybe<Final_Writtenby_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Final_Writtenby_Max_Order_By>;
  min?: Maybe<Final_Writtenby_Min_Order_By>;
  stddev?: Maybe<Final_Writtenby_Stddev_Order_By>;
  stddev_pop?: Maybe<Final_Writtenby_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Final_Writtenby_Stddev_Samp_Order_By>;
  sum?: Maybe<Final_Writtenby_Sum_Order_By>;
  var_pop?: Maybe<Final_Writtenby_Var_Pop_Order_By>;
  var_samp?: Maybe<Final_Writtenby_Var_Samp_Order_By>;
  variance?: Maybe<Final_Writtenby_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "final.writtenby" */
export type Final_Writtenby_Arr_Rel_Insert_Input = {
  data: Array<Final_Writtenby_Insert_Input>;
  on_conflict?: Maybe<Final_Writtenby_On_Conflict>;
};

/** aggregate avg on columns */
export type Final_Writtenby_Avg_Fields = {
   __typename?: 'final_writtenby_avg_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "final.writtenby" */
export type Final_Writtenby_Avg_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "final.writtenby". All fields are combined with a logical 'AND'. */
export type Final_Writtenby_Bool_Exp = {
  AuthoredBook?: Maybe<Final_Author_Bool_Exp>;
  AuthoredBy?: Maybe<Final_Book_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Final_Writtenby_Bool_Exp>>>;
  _not?: Maybe<Final_Writtenby_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Final_Writtenby_Bool_Exp>>>;
  asin?: Maybe<String_Comparison_Exp>;
  authorid?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "final.writtenby" */
export enum Final_Writtenby_Constraint {
  /** unique or primary key constraint */
  WrittenbyPkey = 'writtenby_pkey'
}

/** input type for incrementing integer columne in table "final.writtenby" */
export type Final_Writtenby_Inc_Input = {
  authorid?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "final.writtenby" */
export type Final_Writtenby_Insert_Input = {
  AuthoredBook?: Maybe<Final_Author_Obj_Rel_Insert_Input>;
  AuthoredBy?: Maybe<Final_Book_Obj_Rel_Insert_Input>;
  asin?: Maybe<Scalars['String']>;
  authorid?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Final_Writtenby_Max_Fields = {
   __typename?: 'final_writtenby_max_fields';
  asin?: Maybe<Scalars['String']>;
  authorid?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "final.writtenby" */
export type Final_Writtenby_Max_Order_By = {
  asin?: Maybe<Order_By>;
  authorid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Final_Writtenby_Min_Fields = {
   __typename?: 'final_writtenby_min_fields';
  asin?: Maybe<Scalars['String']>;
  authorid?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "final.writtenby" */
export type Final_Writtenby_Min_Order_By = {
  asin?: Maybe<Order_By>;
  authorid?: Maybe<Order_By>;
};

/** response of any mutation on the table "final.writtenby" */
export type Final_Writtenby_Mutation_Response = {
   __typename?: 'final_writtenby_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Final_Writtenby>;
};

/** input type for inserting object relation for remote table "final.writtenby" */
export type Final_Writtenby_Obj_Rel_Insert_Input = {
  data: Final_Writtenby_Insert_Input;
  on_conflict?: Maybe<Final_Writtenby_On_Conflict>;
};

/** on conflict condition type for table "final.writtenby" */
export type Final_Writtenby_On_Conflict = {
  constraint: Final_Writtenby_Constraint;
  update_columns: Array<Final_Writtenby_Update_Column>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};

/** ordering options when selecting data from "final.writtenby" */
export type Final_Writtenby_Order_By = {
  AuthoredBook?: Maybe<Final_Author_Order_By>;
  AuthoredBy?: Maybe<Final_Book_Order_By>;
  asin?: Maybe<Order_By>;
  authorid?: Maybe<Order_By>;
};

/** select columns of table "final.writtenby" */
export enum Final_Writtenby_Select_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Authorid = 'authorid'
}

/** input type for updating data in table "final.writtenby" */
export type Final_Writtenby_Set_Input = {
  asin?: Maybe<Scalars['String']>;
  authorid?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Final_Writtenby_Stddev_Fields = {
   __typename?: 'final_writtenby_stddev_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "final.writtenby" */
export type Final_Writtenby_Stddev_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Final_Writtenby_Stddev_Pop_Fields = {
   __typename?: 'final_writtenby_stddev_pop_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "final.writtenby" */
export type Final_Writtenby_Stddev_Pop_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Final_Writtenby_Stddev_Samp_Fields = {
   __typename?: 'final_writtenby_stddev_samp_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "final.writtenby" */
export type Final_Writtenby_Stddev_Samp_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Final_Writtenby_Sum_Fields = {
   __typename?: 'final_writtenby_sum_fields';
  authorid?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "final.writtenby" */
export type Final_Writtenby_Sum_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** update columns of table "final.writtenby" */
export enum Final_Writtenby_Update_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Authorid = 'authorid'
}

/** aggregate var_pop on columns */
export type Final_Writtenby_Var_Pop_Fields = {
   __typename?: 'final_writtenby_var_pop_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "final.writtenby" */
export type Final_Writtenby_Var_Pop_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Final_Writtenby_Var_Samp_Fields = {
   __typename?: 'final_writtenby_var_samp_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "final.writtenby" */
export type Final_Writtenby_Var_Samp_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Final_Writtenby_Variance_Fields = {
   __typename?: 'final_writtenby_variance_fields';
  authorid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "final.writtenby" */
export type Final_Writtenby_Variance_Order_By = {
  authorid?: Maybe<Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "Book" */
  delete_Book?: Maybe<Book_Mutation_Response>;
  /** delete data from the table: "Offer" */
  delete_Offer?: Maybe<Offer_Mutation_Response>;
  /** delete data from the table: "Order" */
  delete_Order?: Maybe<Order_Mutation_Response>;
  /** delete data from the table: "PaymentInfo" */
  delete_PaymentInfo?: Maybe<PaymentInfo_Mutation_Response>;
  /** delete data from the table: "ShippingAddress" */
  delete_ShippingAddress?: Maybe<ShippingAddress_Mutation_Response>;
  /** delete data from the table: "Store" */
  delete_Store?: Maybe<Store_Mutation_Response>;
  /** delete data from the table: "final.author" */
  delete_final_author?: Maybe<Final_Author_Mutation_Response>;
  /** delete data from the table: "final.book" */
  delete_final_book?: Maybe<Final_Book_Mutation_Response>;
  /** delete data from the table: "final.cardholder" */
  delete_final_cardholder?: Maybe<Final_Cardholder_Mutation_Response>;
  /** delete data from the table: "final.customer" */
  delete_final_customer?: Maybe<Final_Customer_Mutation_Response>;
  /** delete data from the table: "final.household" */
  delete_final_household?: Maybe<Final_Household_Mutation_Response>;
  /** delete data from the table: "final.paymentmethod" */
  delete_final_paymentmethod?: Maybe<Final_Paymentmethod_Mutation_Response>;
  /** delete data from the table: "final.phonenumber" */
  delete_final_phonenumber?: Maybe<Final_Phonenumber_Mutation_Response>;
  /** delete data from the table: "final.publisher" */
  delete_final_publisher?: Maybe<Final_Publisher_Mutation_Response>;
  /** delete data from the table: "final.purchase" */
  delete_final_purchase?: Maybe<Final_Purchase_Mutation_Response>;
  /** delete data from the table: "final.purchaseditem" */
  delete_final_purchaseditem?: Maybe<Final_Purchaseditem_Mutation_Response>;
  /** delete data from the table: "final.residentialaddress" */
  delete_final_residentialaddress?: Maybe<Final_Residentialaddress_Mutation_Response>;
  /** delete data from the table: "final.shipment" */
  delete_final_shipment?: Maybe<Final_Shipment_Mutation_Response>;
  /** delete data from the table: "final.writtenby" */
  delete_final_writtenby?: Maybe<Final_Writtenby_Mutation_Response>;
  /** insert data into the table: "Book" */
  insert_Book?: Maybe<Book_Mutation_Response>;
  /** insert data into the table: "Offer" */
  insert_Offer?: Maybe<Offer_Mutation_Response>;
  /** insert data into the table: "Order" */
  insert_Order?: Maybe<Order_Mutation_Response>;
  /** insert data into the table: "PaymentInfo" */
  insert_PaymentInfo?: Maybe<PaymentInfo_Mutation_Response>;
  /** insert data into the table: "ShippingAddress" */
  insert_ShippingAddress?: Maybe<ShippingAddress_Mutation_Response>;
  /** insert data into the table: "Store" */
  insert_Store?: Maybe<Store_Mutation_Response>;
  /** insert data into the table: "final.author" */
  insert_final_author?: Maybe<Final_Author_Mutation_Response>;
  /** insert data into the table: "final.book" */
  insert_final_book?: Maybe<Final_Book_Mutation_Response>;
  /** insert data into the table: "final.cardholder" */
  insert_final_cardholder?: Maybe<Final_Cardholder_Mutation_Response>;
  /** insert data into the table: "final.customer" */
  insert_final_customer?: Maybe<Final_Customer_Mutation_Response>;
  /** insert data into the table: "final.household" */
  insert_final_household?: Maybe<Final_Household_Mutation_Response>;
  /** insert data into the table: "final.paymentmethod" */
  insert_final_paymentmethod?: Maybe<Final_Paymentmethod_Mutation_Response>;
  /** insert data into the table: "final.phonenumber" */
  insert_final_phonenumber?: Maybe<Final_Phonenumber_Mutation_Response>;
  /** insert data into the table: "final.publisher" */
  insert_final_publisher?: Maybe<Final_Publisher_Mutation_Response>;
  /** insert data into the table: "final.purchase" */
  insert_final_purchase?: Maybe<Final_Purchase_Mutation_Response>;
  /** insert data into the table: "final.purchaseditem" */
  insert_final_purchaseditem?: Maybe<Final_Purchaseditem_Mutation_Response>;
  /** insert data into the table: "final.residentialaddress" */
  insert_final_residentialaddress?: Maybe<Final_Residentialaddress_Mutation_Response>;
  /** insert data into the table: "final.shipment" */
  insert_final_shipment?: Maybe<Final_Shipment_Mutation_Response>;
  /** insert data into the table: "final.writtenby" */
  insert_final_writtenby?: Maybe<Final_Writtenby_Mutation_Response>;
  /** update data of the table: "Book" */
  update_Book?: Maybe<Book_Mutation_Response>;
  /** update data of the table: "Offer" */
  update_Offer?: Maybe<Offer_Mutation_Response>;
  /** update data of the table: "Order" */
  update_Order?: Maybe<Order_Mutation_Response>;
  /** update data of the table: "PaymentInfo" */
  update_PaymentInfo?: Maybe<PaymentInfo_Mutation_Response>;
  /** update data of the table: "ShippingAddress" */
  update_ShippingAddress?: Maybe<ShippingAddress_Mutation_Response>;
  /** update data of the table: "Store" */
  update_Store?: Maybe<Store_Mutation_Response>;
  /** update data of the table: "final.author" */
  update_final_author?: Maybe<Final_Author_Mutation_Response>;
  /** update data of the table: "final.book" */
  update_final_book?: Maybe<Final_Book_Mutation_Response>;
  /** update data of the table: "final.cardholder" */
  update_final_cardholder?: Maybe<Final_Cardholder_Mutation_Response>;
  /** update data of the table: "final.customer" */
  update_final_customer?: Maybe<Final_Customer_Mutation_Response>;
  /** update data of the table: "final.household" */
  update_final_household?: Maybe<Final_Household_Mutation_Response>;
  /** update data of the table: "final.paymentmethod" */
  update_final_paymentmethod?: Maybe<Final_Paymentmethod_Mutation_Response>;
  /** update data of the table: "final.phonenumber" */
  update_final_phonenumber?: Maybe<Final_Phonenumber_Mutation_Response>;
  /** update data of the table: "final.publisher" */
  update_final_publisher?: Maybe<Final_Publisher_Mutation_Response>;
  /** update data of the table: "final.purchase" */
  update_final_purchase?: Maybe<Final_Purchase_Mutation_Response>;
  /** update data of the table: "final.purchaseditem" */
  update_final_purchaseditem?: Maybe<Final_Purchaseditem_Mutation_Response>;
  /** update data of the table: "final.residentialaddress" */
  update_final_residentialaddress?: Maybe<Final_Residentialaddress_Mutation_Response>;
  /** update data of the table: "final.shipment" */
  update_final_shipment?: Maybe<Final_Shipment_Mutation_Response>;
  /** update data of the table: "final.writtenby" */
  update_final_writtenby?: Maybe<Final_Writtenby_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_BookArgs = {
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OfferArgs = {
  where: Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PaymentInfoArgs = {
  where: PaymentInfo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ShippingAddressArgs = {
  where: ShippingAddress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_StoreArgs = {
  where: Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_AuthorArgs = {
  where: Final_Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_BookArgs = {
  where: Final_Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_CardholderArgs = {
  where: Final_Cardholder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_CustomerArgs = {
  where: Final_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_HouseholdArgs = {
  where: Final_Household_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_PaymentmethodArgs = {
  where: Final_Paymentmethod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_PhonenumberArgs = {
  where: Final_Phonenumber_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_PublisherArgs = {
  where: Final_Publisher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_PurchaseArgs = {
  where: Final_Purchase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_PurchaseditemArgs = {
  where: Final_Purchaseditem_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_ResidentialaddressArgs = {
  where: Final_Residentialaddress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_ShipmentArgs = {
  where: Final_Shipment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Final_WrittenbyArgs = {
  where: Final_Writtenby_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_BookArgs = {
  objects: Array<Book_Insert_Input>;
  on_conflict?: Maybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OfferArgs = {
  objects: Array<Offer_Insert_Input>;
  on_conflict?: Maybe<Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: Maybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentInfoArgs = {
  objects: Array<PaymentInfo_Insert_Input>;
  on_conflict?: Maybe<PaymentInfo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShippingAddressArgs = {
  objects: Array<ShippingAddress_Insert_Input>;
  on_conflict?: Maybe<ShippingAddress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoreArgs = {
  objects: Array<Store_Insert_Input>;
  on_conflict?: Maybe<Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_AuthorArgs = {
  objects: Array<Final_Author_Insert_Input>;
  on_conflict?: Maybe<Final_Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_BookArgs = {
  objects: Array<Final_Book_Insert_Input>;
  on_conflict?: Maybe<Final_Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_CardholderArgs = {
  objects: Array<Final_Cardholder_Insert_Input>;
  on_conflict?: Maybe<Final_Cardholder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_CustomerArgs = {
  objects: Array<Final_Customer_Insert_Input>;
  on_conflict?: Maybe<Final_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_HouseholdArgs = {
  objects: Array<Final_Household_Insert_Input>;
  on_conflict?: Maybe<Final_Household_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_PaymentmethodArgs = {
  objects: Array<Final_Paymentmethod_Insert_Input>;
  on_conflict?: Maybe<Final_Paymentmethod_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_PhonenumberArgs = {
  objects: Array<Final_Phonenumber_Insert_Input>;
  on_conflict?: Maybe<Final_Phonenumber_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_PublisherArgs = {
  objects: Array<Final_Publisher_Insert_Input>;
  on_conflict?: Maybe<Final_Publisher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_PurchaseArgs = {
  objects: Array<Final_Purchase_Insert_Input>;
  on_conflict?: Maybe<Final_Purchase_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_PurchaseditemArgs = {
  objects: Array<Final_Purchaseditem_Insert_Input>;
  on_conflict?: Maybe<Final_Purchaseditem_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_ResidentialaddressArgs = {
  objects: Array<Final_Residentialaddress_Insert_Input>;
  on_conflict?: Maybe<Final_Residentialaddress_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_ShipmentArgs = {
  objects: Array<Final_Shipment_Insert_Input>;
  on_conflict?: Maybe<Final_Shipment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Final_WrittenbyArgs = {
  objects: Array<Final_Writtenby_Insert_Input>;
  on_conflict?: Maybe<Final_Writtenby_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BookArgs = {
  _set?: Maybe<Book_Set_Input>;
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OfferArgs = {
  _inc?: Maybe<Offer_Inc_Input>;
  _set?: Maybe<Offer_Set_Input>;
  where: Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: Maybe<Order_Inc_Input>;
  _set?: Maybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentInfoArgs = {
  _set?: Maybe<PaymentInfo_Set_Input>;
  where: PaymentInfo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ShippingAddressArgs = {
  _inc?: Maybe<ShippingAddress_Inc_Input>;
  _set?: Maybe<ShippingAddress_Set_Input>;
  where: ShippingAddress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_StoreArgs = {
  _inc?: Maybe<Store_Inc_Input>;
  _set?: Maybe<Store_Set_Input>;
  where: Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_AuthorArgs = {
  _inc?: Maybe<Final_Author_Inc_Input>;
  _set?: Maybe<Final_Author_Set_Input>;
  where: Final_Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_BookArgs = {
  _inc?: Maybe<Final_Book_Inc_Input>;
  _set?: Maybe<Final_Book_Set_Input>;
  where: Final_Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_CardholderArgs = {
  _set?: Maybe<Final_Cardholder_Set_Input>;
  where: Final_Cardholder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_CustomerArgs = {
  _set?: Maybe<Final_Customer_Set_Input>;
  where: Final_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_HouseholdArgs = {
  _inc?: Maybe<Final_Household_Inc_Input>;
  _set?: Maybe<Final_Household_Set_Input>;
  where: Final_Household_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_PaymentmethodArgs = {
  _set?: Maybe<Final_Paymentmethod_Set_Input>;
  where: Final_Paymentmethod_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_PhonenumberArgs = {
  _inc?: Maybe<Final_Phonenumber_Inc_Input>;
  _set?: Maybe<Final_Phonenumber_Set_Input>;
  where: Final_Phonenumber_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_PublisherArgs = {
  _inc?: Maybe<Final_Publisher_Inc_Input>;
  _set?: Maybe<Final_Publisher_Set_Input>;
  where: Final_Publisher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_PurchaseArgs = {
  _set?: Maybe<Final_Purchase_Set_Input>;
  where: Final_Purchase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_PurchaseditemArgs = {
  _inc?: Maybe<Final_Purchaseditem_Inc_Input>;
  _set?: Maybe<Final_Purchaseditem_Set_Input>;
  where: Final_Purchaseditem_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_ResidentialaddressArgs = {
  _inc?: Maybe<Final_Residentialaddress_Inc_Input>;
  _set?: Maybe<Final_Residentialaddress_Set_Input>;
  where: Final_Residentialaddress_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_ShipmentArgs = {
  _inc?: Maybe<Final_Shipment_Inc_Input>;
  _set?: Maybe<Final_Shipment_Set_Input>;
  where: Final_Shipment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Final_WrittenbyArgs = {
  _inc?: Maybe<Final_Writtenby_Inc_Input>;
  _set?: Maybe<Final_Writtenby_Set_Input>;
  where: Final_Writtenby_Bool_Exp;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "Offer" */
export type Offer = {
   __typename?: 'Offer';
  /** An object relationship */
  Stock: Book;
  asin: Scalars['String'];
  inventory: Scalars['Int'];
  price: Scalars['numeric'];
  store_id: Scalars['Int'];
  warehouse_id: Scalars['Int'];
};

/** aggregated selection of "Offer" */
export type Offer_Aggregate = {
   __typename?: 'Offer_aggregate';
  aggregate?: Maybe<Offer_Aggregate_Fields>;
  nodes: Array<Offer>;
};

/** aggregate fields of "Offer" */
export type Offer_Aggregate_Fields = {
   __typename?: 'Offer_aggregate_fields';
  avg?: Maybe<Offer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Offer_Max_Fields>;
  min?: Maybe<Offer_Min_Fields>;
  stddev?: Maybe<Offer_Stddev_Fields>;
  stddev_pop?: Maybe<Offer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offer_Stddev_Samp_Fields>;
  sum?: Maybe<Offer_Sum_Fields>;
  var_pop?: Maybe<Offer_Var_Pop_Fields>;
  var_samp?: Maybe<Offer_Var_Samp_Fields>;
  variance?: Maybe<Offer_Variance_Fields>;
};


/** aggregate fields of "Offer" */
export type Offer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Offer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Offer" */
export type Offer_Aggregate_Order_By = {
  avg?: Maybe<Offer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Offer_Max_Order_By>;
  min?: Maybe<Offer_Min_Order_By>;
  stddev?: Maybe<Offer_Stddev_Order_By>;
  stddev_pop?: Maybe<Offer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Offer_Stddev_Samp_Order_By>;
  sum?: Maybe<Offer_Sum_Order_By>;
  var_pop?: Maybe<Offer_Var_Pop_Order_By>;
  var_samp?: Maybe<Offer_Var_Samp_Order_By>;
  variance?: Maybe<Offer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Offer" */
export type Offer_Arr_Rel_Insert_Input = {
  data: Array<Offer_Insert_Input>;
  on_conflict?: Maybe<Offer_On_Conflict>;
};

/** aggregate avg on columns */
export type Offer_Avg_Fields = {
   __typename?: 'Offer_avg_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Offer" */
export type Offer_Avg_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Offer". All fields are combined with a logical 'AND'. */
export type Offer_Bool_Exp = {
  Stock?: Maybe<Book_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Offer_Bool_Exp>>>;
  _not?: Maybe<Offer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Offer_Bool_Exp>>>;
  asin?: Maybe<String_Comparison_Exp>;
  inventory?: Maybe<Int_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  store_id?: Maybe<Int_Comparison_Exp>;
  warehouse_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Offer" */
export enum Offer_Constraint {
  /** unique or primary key constraint */
  OfferPkey = 'Offer_pkey'
}

/** input type for incrementing integer columne in table "Offer" */
export type Offer_Inc_Input = {
  inventory?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['Int']>;
  warehouse_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Offer" */
export type Offer_Insert_Input = {
  Stock?: Maybe<Book_Obj_Rel_Insert_Input>;
  asin?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  store_id?: Maybe<Scalars['Int']>;
  warehouse_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Offer_Max_Fields = {
   __typename?: 'Offer_max_fields';
  asin?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  store_id?: Maybe<Scalars['Int']>;
  warehouse_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Offer" */
export type Offer_Max_Order_By = {
  asin?: Maybe<Order_By>;
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Offer_Min_Fields = {
   __typename?: 'Offer_min_fields';
  asin?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  store_id?: Maybe<Scalars['Int']>;
  warehouse_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Offer" */
export type Offer_Min_Order_By = {
  asin?: Maybe<Order_By>;
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Offer" */
export type Offer_Mutation_Response = {
   __typename?: 'Offer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Offer>;
};

/** input type for inserting object relation for remote table "Offer" */
export type Offer_Obj_Rel_Insert_Input = {
  data: Offer_Insert_Input;
  on_conflict?: Maybe<Offer_On_Conflict>;
};

/** on conflict condition type for table "Offer" */
export type Offer_On_Conflict = {
  constraint: Offer_Constraint;
  update_columns: Array<Offer_Update_Column>;
  where?: Maybe<Offer_Bool_Exp>;
};

/** ordering options when selecting data from "Offer" */
export type Offer_Order_By = {
  Stock?: Maybe<Book_Order_By>;
  asin?: Maybe<Order_By>;
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** select columns of table "Offer" */
export enum Offer_Select_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Inventory = 'inventory',
  /** column name */
  Price = 'price',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** input type for updating data in table "Offer" */
export type Offer_Set_Input = {
  asin?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  store_id?: Maybe<Scalars['Int']>;
  warehouse_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Offer_Stddev_Fields = {
   __typename?: 'Offer_stddev_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Offer" */
export type Offer_Stddev_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Offer_Stddev_Pop_Fields = {
   __typename?: 'Offer_stddev_pop_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Offer" */
export type Offer_Stddev_Pop_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Offer_Stddev_Samp_Fields = {
   __typename?: 'Offer_stddev_samp_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Offer" */
export type Offer_Stddev_Samp_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Offer_Sum_Fields = {
   __typename?: 'Offer_sum_fields';
  inventory?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  store_id?: Maybe<Scalars['Int']>;
  warehouse_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Offer" */
export type Offer_Sum_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** update columns of table "Offer" */
export enum Offer_Update_Column {
  /** column name */
  Asin = 'asin',
  /** column name */
  Inventory = 'inventory',
  /** column name */
  Price = 'price',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  WarehouseId = 'warehouse_id'
}

/** aggregate var_pop on columns */
export type Offer_Var_Pop_Fields = {
   __typename?: 'Offer_var_pop_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Offer" */
export type Offer_Var_Pop_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Offer_Var_Samp_Fields = {
   __typename?: 'Offer_var_samp_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Offer" */
export type Offer_Var_Samp_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Offer_Variance_Fields = {
   __typename?: 'Offer_variance_fields';
  inventory?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  store_id?: Maybe<Scalars['Float']>;
  warehouse_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Offer" */
export type Offer_Variance_Order_By = {
  inventory?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  store_id?: Maybe<Order_By>;
  warehouse_id?: Maybe<Order_By>;
};

/** columns and relationships of "Order" */
export type Order = {
   __typename?: 'Order';
  address_id?: Maybe<Scalars['Int']>;
  asin: Scalars['String'];
  orderID: Scalars['String'];
  quantity: Scalars['Int'];
};

/** aggregated selection of "Order" */
export type Order_Aggregate = {
   __typename?: 'Order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "Order" */
export type Order_Aggregate_Fields = {
   __typename?: 'Order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "Order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Order" */
export type Order_Aggregate_Order_By = {
  avg?: Maybe<Order_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Max_Order_By>;
  min?: Maybe<Order_Min_Order_By>;
  stddev?: Maybe<Order_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Sum_Order_By>;
  var_pop?: Maybe<Order_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Var_Samp_Order_By>;
  variance?: Maybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  on_conflict?: Maybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
   __typename?: 'Order_avg_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Order" */
export type Order_Avg_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Bool_Exp>>>;
  _not?: Maybe<Order_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Bool_Exp>>>;
  address_id?: Maybe<Int_Comparison_Exp>;
  asin?: Maybe<String_Comparison_Exp>;
  orderID?: Maybe<String_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "Order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'Order_pkey'
}

/** input type for incrementing integer columne in table "Order" */
export type Order_Inc_Input = {
  address_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Order" */
export type Order_Insert_Input = {
  address_id?: Maybe<Scalars['Int']>;
  asin?: Maybe<Scalars['String']>;
  orderID?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
   __typename?: 'Order_max_fields';
  address_id?: Maybe<Scalars['Int']>;
  asin?: Maybe<Scalars['String']>;
  orderID?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Order" */
export type Order_Max_Order_By = {
  address_id?: Maybe<Order_By>;
  asin?: Maybe<Order_By>;
  orderID?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
   __typename?: 'Order_min_fields';
  address_id?: Maybe<Scalars['Int']>;
  asin?: Maybe<Scalars['String']>;
  orderID?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Order" */
export type Order_Min_Order_By = {
  address_id?: Maybe<Order_By>;
  asin?: Maybe<Order_By>;
  orderID?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** response of any mutation on the table "Order" */
export type Order_Mutation_Response = {
   __typename?: 'Order_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "Order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input;
  on_conflict?: Maybe<Order_On_Conflict>;
};

/** on conflict condition type for table "Order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns: Array<Order_Update_Column>;
  where?: Maybe<Order_Bool_Exp>;
};

/** ordering options when selecting data from "Order" */
export type Order_Order_By = {
  address_id?: Maybe<Order_By>;
  asin?: Maybe<Order_By>;
  orderID?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** select columns of table "Order" */
export enum Order_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Asin = 'asin',
  /** column name */
  OrderId = 'orderID',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "Order" */
export type Order_Set_Input = {
  address_id?: Maybe<Scalars['Int']>;
  asin?: Maybe<Scalars['String']>;
  orderID?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
   __typename?: 'Order_stddev_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Order" */
export type Order_Stddev_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
   __typename?: 'Order_stddev_pop_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Order" */
export type Order_Stddev_Pop_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
   __typename?: 'Order_stddev_samp_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Order" */
export type Order_Stddev_Samp_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
   __typename?: 'Order_sum_fields';
  address_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Order" */
export type Order_Sum_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "Order" */
export enum Order_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Asin = 'asin',
  /** column name */
  OrderId = 'orderID',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
   __typename?: 'Order_var_pop_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Order" */
export type Order_Var_Pop_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
   __typename?: 'Order_var_samp_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Order" */
export type Order_Var_Samp_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
   __typename?: 'Order_variance_fields';
  address_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Order" */
export type Order_Variance_Order_By = {
  address_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "PaymentInfo" */
export type PaymentInfo = {
   __typename?: 'PaymentInfo';
  creditCardNumber: Scalars['bpchar'];
  cvv?: Maybe<Scalars['bpchar']>;
  expirationDate?: Maybe<Scalars['bpchar']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "PaymentInfo" */
export type PaymentInfo_Aggregate = {
   __typename?: 'PaymentInfo_aggregate';
  aggregate?: Maybe<PaymentInfo_Aggregate_Fields>;
  nodes: Array<PaymentInfo>;
};

/** aggregate fields of "PaymentInfo" */
export type PaymentInfo_Aggregate_Fields = {
   __typename?: 'PaymentInfo_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PaymentInfo_Max_Fields>;
  min?: Maybe<PaymentInfo_Min_Fields>;
};


/** aggregate fields of "PaymentInfo" */
export type PaymentInfo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<PaymentInfo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "PaymentInfo" */
export type PaymentInfo_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<PaymentInfo_Max_Order_By>;
  min?: Maybe<PaymentInfo_Min_Order_By>;
};

/** input type for inserting array relation for remote table "PaymentInfo" */
export type PaymentInfo_Arr_Rel_Insert_Input = {
  data: Array<PaymentInfo_Insert_Input>;
  on_conflict?: Maybe<PaymentInfo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "PaymentInfo". All fields are combined with a logical 'AND'. */
export type PaymentInfo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<PaymentInfo_Bool_Exp>>>;
  _not?: Maybe<PaymentInfo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<PaymentInfo_Bool_Exp>>>;
  creditCardNumber?: Maybe<Bpchar_Comparison_Exp>;
  cvv?: Maybe<Bpchar_Comparison_Exp>;
  expirationDate?: Maybe<Bpchar_Comparison_Exp>;
  lastUsed?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "PaymentInfo" */
export enum PaymentInfo_Constraint {
  /** unique or primary key constraint */
  PaymentinfoPkey = 'Paymentinfo_pkey'
}

/** input type for inserting data into table "PaymentInfo" */
export type PaymentInfo_Insert_Input = {
  creditCardNumber?: Maybe<Scalars['bpchar']>;
  cvv?: Maybe<Scalars['bpchar']>;
  expirationDate?: Maybe<Scalars['bpchar']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PaymentInfo_Max_Fields = {
   __typename?: 'PaymentInfo_max_fields';
  lastUsed?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "PaymentInfo" */
export type PaymentInfo_Max_Order_By = {
  lastUsed?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PaymentInfo_Min_Fields = {
   __typename?: 'PaymentInfo_min_fields';
  lastUsed?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "PaymentInfo" */
export type PaymentInfo_Min_Order_By = {
  lastUsed?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "PaymentInfo" */
export type PaymentInfo_Mutation_Response = {
   __typename?: 'PaymentInfo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PaymentInfo>;
};

/** input type for inserting object relation for remote table "PaymentInfo" */
export type PaymentInfo_Obj_Rel_Insert_Input = {
  data: PaymentInfo_Insert_Input;
  on_conflict?: Maybe<PaymentInfo_On_Conflict>;
};

/** on conflict condition type for table "PaymentInfo" */
export type PaymentInfo_On_Conflict = {
  constraint: PaymentInfo_Constraint;
  update_columns: Array<PaymentInfo_Update_Column>;
  where?: Maybe<PaymentInfo_Bool_Exp>;
};

/** ordering options when selecting data from "PaymentInfo" */
export type PaymentInfo_Order_By = {
  creditCardNumber?: Maybe<Order_By>;
  cvv?: Maybe<Order_By>;
  expirationDate?: Maybe<Order_By>;
  lastUsed?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "PaymentInfo" */
export enum PaymentInfo_Select_Column {
  /** column name */
  CreditCardNumber = 'creditCardNumber',
  /** column name */
  Cvv = 'cvv',
  /** column name */
  ExpirationDate = 'expirationDate',
  /** column name */
  LastUsed = 'lastUsed',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "PaymentInfo" */
export type PaymentInfo_Set_Input = {
  creditCardNumber?: Maybe<Scalars['bpchar']>;
  cvv?: Maybe<Scalars['bpchar']>;
  expirationDate?: Maybe<Scalars['bpchar']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "PaymentInfo" */
export enum PaymentInfo_Update_Column {
  /** column name */
  CreditCardNumber = 'creditCardNumber',
  /** column name */
  Cvv = 'cvv',
  /** column name */
  ExpirationDate = 'expirationDate',
  /** column name */
  LastUsed = 'lastUsed',
  /** column name */
  UserId = 'user_id'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "Book" */
  Book: Array<Book>;
  /** fetch aggregated fields from the table: "Book" */
  Book_aggregate: Book_Aggregate;
  /** fetch data from the table: "Book" using primary key columns */
  Book_by_pk?: Maybe<Book>;
  /** fetch data from the table: "Offer" */
  Offer: Array<Offer>;
  /** fetch aggregated fields from the table: "Offer" */
  Offer_aggregate: Offer_Aggregate;
  /** fetch data from the table: "Offer" using primary key columns */
  Offer_by_pk?: Maybe<Offer>;
  /** fetch data from the table: "Order" */
  Order: Array<Order>;
  /** fetch aggregated fields from the table: "Order" */
  Order_aggregate: Order_Aggregate;
  /** fetch data from the table: "Order" using primary key columns */
  Order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "PaymentInfo" */
  PaymentInfo: Array<PaymentInfo>;
  /** fetch aggregated fields from the table: "PaymentInfo" */
  PaymentInfo_aggregate: PaymentInfo_Aggregate;
  /** fetch data from the table: "PaymentInfo" using primary key columns */
  PaymentInfo_by_pk?: Maybe<PaymentInfo>;
  /** fetch data from the table: "ShippingAddress" */
  ShippingAddress: Array<ShippingAddress>;
  /** fetch aggregated fields from the table: "ShippingAddress" */
  ShippingAddress_aggregate: ShippingAddress_Aggregate;
  /** fetch data from the table: "ShippingAddress" using primary key columns */
  ShippingAddress_by_pk?: Maybe<ShippingAddress>;
  /** fetch data from the table: "Store" */
  Store: Array<Store>;
  /** fetch aggregated fields from the table: "Store" */
  Store_aggregate: Store_Aggregate;
  /** fetch data from the table: "Store" using primary key columns */
  Store_by_pk?: Maybe<Store>;
  /** fetch data from the table: "final.author" */
  final_author: Array<Final_Author>;
  /** fetch aggregated fields from the table: "final.author" */
  final_author_aggregate: Final_Author_Aggregate;
  /** fetch data from the table: "final.author" using primary key columns */
  final_author_by_pk?: Maybe<Final_Author>;
  /** fetch data from the table: "final.book" */
  final_book: Array<Final_Book>;
  /** fetch aggregated fields from the table: "final.book" */
  final_book_aggregate: Final_Book_Aggregate;
  /** fetch data from the table: "final.book" using primary key columns */
  final_book_by_pk?: Maybe<Final_Book>;
  /** fetch data from the table: "final.cardholder" */
  final_cardholder: Array<Final_Cardholder>;
  /** fetch aggregated fields from the table: "final.cardholder" */
  final_cardholder_aggregate: Final_Cardholder_Aggregate;
  /** fetch data from the table: "final.cardholder" using primary key columns */
  final_cardholder_by_pk?: Maybe<Final_Cardholder>;
  /** fetch data from the table: "final.customer" */
  final_customer: Array<Final_Customer>;
  /** fetch aggregated fields from the table: "final.customer" */
  final_customer_aggregate: Final_Customer_Aggregate;
  /** fetch data from the table: "final.customer" using primary key columns */
  final_customer_by_pk?: Maybe<Final_Customer>;
  /** fetch data from the table: "final.household" */
  final_household: Array<Final_Household>;
  /** fetch aggregated fields from the table: "final.household" */
  final_household_aggregate: Final_Household_Aggregate;
  /** fetch data from the table: "final.household" using primary key columns */
  final_household_by_pk?: Maybe<Final_Household>;
  /** fetch data from the table: "final.paymentmethod" */
  final_paymentmethod: Array<Final_Paymentmethod>;
  /** fetch aggregated fields from the table: "final.paymentmethod" */
  final_paymentmethod_aggregate: Final_Paymentmethod_Aggregate;
  /** fetch data from the table: "final.paymentmethod" using primary key columns */
  final_paymentmethod_by_pk?: Maybe<Final_Paymentmethod>;
  /** fetch data from the table: "final.phonenumber" */
  final_phonenumber: Array<Final_Phonenumber>;
  /** fetch aggregated fields from the table: "final.phonenumber" */
  final_phonenumber_aggregate: Final_Phonenumber_Aggregate;
  /** fetch data from the table: "final.phonenumber" using primary key columns */
  final_phonenumber_by_pk?: Maybe<Final_Phonenumber>;
  /** fetch data from the table: "final.publisher" */
  final_publisher: Array<Final_Publisher>;
  /** fetch aggregated fields from the table: "final.publisher" */
  final_publisher_aggregate: Final_Publisher_Aggregate;
  /** fetch data from the table: "final.publisher" using primary key columns */
  final_publisher_by_pk?: Maybe<Final_Publisher>;
  /** fetch data from the table: "final.purchase" */
  final_purchase: Array<Final_Purchase>;
  /** fetch aggregated fields from the table: "final.purchase" */
  final_purchase_aggregate: Final_Purchase_Aggregate;
  /** fetch data from the table: "final.purchase" using primary key columns */
  final_purchase_by_pk?: Maybe<Final_Purchase>;
  /** fetch data from the table: "final.purchaseditem" */
  final_purchaseditem: Array<Final_Purchaseditem>;
  /** fetch aggregated fields from the table: "final.purchaseditem" */
  final_purchaseditem_aggregate: Final_Purchaseditem_Aggregate;
  /** fetch data from the table: "final.purchaseditem" using primary key columns */
  final_purchaseditem_by_pk?: Maybe<Final_Purchaseditem>;
  /** fetch data from the table: "final.residentialaddress" */
  final_residentialaddress: Array<Final_Residentialaddress>;
  /** fetch aggregated fields from the table: "final.residentialaddress" */
  final_residentialaddress_aggregate: Final_Residentialaddress_Aggregate;
  /** fetch data from the table: "final.residentialaddress" using primary key columns */
  final_residentialaddress_by_pk?: Maybe<Final_Residentialaddress>;
  /** fetch data from the table: "final.shipment" */
  final_shipment: Array<Final_Shipment>;
  /** fetch aggregated fields from the table: "final.shipment" */
  final_shipment_aggregate: Final_Shipment_Aggregate;
  /** fetch data from the table: "final.shipment" using primary key columns */
  final_shipment_by_pk?: Maybe<Final_Shipment>;
  /** fetch data from the table: "final.writtenby" */
  final_writtenby: Array<Final_Writtenby>;
  /** fetch aggregated fields from the table: "final.writtenby" */
  final_writtenby_aggregate: Final_Writtenby_Aggregate;
  /** fetch data from the table: "final.writtenby" using primary key columns */
  final_writtenby_by_pk?: Maybe<Final_Writtenby>;
};


/** query root */
export type Query_RootBookArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** query root */
export type Query_RootBook_AggregateArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** query root */
export type Query_RootBook_By_PkArgs = {
  asin: Scalars['String'];
};


/** query root */
export type Query_RootOfferArgs = {
  distinct_on?: Maybe<Array<Offer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offer_Order_By>>;
  where?: Maybe<Offer_Bool_Exp>;
};


/** query root */
export type Query_RootOffer_AggregateArgs = {
  distinct_on?: Maybe<Array<Offer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offer_Order_By>>;
  where?: Maybe<Offer_Bool_Exp>;
};


/** query root */
export type Query_RootOffer_By_PkArgs = {
  asin: Scalars['String'];
  store_id: Scalars['Int'];
};


/** query root */
export type Query_RootOrderArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_By_PkArgs = {
  asin: Scalars['String'];
  orderID: Scalars['String'];
};


/** query root */
export type Query_RootPaymentInfoArgs = {
  distinct_on?: Maybe<Array<PaymentInfo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentInfo_Order_By>>;
  where?: Maybe<PaymentInfo_Bool_Exp>;
};


/** query root */
export type Query_RootPaymentInfo_AggregateArgs = {
  distinct_on?: Maybe<Array<PaymentInfo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentInfo_Order_By>>;
  where?: Maybe<PaymentInfo_Bool_Exp>;
};


/** query root */
export type Query_RootPaymentInfo_By_PkArgs = {
  creditCardNumber: Scalars['bpchar'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootShippingAddressArgs = {
  distinct_on?: Maybe<Array<ShippingAddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShippingAddress_Order_By>>;
  where?: Maybe<ShippingAddress_Bool_Exp>;
};


/** query root */
export type Query_RootShippingAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<ShippingAddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShippingAddress_Order_By>>;
  where?: Maybe<ShippingAddress_Bool_Exp>;
};


/** query root */
export type Query_RootShippingAddress_By_PkArgs = {
  address_id: Scalars['Int'];
};


/** query root */
export type Query_RootStoreArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


/** query root */
export type Query_RootStore_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


/** query root */
export type Query_RootStore_By_PkArgs = {
  store_id: Scalars['Int'];
};


/** query root */
export type Query_RootFinal_AuthorArgs = {
  distinct_on?: Maybe<Array<Final_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Author_Order_By>>;
  where?: Maybe<Final_Author_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Author_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Author_Order_By>>;
  where?: Maybe<Final_Author_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Author_By_PkArgs = {
  authorid: Scalars['Int'];
};


/** query root */
export type Query_RootFinal_BookArgs = {
  distinct_on?: Maybe<Array<Final_Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Book_Order_By>>;
  where?: Maybe<Final_Book_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Book_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Book_Order_By>>;
  where?: Maybe<Final_Book_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Book_By_PkArgs = {
  asin: Scalars['bpchar'];
};


/** query root */
export type Query_RootFinal_CardholderArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Cardholder_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Cardholder_By_PkArgs = {
  cardnumber: Scalars['bpchar'];
  userid: Scalars['String'];
};


/** query root */
export type Query_RootFinal_CustomerArgs = {
  distinct_on?: Maybe<Array<Final_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Customer_Order_By>>;
  where?: Maybe<Final_Customer_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Customer_Order_By>>;
  where?: Maybe<Final_Customer_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Customer_By_PkArgs = {
  userid: Scalars['String'];
};


/** query root */
export type Query_RootFinal_HouseholdArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Household_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Household_By_PkArgs = {
  residenceid: Scalars['Int'];
  userid: Scalars['String'];
};


/** query root */
export type Query_RootFinal_PaymentmethodArgs = {
  distinct_on?: Maybe<Array<Final_Paymentmethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Paymentmethod_Order_By>>;
  where?: Maybe<Final_Paymentmethod_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Paymentmethod_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Paymentmethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Paymentmethod_Order_By>>;
  where?: Maybe<Final_Paymentmethod_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Paymentmethod_By_PkArgs = {
  cardnumber: Scalars['bpchar'];
};


/** query root */
export type Query_RootFinal_PhonenumberArgs = {
  distinct_on?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Phonenumber_Order_By>>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Phonenumber_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Phonenumber_Order_By>>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Phonenumber_By_PkArgs = {
  phonenumber: Scalars['String'];
};


/** query root */
export type Query_RootFinal_PublisherArgs = {
  distinct_on?: Maybe<Array<Final_Publisher_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Publisher_Order_By>>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Publisher_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Publisher_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Publisher_Order_By>>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Publisher_By_PkArgs = {
  publisherid: Scalars['Int'];
};


/** query root */
export type Query_RootFinal_PurchaseArgs = {
  distinct_on?: Maybe<Array<Final_Purchase_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchase_Order_By>>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Purchase_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Purchase_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchase_Order_By>>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Purchase_By_PkArgs = {
  orderid: Scalars['String'];
};


/** query root */
export type Query_RootFinal_PurchaseditemArgs = {
  distinct_on?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchaseditem_Order_By>>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Purchaseditem_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchaseditem_Order_By>>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Purchaseditem_By_PkArgs = {
  asin: Scalars['bpchar'];
  orderid: Scalars['String'];
};


/** query root */
export type Query_RootFinal_ResidentialaddressArgs = {
  distinct_on?: Maybe<Array<Final_Residentialaddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Residentialaddress_Order_By>>;
  where?: Maybe<Final_Residentialaddress_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Residentialaddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Residentialaddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Residentialaddress_Order_By>>;
  where?: Maybe<Final_Residentialaddress_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Residentialaddress_By_PkArgs = {
  residenceid: Scalars['Int'];
};


/** query root */
export type Query_RootFinal_ShipmentArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Shipment_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Shipment_By_PkArgs = {
  trackingid: Scalars['String'];
};


/** query root */
export type Query_RootFinal_WrittenbyArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Writtenby_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};


/** query root */
export type Query_RootFinal_Writtenby_By_PkArgs = {
  asin: Scalars['String'];
  authorid: Scalars['bigint'];
};

/**
 * ShippingAddress
 * 
 * 
 * columns and relationships of "ShippingAddress"
 */
export type ShippingAddress = {
   __typename?: 'ShippingAddress';
  address_id: Scalars['Int'];
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "ShippingAddress" */
export type ShippingAddress_Aggregate = {
   __typename?: 'ShippingAddress_aggregate';
  aggregate?: Maybe<ShippingAddress_Aggregate_Fields>;
  nodes: Array<ShippingAddress>;
};

/** aggregate fields of "ShippingAddress" */
export type ShippingAddress_Aggregate_Fields = {
   __typename?: 'ShippingAddress_aggregate_fields';
  avg?: Maybe<ShippingAddress_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ShippingAddress_Max_Fields>;
  min?: Maybe<ShippingAddress_Min_Fields>;
  stddev?: Maybe<ShippingAddress_Stddev_Fields>;
  stddev_pop?: Maybe<ShippingAddress_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ShippingAddress_Stddev_Samp_Fields>;
  sum?: Maybe<ShippingAddress_Sum_Fields>;
  var_pop?: Maybe<ShippingAddress_Var_Pop_Fields>;
  var_samp?: Maybe<ShippingAddress_Var_Samp_Fields>;
  variance?: Maybe<ShippingAddress_Variance_Fields>;
};


/** aggregate fields of "ShippingAddress" */
export type ShippingAddress_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ShippingAddress_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ShippingAddress" */
export type ShippingAddress_Aggregate_Order_By = {
  avg?: Maybe<ShippingAddress_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ShippingAddress_Max_Order_By>;
  min?: Maybe<ShippingAddress_Min_Order_By>;
  stddev?: Maybe<ShippingAddress_Stddev_Order_By>;
  stddev_pop?: Maybe<ShippingAddress_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ShippingAddress_Stddev_Samp_Order_By>;
  sum?: Maybe<ShippingAddress_Sum_Order_By>;
  var_pop?: Maybe<ShippingAddress_Var_Pop_Order_By>;
  var_samp?: Maybe<ShippingAddress_Var_Samp_Order_By>;
  variance?: Maybe<ShippingAddress_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ShippingAddress" */
export type ShippingAddress_Arr_Rel_Insert_Input = {
  data: Array<ShippingAddress_Insert_Input>;
  on_conflict?: Maybe<ShippingAddress_On_Conflict>;
};

/** aggregate avg on columns */
export type ShippingAddress_Avg_Fields = {
   __typename?: 'ShippingAddress_avg_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ShippingAddress" */
export type ShippingAddress_Avg_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ShippingAddress". All fields are combined with a logical 'AND'. */
export type ShippingAddress_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ShippingAddress_Bool_Exp>>>;
  _not?: Maybe<ShippingAddress_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ShippingAddress_Bool_Exp>>>;
  address_id?: Maybe<Int_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  lastUsed?: Maybe<Timestamptz_Comparison_Exp>;
  postalCode?: Maybe<String_Comparison_Exp>;
  province?: Maybe<String_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ShippingAddress" */
export enum ShippingAddress_Constraint {
  /** unique or primary key constraint */
  AddressAddressIdKey = 'Address_address_id_key',
  /** unique or primary key constraint */
  AddressOwnerIdKey = 'Address_owner_id_key',
  /** unique or primary key constraint */
  AddressPkey = 'Address_pkey'
}

/** input type for incrementing integer columne in table "ShippingAddress" */
export type ShippingAddress_Inc_Input = {
  address_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ShippingAddress" */
export type ShippingAddress_Insert_Input = {
  address_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ShippingAddress_Max_Fields = {
   __typename?: 'ShippingAddress_max_fields';
  address_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ShippingAddress" */
export type ShippingAddress_Max_Order_By = {
  address_id?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  lastUsed?: Maybe<Order_By>;
  postalCode?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ShippingAddress_Min_Fields = {
   __typename?: 'ShippingAddress_min_fields';
  address_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ShippingAddress" */
export type ShippingAddress_Min_Order_By = {
  address_id?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  lastUsed?: Maybe<Order_By>;
  postalCode?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "ShippingAddress" */
export type ShippingAddress_Mutation_Response = {
   __typename?: 'ShippingAddress_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ShippingAddress>;
};

/** input type for inserting object relation for remote table "ShippingAddress" */
export type ShippingAddress_Obj_Rel_Insert_Input = {
  data: ShippingAddress_Insert_Input;
  on_conflict?: Maybe<ShippingAddress_On_Conflict>;
};

/** on conflict condition type for table "ShippingAddress" */
export type ShippingAddress_On_Conflict = {
  constraint: ShippingAddress_Constraint;
  update_columns: Array<ShippingAddress_Update_Column>;
  where?: Maybe<ShippingAddress_Bool_Exp>;
};

/** ordering options when selecting data from "ShippingAddress" */
export type ShippingAddress_Order_By = {
  address_id?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  lastUsed?: Maybe<Order_By>;
  postalCode?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "ShippingAddress" */
export enum ShippingAddress_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LastUsed = 'lastUsed',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  Province = 'province',
  /** column name */
  Street = 'street',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "ShippingAddress" */
export type ShippingAddress_Set_Input = {
  address_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastUsed?: Maybe<Scalars['timestamptz']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ShippingAddress_Stddev_Fields = {
   __typename?: 'ShippingAddress_stddev_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ShippingAddress" */
export type ShippingAddress_Stddev_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ShippingAddress_Stddev_Pop_Fields = {
   __typename?: 'ShippingAddress_stddev_pop_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ShippingAddress" */
export type ShippingAddress_Stddev_Pop_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ShippingAddress_Stddev_Samp_Fields = {
   __typename?: 'ShippingAddress_stddev_samp_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ShippingAddress" */
export type ShippingAddress_Stddev_Samp_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ShippingAddress_Sum_Fields = {
   __typename?: 'ShippingAddress_sum_fields';
  address_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ShippingAddress" */
export type ShippingAddress_Sum_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** update columns of table "ShippingAddress" */
export enum ShippingAddress_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LastUsed = 'lastUsed',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  Province = 'province',
  /** column name */
  Street = 'street',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type ShippingAddress_Var_Pop_Fields = {
   __typename?: 'ShippingAddress_var_pop_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ShippingAddress" */
export type ShippingAddress_Var_Pop_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ShippingAddress_Var_Samp_Fields = {
   __typename?: 'ShippingAddress_var_samp_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ShippingAddress" */
export type ShippingAddress_Var_Samp_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ShippingAddress_Variance_Fields = {
   __typename?: 'ShippingAddress_variance_fields';
  address_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ShippingAddress" */
export type ShippingAddress_Variance_Order_By = {
  address_id?: Maybe<Order_By>;
};

/** columns and relationships of "Store" */
export type Store = {
   __typename?: 'Store';
  store_id: Scalars['Int'];
  store_name: Scalars['String'];
  user_id: Scalars['String'];
};

/** aggregated selection of "Store" */
export type Store_Aggregate = {
   __typename?: 'Store_aggregate';
  aggregate?: Maybe<Store_Aggregate_Fields>;
  nodes: Array<Store>;
};

/** aggregate fields of "Store" */
export type Store_Aggregate_Fields = {
   __typename?: 'Store_aggregate_fields';
  avg?: Maybe<Store_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Store_Max_Fields>;
  min?: Maybe<Store_Min_Fields>;
  stddev?: Maybe<Store_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Sum_Fields>;
  var_pop?: Maybe<Store_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Var_Samp_Fields>;
  variance?: Maybe<Store_Variance_Fields>;
};


/** aggregate fields of "Store" */
export type Store_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Store_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Store" */
export type Store_Aggregate_Order_By = {
  avg?: Maybe<Store_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Store_Max_Order_By>;
  min?: Maybe<Store_Min_Order_By>;
  stddev?: Maybe<Store_Stddev_Order_By>;
  stddev_pop?: Maybe<Store_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Store_Stddev_Samp_Order_By>;
  sum?: Maybe<Store_Sum_Order_By>;
  var_pop?: Maybe<Store_Var_Pop_Order_By>;
  var_samp?: Maybe<Store_Var_Samp_Order_By>;
  variance?: Maybe<Store_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Store" */
export type Store_Arr_Rel_Insert_Input = {
  data: Array<Store_Insert_Input>;
  on_conflict?: Maybe<Store_On_Conflict>;
};

/** aggregate avg on columns */
export type Store_Avg_Fields = {
   __typename?: 'Store_avg_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Store" */
export type Store_Avg_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Store". All fields are combined with a logical 'AND'. */
export type Store_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Store_Bool_Exp>>>;
  _not?: Maybe<Store_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Store_Bool_Exp>>>;
  store_id?: Maybe<Int_Comparison_Exp>;
  store_name?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Store" */
export enum Store_Constraint {
  /** unique or primary key constraint */
  StorePkey = 'Store_pkey'
}

/** input type for incrementing integer columne in table "Store" */
export type Store_Inc_Input = {
  store_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Store" */
export type Store_Insert_Input = {
  store_id?: Maybe<Scalars['Int']>;
  store_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Store_Max_Fields = {
   __typename?: 'Store_max_fields';
  store_id?: Maybe<Scalars['Int']>;
  store_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Store" */
export type Store_Max_Order_By = {
  store_id?: Maybe<Order_By>;
  store_name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Store_Min_Fields = {
   __typename?: 'Store_min_fields';
  store_id?: Maybe<Scalars['Int']>;
  store_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Store" */
export type Store_Min_Order_By = {
  store_id?: Maybe<Order_By>;
  store_name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Store" */
export type Store_Mutation_Response = {
   __typename?: 'Store_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Store>;
};

/** input type for inserting object relation for remote table "Store" */
export type Store_Obj_Rel_Insert_Input = {
  data: Store_Insert_Input;
  on_conflict?: Maybe<Store_On_Conflict>;
};

/** on conflict condition type for table "Store" */
export type Store_On_Conflict = {
  constraint: Store_Constraint;
  update_columns: Array<Store_Update_Column>;
  where?: Maybe<Store_Bool_Exp>;
};

/** ordering options when selecting data from "Store" */
export type Store_Order_By = {
  store_id?: Maybe<Order_By>;
  store_name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "Store" */
export enum Store_Select_Column {
  /** column name */
  StoreId = 'store_id',
  /** column name */
  StoreName = 'store_name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Store" */
export type Store_Set_Input = {
  store_id?: Maybe<Scalars['Int']>;
  store_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Store_Stddev_Fields = {
   __typename?: 'Store_stddev_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Store" */
export type Store_Stddev_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Store_Stddev_Pop_Fields = {
   __typename?: 'Store_stddev_pop_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Store" */
export type Store_Stddev_Pop_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Store_Stddev_Samp_Fields = {
   __typename?: 'Store_stddev_samp_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Store" */
export type Store_Stddev_Samp_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Store_Sum_Fields = {
   __typename?: 'Store_sum_fields';
  store_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Store" */
export type Store_Sum_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** update columns of table "Store" */
export enum Store_Update_Column {
  /** column name */
  StoreId = 'store_id',
  /** column name */
  StoreName = 'store_name',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Store_Var_Pop_Fields = {
   __typename?: 'Store_var_pop_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Store" */
export type Store_Var_Pop_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Store_Var_Samp_Fields = {
   __typename?: 'Store_var_samp_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Store" */
export type Store_Var_Samp_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Store_Variance_Fields = {
   __typename?: 'Store_variance_fields';
  store_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Store" */
export type Store_Variance_Order_By = {
  store_id?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "Book" */
  Book: Array<Book>;
  /** fetch aggregated fields from the table: "Book" */
  Book_aggregate: Book_Aggregate;
  /** fetch data from the table: "Book" using primary key columns */
  Book_by_pk?: Maybe<Book>;
  /** fetch data from the table: "Offer" */
  Offer: Array<Offer>;
  /** fetch aggregated fields from the table: "Offer" */
  Offer_aggregate: Offer_Aggregate;
  /** fetch data from the table: "Offer" using primary key columns */
  Offer_by_pk?: Maybe<Offer>;
  /** fetch data from the table: "Order" */
  Order: Array<Order>;
  /** fetch aggregated fields from the table: "Order" */
  Order_aggregate: Order_Aggregate;
  /** fetch data from the table: "Order" using primary key columns */
  Order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "PaymentInfo" */
  PaymentInfo: Array<PaymentInfo>;
  /** fetch aggregated fields from the table: "PaymentInfo" */
  PaymentInfo_aggregate: PaymentInfo_Aggregate;
  /** fetch data from the table: "PaymentInfo" using primary key columns */
  PaymentInfo_by_pk?: Maybe<PaymentInfo>;
  /** fetch data from the table: "ShippingAddress" */
  ShippingAddress: Array<ShippingAddress>;
  /** fetch aggregated fields from the table: "ShippingAddress" */
  ShippingAddress_aggregate: ShippingAddress_Aggregate;
  /** fetch data from the table: "ShippingAddress" using primary key columns */
  ShippingAddress_by_pk?: Maybe<ShippingAddress>;
  /** fetch data from the table: "Store" */
  Store: Array<Store>;
  /** fetch aggregated fields from the table: "Store" */
  Store_aggregate: Store_Aggregate;
  /** fetch data from the table: "Store" using primary key columns */
  Store_by_pk?: Maybe<Store>;
  /** fetch data from the table: "final.author" */
  final_author: Array<Final_Author>;
  /** fetch aggregated fields from the table: "final.author" */
  final_author_aggregate: Final_Author_Aggregate;
  /** fetch data from the table: "final.author" using primary key columns */
  final_author_by_pk?: Maybe<Final_Author>;
  /** fetch data from the table: "final.book" */
  final_book: Array<Final_Book>;
  /** fetch aggregated fields from the table: "final.book" */
  final_book_aggregate: Final_Book_Aggregate;
  /** fetch data from the table: "final.book" using primary key columns */
  final_book_by_pk?: Maybe<Final_Book>;
  /** fetch data from the table: "final.cardholder" */
  final_cardholder: Array<Final_Cardholder>;
  /** fetch aggregated fields from the table: "final.cardholder" */
  final_cardholder_aggregate: Final_Cardholder_Aggregate;
  /** fetch data from the table: "final.cardholder" using primary key columns */
  final_cardholder_by_pk?: Maybe<Final_Cardholder>;
  /** fetch data from the table: "final.customer" */
  final_customer: Array<Final_Customer>;
  /** fetch aggregated fields from the table: "final.customer" */
  final_customer_aggregate: Final_Customer_Aggregate;
  /** fetch data from the table: "final.customer" using primary key columns */
  final_customer_by_pk?: Maybe<Final_Customer>;
  /** fetch data from the table: "final.household" */
  final_household: Array<Final_Household>;
  /** fetch aggregated fields from the table: "final.household" */
  final_household_aggregate: Final_Household_Aggregate;
  /** fetch data from the table: "final.household" using primary key columns */
  final_household_by_pk?: Maybe<Final_Household>;
  /** fetch data from the table: "final.paymentmethod" */
  final_paymentmethod: Array<Final_Paymentmethod>;
  /** fetch aggregated fields from the table: "final.paymentmethod" */
  final_paymentmethod_aggregate: Final_Paymentmethod_Aggregate;
  /** fetch data from the table: "final.paymentmethod" using primary key columns */
  final_paymentmethod_by_pk?: Maybe<Final_Paymentmethod>;
  /** fetch data from the table: "final.phonenumber" */
  final_phonenumber: Array<Final_Phonenumber>;
  /** fetch aggregated fields from the table: "final.phonenumber" */
  final_phonenumber_aggregate: Final_Phonenumber_Aggregate;
  /** fetch data from the table: "final.phonenumber" using primary key columns */
  final_phonenumber_by_pk?: Maybe<Final_Phonenumber>;
  /** fetch data from the table: "final.publisher" */
  final_publisher: Array<Final_Publisher>;
  /** fetch aggregated fields from the table: "final.publisher" */
  final_publisher_aggregate: Final_Publisher_Aggregate;
  /** fetch data from the table: "final.publisher" using primary key columns */
  final_publisher_by_pk?: Maybe<Final_Publisher>;
  /** fetch data from the table: "final.purchase" */
  final_purchase: Array<Final_Purchase>;
  /** fetch aggregated fields from the table: "final.purchase" */
  final_purchase_aggregate: Final_Purchase_Aggregate;
  /** fetch data from the table: "final.purchase" using primary key columns */
  final_purchase_by_pk?: Maybe<Final_Purchase>;
  /** fetch data from the table: "final.purchaseditem" */
  final_purchaseditem: Array<Final_Purchaseditem>;
  /** fetch aggregated fields from the table: "final.purchaseditem" */
  final_purchaseditem_aggregate: Final_Purchaseditem_Aggregate;
  /** fetch data from the table: "final.purchaseditem" using primary key columns */
  final_purchaseditem_by_pk?: Maybe<Final_Purchaseditem>;
  /** fetch data from the table: "final.residentialaddress" */
  final_residentialaddress: Array<Final_Residentialaddress>;
  /** fetch aggregated fields from the table: "final.residentialaddress" */
  final_residentialaddress_aggregate: Final_Residentialaddress_Aggregate;
  /** fetch data from the table: "final.residentialaddress" using primary key columns */
  final_residentialaddress_by_pk?: Maybe<Final_Residentialaddress>;
  /** fetch data from the table: "final.shipment" */
  final_shipment: Array<Final_Shipment>;
  /** fetch aggregated fields from the table: "final.shipment" */
  final_shipment_aggregate: Final_Shipment_Aggregate;
  /** fetch data from the table: "final.shipment" using primary key columns */
  final_shipment_by_pk?: Maybe<Final_Shipment>;
  /** fetch data from the table: "final.writtenby" */
  final_writtenby: Array<Final_Writtenby>;
  /** fetch aggregated fields from the table: "final.writtenby" */
  final_writtenby_aggregate: Final_Writtenby_Aggregate;
  /** fetch data from the table: "final.writtenby" using primary key columns */
  final_writtenby_by_pk?: Maybe<Final_Writtenby>;
};


/** subscription root */
export type Subscription_RootBookArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBook_AggregateArgs = {
  distinct_on?: Maybe<Array<Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Book_Order_By>>;
  where?: Maybe<Book_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBook_By_PkArgs = {
  asin: Scalars['String'];
};


/** subscription root */
export type Subscription_RootOfferArgs = {
  distinct_on?: Maybe<Array<Offer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offer_Order_By>>;
  where?: Maybe<Offer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffer_AggregateArgs = {
  distinct_on?: Maybe<Array<Offer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offer_Order_By>>;
  where?: Maybe<Offer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffer_By_PkArgs = {
  asin: Scalars['String'];
  store_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrderArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Order_By>>;
  where?: Maybe<Order_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_By_PkArgs = {
  asin: Scalars['String'];
  orderID: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPaymentInfoArgs = {
  distinct_on?: Maybe<Array<PaymentInfo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentInfo_Order_By>>;
  where?: Maybe<PaymentInfo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPaymentInfo_AggregateArgs = {
  distinct_on?: Maybe<Array<PaymentInfo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PaymentInfo_Order_By>>;
  where?: Maybe<PaymentInfo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPaymentInfo_By_PkArgs = {
  creditCardNumber: Scalars['bpchar'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootShippingAddressArgs = {
  distinct_on?: Maybe<Array<ShippingAddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShippingAddress_Order_By>>;
  where?: Maybe<ShippingAddress_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootShippingAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<ShippingAddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShippingAddress_Order_By>>;
  where?: Maybe<ShippingAddress_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootShippingAddress_By_PkArgs = {
  address_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStoreArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStore_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Order_By>>;
  where?: Maybe<Store_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStore_By_PkArgs = {
  store_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFinal_AuthorArgs = {
  distinct_on?: Maybe<Array<Final_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Author_Order_By>>;
  where?: Maybe<Final_Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Author_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Author_Order_By>>;
  where?: Maybe<Final_Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Author_By_PkArgs = {
  authorid: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFinal_BookArgs = {
  distinct_on?: Maybe<Array<Final_Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Book_Order_By>>;
  where?: Maybe<Final_Book_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Book_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Book_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Book_Order_By>>;
  where?: Maybe<Final_Book_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Book_By_PkArgs = {
  asin: Scalars['bpchar'];
};


/** subscription root */
export type Subscription_RootFinal_CardholderArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Cardholder_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Cardholder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Cardholder_Order_By>>;
  where?: Maybe<Final_Cardholder_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Cardholder_By_PkArgs = {
  cardnumber: Scalars['bpchar'];
  userid: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_CustomerArgs = {
  distinct_on?: Maybe<Array<Final_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Customer_Order_By>>;
  where?: Maybe<Final_Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Customer_Order_By>>;
  where?: Maybe<Final_Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Customer_By_PkArgs = {
  userid: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_HouseholdArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Household_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Household_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Household_Order_By>>;
  where?: Maybe<Final_Household_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Household_By_PkArgs = {
  residenceid: Scalars['Int'];
  userid: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_PaymentmethodArgs = {
  distinct_on?: Maybe<Array<Final_Paymentmethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Paymentmethod_Order_By>>;
  where?: Maybe<Final_Paymentmethod_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Paymentmethod_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Paymentmethod_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Paymentmethod_Order_By>>;
  where?: Maybe<Final_Paymentmethod_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Paymentmethod_By_PkArgs = {
  cardnumber: Scalars['bpchar'];
};


/** subscription root */
export type Subscription_RootFinal_PhonenumberArgs = {
  distinct_on?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Phonenumber_Order_By>>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Phonenumber_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Phonenumber_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Phonenumber_Order_By>>;
  where?: Maybe<Final_Phonenumber_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Phonenumber_By_PkArgs = {
  phonenumber: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_PublisherArgs = {
  distinct_on?: Maybe<Array<Final_Publisher_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Publisher_Order_By>>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Publisher_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Publisher_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Publisher_Order_By>>;
  where?: Maybe<Final_Publisher_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Publisher_By_PkArgs = {
  publisherid: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFinal_PurchaseArgs = {
  distinct_on?: Maybe<Array<Final_Purchase_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchase_Order_By>>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Purchase_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Purchase_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchase_Order_By>>;
  where?: Maybe<Final_Purchase_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Purchase_By_PkArgs = {
  orderid: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_PurchaseditemArgs = {
  distinct_on?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchaseditem_Order_By>>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Purchaseditem_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Purchaseditem_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Purchaseditem_Order_By>>;
  where?: Maybe<Final_Purchaseditem_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Purchaseditem_By_PkArgs = {
  asin: Scalars['bpchar'];
  orderid: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_ResidentialaddressArgs = {
  distinct_on?: Maybe<Array<Final_Residentialaddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Residentialaddress_Order_By>>;
  where?: Maybe<Final_Residentialaddress_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Residentialaddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Residentialaddress_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Residentialaddress_Order_By>>;
  where?: Maybe<Final_Residentialaddress_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Residentialaddress_By_PkArgs = {
  residenceid: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFinal_ShipmentArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Shipment_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Shipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Shipment_Order_By>>;
  where?: Maybe<Final_Shipment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Shipment_By_PkArgs = {
  trackingid: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFinal_WrittenbyArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Writtenby_AggregateArgs = {
  distinct_on?: Maybe<Array<Final_Writtenby_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Final_Writtenby_Order_By>>;
  where?: Maybe<Final_Writtenby_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFinal_Writtenby_By_PkArgs = {
  asin: Scalars['String'];
  authorid: Scalars['bigint'];
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * One possible value for a given Enum. Enum values are unique values, not a
 * placeholder for a string or numeric value. However an Enum value is returned in
 * a JSON response as a string.
 */
export type __EnumValue = {
   __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * Object and Interface types are described by a list of Fields, each of which has
 * a name, potentially a list of arguments, and a return type.
 */
export type __Field = {
   __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * Arguments provided to Fields or Directives and the input fields of an
 * InputObject are represented as Input Values which describe their type and
 * optionally a default value.
 */
export type __InputValue = {
   __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 * 
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
   __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 * 
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of
 * types in GraphQL as represented by the `__TypeKind` enum.
 * 
 * Depending on the kind of a type, certain fields describe information about that
 * type. Scalar types provide no information beyond a name and description, while
 * Enum types provide their values. Object and Interface types provide the fields
 * they describe. Abstract types, Union and Interface, provide the Object types
 * possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields` and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

export type BookAttributesFragment = (
  { __typename?: 'final_book' }
  & Pick<Final_Book, 'asin' | 'category' | 'coverurl' | 'inventory' | 'pages' | 'price' | 'title'>
  & { authors: Array<(
    { __typename?: 'final_writtenby' }
    & { AuthoredBook: (
      { __typename?: 'final_author' }
      & Pick<Final_Author, 'fullname'>
    ) }
  )> }
);

export type SubmitOrderMutationVariables = {
  order: Array<Final_Purchase_Insert_Input>;
  items: Array<Final_Purchaseditem_Insert_Input>;
  address: Array<Final_Residentialaddress_Insert_Input>;
  payment: Array<Final_Paymentmethod_Insert_Input>;
};


export type SubmitOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_final_residentialaddress?: Maybe<(
    { __typename?: 'final_residentialaddress_mutation_response' }
    & Pick<Final_Residentialaddress_Mutation_Response, 'affected_rows'>
  )>, insert_final_paymentmethod?: Maybe<(
    { __typename?: 'final_paymentmethod_mutation_response' }
    & Pick<Final_Paymentmethod_Mutation_Response, 'affected_rows'>
  )>, insert_final_purchase?: Maybe<(
    { __typename?: 'final_purchase_mutation_response' }
    & Pick<Final_Purchase_Mutation_Response, 'affected_rows'>
  )>, insert_final_purchaseditem?: Maybe<(
    { __typename?: 'final_purchaseditem_mutation_response' }
    & Pick<Final_Purchaseditem_Mutation_Response, 'affected_rows'>
  )> }
);

export type BookPageQueryQueryVariables = {
  asin: Scalars['bpchar'];
};


export type BookPageQueryQuery = (
  { __typename?: 'query_root' }
  & { final_book: Array<(
    { __typename?: 'final_book' }
    & BookAttributesFragment
  )> }
);

export type LastUsedInfoQueryVariables = {
  user_id: Scalars['String'];
};


export type LastUsedInfoQuery = (
  { __typename?: 'query_root' }
  & { final_customer: Array<(
    { __typename?: 'final_customer' }
    & { cardholders: Array<(
      { __typename?: 'final_cardholder' }
      & { paymentmethod: (
        { __typename?: 'final_paymentmethod' }
        & Pick<Final_Paymentmethod, 'cardnumber' | 'cvv' | 'expirationdate'>
      ) }
    )>, households: Array<(
      { __typename?: 'final_household' }
      & { residentialaddress: (
        { __typename?: 'final_residentialaddress' }
        & Pick<Final_Residentialaddress, 'city' | 'country' | 'postalcode' | 'province' | 'street' | 'firstname' | 'lastname'>
      ) }
    )> }
  )> }
);

export type GetFieldsQueryVariables = {
  name: Scalars['String'];
};


export type GetFieldsQuery = (
  { __typename?: 'query_root' }
  & { __type?: Maybe<(
    { __typename?: '__Type' }
    & { fields?: Maybe<Array<(
      { __typename?: '__Field' }
      & Pick<__Field, 'name' | 'description'>
    )>> }
  )> }
);

export type GetStoreInfoQueryVariables = {
  user_id: Scalars['String'];
};


export type GetStoreInfoQuery = (
  { __typename?: 'query_root' }
  & { Store: Array<(
    { __typename?: 'Store' }
    & Pick<Store, 'store_id' | 'store_name'>
  )> }
);

export type GetStoreContentsQueryVariables = {
  store_id: Scalars['Int'];
};


export type GetStoreContentsQuery = (
  { __typename?: 'query_root' }
  & { Store: Array<(
    { __typename?: 'Store' }
    & Pick<Store, 'store_id' | 'store_name'>
  )>, Offer: Array<(
    { __typename?: 'Offer' }
    & Pick<Offer, 'inventory' | 'price'>
    & { Stock: (
      { __typename?: 'Book' }
      & Pick<Book, 'title' | 'image_url' | 'category_id' | 'category' | 'author' | 'asin'>
    ) }
  )> }
);

export const BookAttributesFragmentDoc = gql`
    fragment BookAttributes on final_book {
  asin
  category
  coverurl
  inventory
  pages
  price
  title
  authors {
    AuthoredBook {
      fullname
    }
  }
}
    `;
export const SubmitOrderDocument = gql`
    mutation SubmitOrder($order: [final_purchase_insert_input!]!, $items: [final_purchaseditem_insert_input!]!, $address: [final_residentialaddress_insert_input!]!, $payment: [final_paymentmethod_insert_input!]!) {
  insert_final_residentialaddress(objects: $address) {
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
}
    `;
export type SubmitOrderMutationFn = ApolloReactCommon.MutationFunction<SubmitOrderMutation, SubmitOrderMutationVariables>;

/**
 * __useSubmitOrderMutation__
 *
 * To run a mutation, you first call `useSubmitOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitOrderMutation, { data, loading, error }] = useSubmitOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *      items: // value for 'items'
 *      address: // value for 'address'
 *      payment: // value for 'payment'
 *   },
 * });
 */
export function useSubmitOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitOrderMutation, SubmitOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<SubmitOrderMutation, SubmitOrderMutationVariables>(SubmitOrderDocument, baseOptions);
      }
export type SubmitOrderMutationHookResult = ReturnType<typeof useSubmitOrderMutation>;
export type SubmitOrderMutationResult = ApolloReactCommon.MutationResult<SubmitOrderMutation>;
export type SubmitOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitOrderMutation, SubmitOrderMutationVariables>;
export const BookPageQueryDocument = gql`
    query BookPageQuery($asin: bpchar!) {
  final_book(where: {asin: {_eq: $asin}}, limit: 1) {
    ...BookAttributes
  }
}
    ${BookAttributesFragmentDoc}`;

/**
 * __useBookPageQueryQuery__
 *
 * To run a query within a React component, call `useBookPageQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookPageQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookPageQueryQuery({
 *   variables: {
 *      asin: // value for 'asin'
 *   },
 * });
 */
export function useBookPageQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookPageQueryQuery, BookPageQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<BookPageQueryQuery, BookPageQueryQueryVariables>(BookPageQueryDocument, baseOptions);
      }
export function useBookPageQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookPageQueryQuery, BookPageQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookPageQueryQuery, BookPageQueryQueryVariables>(BookPageQueryDocument, baseOptions);
        }
export type BookPageQueryQueryHookResult = ReturnType<typeof useBookPageQueryQuery>;
export type BookPageQueryLazyQueryHookResult = ReturnType<typeof useBookPageQueryLazyQuery>;
export type BookPageQueryQueryResult = ApolloReactCommon.QueryResult<BookPageQueryQuery, BookPageQueryQueryVariables>;
export const LastUsedInfoDocument = gql`
    query LastUsedInfo($user_id: String!) {
  final_customer(where: {userid: {_eq: $user_id}}) {
    cardholders {
      paymentmethod {
        cardnumber
        cvv
        expirationdate
      }
    }
    households {
      residentialaddress {
        city
        country
        postalcode
        province
        street
        firstname
        lastname
      }
    }
  }
}
    `;

/**
 * __useLastUsedInfoQuery__
 *
 * To run a query within a React component, call `useLastUsedInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastUsedInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastUsedInfoQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useLastUsedInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LastUsedInfoQuery, LastUsedInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<LastUsedInfoQuery, LastUsedInfoQueryVariables>(LastUsedInfoDocument, baseOptions);
      }
export function useLastUsedInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LastUsedInfoQuery, LastUsedInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LastUsedInfoQuery, LastUsedInfoQueryVariables>(LastUsedInfoDocument, baseOptions);
        }
export type LastUsedInfoQueryHookResult = ReturnType<typeof useLastUsedInfoQuery>;
export type LastUsedInfoLazyQueryHookResult = ReturnType<typeof useLastUsedInfoLazyQuery>;
export type LastUsedInfoQueryResult = ApolloReactCommon.QueryResult<LastUsedInfoQuery, LastUsedInfoQueryVariables>;
export const GetFieldsDocument = gql`
    query getFields($name: String!) {
  __type(name: $name) {
    fields {
      name
      description
    }
  }
}
    `;

/**
 * __useGetFieldsQuery__
 *
 * To run a query within a React component, call `useGetFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetFieldsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFieldsQuery, GetFieldsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFieldsQuery, GetFieldsQueryVariables>(GetFieldsDocument, baseOptions);
      }
export function useGetFieldsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFieldsQuery, GetFieldsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFieldsQuery, GetFieldsQueryVariables>(GetFieldsDocument, baseOptions);
        }
export type GetFieldsQueryHookResult = ReturnType<typeof useGetFieldsQuery>;
export type GetFieldsLazyQueryHookResult = ReturnType<typeof useGetFieldsLazyQuery>;
export type GetFieldsQueryResult = ApolloReactCommon.QueryResult<GetFieldsQuery, GetFieldsQueryVariables>;
export const GetStoreInfoDocument = gql`
    query GetStoreInfo($user_id: String!) {
  Store(where: {user_id: {_eq: $user_id}}) {
    store_id
    store_name
  }
}
    `;

/**
 * __useGetStoreInfoQuery__
 *
 * To run a query within a React component, call `useGetStoreInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreInfoQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetStoreInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStoreInfoQuery, GetStoreInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStoreInfoQuery, GetStoreInfoQueryVariables>(GetStoreInfoDocument, baseOptions);
      }
export function useGetStoreInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStoreInfoQuery, GetStoreInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStoreInfoQuery, GetStoreInfoQueryVariables>(GetStoreInfoDocument, baseOptions);
        }
export type GetStoreInfoQueryHookResult = ReturnType<typeof useGetStoreInfoQuery>;
export type GetStoreInfoLazyQueryHookResult = ReturnType<typeof useGetStoreInfoLazyQuery>;
export type GetStoreInfoQueryResult = ApolloReactCommon.QueryResult<GetStoreInfoQuery, GetStoreInfoQueryVariables>;
export const GetStoreContentsDocument = gql`
    query GetStoreContents($store_id: Int!) {
  Store(where: {store_id: {_eq: $store_id}}) {
    store_id
    store_name
  }
  Offer(where: {store_id: {_eq: $store_id}}) {
    inventory
    price
    Stock {
      title
      image_url
      category_id
      category
      author
      asin
    }
  }
}
    `;

/**
 * __useGetStoreContentsQuery__
 *
 * To run a query within a React component, call `useGetStoreContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreContentsQuery({
 *   variables: {
 *      store_id: // value for 'store_id'
 *   },
 * });
 */
export function useGetStoreContentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStoreContentsQuery, GetStoreContentsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStoreContentsQuery, GetStoreContentsQueryVariables>(GetStoreContentsDocument, baseOptions);
      }
export function useGetStoreContentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStoreContentsQuery, GetStoreContentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStoreContentsQuery, GetStoreContentsQueryVariables>(GetStoreContentsDocument, baseOptions);
        }
export type GetStoreContentsQueryHookResult = ReturnType<typeof useGetStoreContentsQuery>;
export type GetStoreContentsLazyQueryHookResult = ReturnType<typeof useGetStoreContentsLazyQuery>;
export type GetStoreContentsQueryResult = ApolloReactCommon.QueryResult<GetStoreContentsQuery, GetStoreContentsQueryVariables>;