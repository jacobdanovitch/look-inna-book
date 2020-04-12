import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { TUseAuth } from '../../types';
import { TStoreInfo } from '.'

export const StoreManagement: FunctionComponent<TStoreInfo> = ( { store }) => {
    return <p>Test 1</p>;
}