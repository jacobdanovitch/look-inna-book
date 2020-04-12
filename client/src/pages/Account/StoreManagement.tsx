import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { TUseAuth, TStoreInfo } from '../../types';

import { SellerForm } from '../../components'

export const StoreManagement: FunctionComponent<TStoreInfo> = ( { store }) => {
    const handleSubmit = ( values: any ) => {
        alert(JSON.stringify(values));
    }
    
    return <>
        <SellerForm onSubmit={handleSubmit}/>
    </>;
}