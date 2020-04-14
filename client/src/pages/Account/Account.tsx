import React, { FunctionComponent, useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Col, Row, Nav, Tab } from 'react-bootstrap'

import { TUseAuth } from '../../types';
import { StoreInfoQuery } from '../../db';

import { StoreManagement, Reports } from '.';

type TAccountPage = TUseAuth & { activeTab?: string }
export const Account: FunctionComponent<TAccountPage> = ({ useAuth, activeTab }) => {
    const { loading: authLoading, user, auth } = useAuth();
    const user_id = user ? user.id : '';

    const { loading, error, data } = useQuery(StoreInfoQuery, { variables: { user_id } })
    const store = !(loading || error) && data.Store

    type TAccountItem = { eventKey: string, sellerOnly?: boolean }
    const AccountNavItem: FunctionComponent<TAccountItem> = ({ eventKey, sellerOnly, children }) => {
        return <Nav.Item>
            {(!sellerOnly || store) && <Nav.Link eventKey={eventKey}>
                {children}
            </Nav.Link>}
        </Nav.Item>
    }

    const AccountContentItem: FunctionComponent<TAccountItem> = ({ eventKey, sellerOnly, children }) => {
        return (!sellerOnly || store) && <Tab.Pane eventKey={eventKey}>
            {children}
        </Tab.Pane>
    }

    return (authLoading || loading ) ? null : <Tab.Container defaultActiveKey={activeTab || (store ? "first" : "third")}>
        <Row>
            <Col sm={3}>
                <Nav className="flex-column">
                    <AccountNavItem eventKey="first" sellerOnly>
                        Store Management
                    </AccountNavItem>
                    <AccountNavItem eventKey="second" sellerOnly>
                        Reports
                    </AccountNavItem>
                    <AccountNavItem eventKey="third">
                        Account Details
                    </AccountNavItem>
                    <AccountNavItem eventKey="fourth">
                        Previous Orders
                    </AccountNavItem>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <AccountContentItem eventKey="first" sellerOnly>
                        <StoreManagement store={store} />
                    </AccountContentItem>
                    <AccountContentItem eventKey="second" sellerOnly>
                        <Reports store={store} />
                    </AccountContentItem>
                    <AccountContentItem eventKey="third">
                        Account Details
                    </AccountContentItem>
                    <AccountContentItem eventKey="fourth">
                        Previous Orders
                    </AccountContentItem>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container >
}