import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { TStoreInfo, TUseAuth } from '../../types';

export const Reports: FunctionComponent<TStoreInfo> = ( { store } ) => {
    return <p>Reports</p>;
}