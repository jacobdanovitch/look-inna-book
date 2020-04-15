import React, { FunctionComponent, useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { DocumentNode } from 'apollo-boost';
import { Bar, Scatter, Line } from 'react-chartjs-2';
import graphql2chartjs from 'graphql2chartjs';
import { Nav } from 'react-bootstrap'

import { LoadingView } from '../../components'
import { revByAuth, revenueVsExpenses,  profitableBooks } from '../../db'

type TChartConfig = {
    dataKey: string,
    title: string,
    query: DocumentNode,
    Component: any // component type
}
const catalog: Array<TChartConfig> = [
    {
        dataKey: 'final_RevenueByAuthor_View',
        title: 'Top Selling Authors',
        query: revByAuth,
        Component: Bar
    },
    {
        dataKey: 'final_MostProfitableBooks_View',
        title: 'Top Selling Books',
        query: profitableBooks,
        Component: Bar
    },
    {
        dataKey: 'final_ProfitOverExpenses_View',
        title: 'Revenue vs. Expenses',
        query: revenueVsExpenses,
        Component: Scatter
    }
]

type TNavCallback = { onSelect: () => void }
const ChartTab: FunctionComponent<TChartConfig & TNavCallback> = ( { dataKey, title, onSelect }) => {
    return <Nav.Item>
        <Nav.Link eventKey={dataKey} onSelect={onSelect}>{title}</Nav.Link>
    </Nav.Item>
}

export const Reports: FunctionComponent = () => {
    const [ active, setActive ] = useState(0)
    const { dataKey, query, Component } = catalog[active]
    const { loading, error, data } = useQuery(query);

    //@ts-ignore
    const g2c = new graphql2chartjs(data, Component.name.toLowerCase().replace('()', '')); // 'bar'
    console.log(g2c);
    
    const nav = <Nav variant="tabs" defaultActiveKey={dataKey}>
        {catalog.map((config: TChartConfig, i: number) => {
            return <ChartTab {...config} onSelect={() => setActive(i)} />
        })}
    </Nav>
    
    if (loading) {
        return LoadingView(loading)
    }
    // <Bar data={g2c.data} />;
    return error ? <p>An error occurred {JSON.stringify(error)}</p> : <>
        {nav}
        <Component data={g2c.data} />;
    </>
}