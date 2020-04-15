import React, { FunctionComponent } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type DynamicGridProps = {
    arr: Array<object>, 
    itemsPerCol: number, 
    component: FunctionComponent<any>
}

export const DynamicGrid: FunctionComponent<DynamicGridProps> = ({arr, itemsPerCol, component}) => {
    if(!arr){
        return <>No results found</>
    }
    const rows = Array(Math.ceil(arr.length / itemsPerCol)).fill(null)
    return <Container fluid>
        {rows.map((_, rowIndex) => (
                <Row style={{ textAlign: 'center', marginBottom: '2%' }}>
                {
                arr.slice(rowIndex * itemsPerCol, (rowIndex * itemsPerCol) + itemsPerCol).map((obj: object) => (
                        <Col xs="12" sm="4">
                            {component(obj)}
                        </Col>
                    ))
                }
                </Row>
        ))}
    </Container>
}