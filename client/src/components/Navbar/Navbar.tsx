import React, { FunctionComponent } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import BookQuery from '../BookQuery/BookQuery';

import BookSearchQuery from '../../queries/BookSearchQuery';
import ObjectFieldQuery from '../../queries/ObjectFieldQuery';

const logoUrl = "https://image.flaticon.com/icons/png/128/39/39237.png";
const cartUrl = "https://pngimage.net/wp-content/uploads/2018/06/shopping-basket-icon-png-.png";
const searchUrl = "https://www.stickpng.com/assets/images/585e4ad1cb11b227491c3391.png";

function cleanQuery(query: string) {
    return `%${query.replace(/\s+/g, "%")}%`.replace(/\%{2,}/g, "%");
}

function dataMaybeReady({ loading, error, data }: any) {
    let out: any = { error, loading }

    if (error) {
        out['message'] = <React.Fragment>
            Something went wrong.
                        </React.Fragment>
        return out;
    }


    const arr = loading ? [{ name: "Loading...", description: null }] : data.__type.fields
    out['options'] = arr.map(({ name, description }: { name: string, description: string }, i: number) => {
        return { id: i, value: name, label: name };
    });

    return out;
}

function useForceUpdate() {
    const [value, setValue] = React.useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function getBookResults(field: string, query: string) {
    return query && <BookQuery query={BookSearchQuery({
        [field]: { _ilike: cleanQuery(query) },
    })} />
}

function sortDropdownOptions(options: Array<object>) {
    return options.filter((x: any) => x.value.indexOf("_") === -1)
        .sort((a: any, b: any) => {
            if (a.value > b.value) return -1
            else if (a.value < b.value) return 1
            return 0
        })
        .map((x: any) => {
            return <option>{x.value}</option>
        })
}

const SiteNavbar: FunctionComponent = () => {
    // https://www.robinwieruch.de/react-lift-state

    const [query, setQuery] = React.useState('');
    const [field, setField] = React.useState('title');

    const fieldData = dataMaybeReady(useQuery(ObjectFieldQuery, { variables: { name: 'Book' } }));
    const options = fieldData.options;

    // https://stackoverflow.com/a/42121109/6766123
    const history = useHistory();
    function handleClick() {
        history.push(`/search?field=${field}&query=${query}`);
      }


    return fieldData.error ? fieldData.message : <React.Fragment>
        <Navbar bg="light" expand="sm">
            <Form.Row>
                <Col xs={1} md={1}>
                    <a href="/">
                        <Image src={logoUrl} rounded style={{ width: '50%', transform: 'scale(2.25)', marginLeft: '0.75em' }} />
                    </a>
                </Col>

                <Form.Group as={Col} md="2" controlId="formGridState">
                    <Form.Control as="select"
                        value={field} custom="true"
                        placeholder="Search by..."
                        onChange={(x: any) => setField(x.target.value || field)}
                    >
                        {sortDropdownOptions(options)}
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="8" controlId="formGridZip">
                    <InputGroup>
                        <Form.Control onChange={(x: any) => {
                            console.log(x.target.value);
                            setQuery(x.target.value || query);
                        }} />
                        <InputGroup.Append>
                            <Button
                                variant="outline-secondary"
                                style={{ width: "20%" }}
                                onClick={handleClick}
                            >
                                <Image src={searchUrl} rounded style={{ width: '40%', transform: 'scale(2.25)' }} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>

                <Col xs={1} md={1}>
                    <a href="/cart">
                        <Image src={cartUrl} rounded style={{ width: '40%', transform: 'scale(0.66)', marginLeft: '2em' }} />
                    </a>
                </Col>
            </Form.Row>
        </Navbar>
        <hr />
    </React.Fragment>
}

export default SiteNavbar;