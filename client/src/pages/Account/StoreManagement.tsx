import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";

import { TUseAuth, TStoreInfo } from '../../types';
import { UpdateBookMutation, DeleteBookMutation } from '../../db'

import { SellerForm, SELLER_ACTION_OPTIONS } from '../../components'

export const StoreManagement: FunctionComponent<TStoreInfo> = ( { store }) => {
    const [updateBook, ] = useMutation(UpdateBookMutation);
    const [deleteBook, ] = useMutation(DeleteBookMutation);
    const handleSubmit = ( values: any ) => {
        const { asin, price, inventory, action } = values;
        const query = (action === SELLER_ACTION_OPTIONS.REMOVE ) ? deleteBook : updateBook
        const variables = (action === SELLER_ACTION_OPTIONS.REMOVE ) ? { asin } : { asin, price, inventory }
        query({ variables })
        // alert(JSON.stringify(values));
    }
    
    return <>
        <SellerForm onSubmit={handleSubmit}/>
    </>;
}