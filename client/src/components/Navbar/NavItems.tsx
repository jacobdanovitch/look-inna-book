import React, { FunctionComponent } from 'react';

import { 
    Button,
    ButtonGroup, 
    Dropdown, 
    DropdownButton, 
    Form,
    Image,
    InputGroup
} from 'react-bootstrap';

import { TAuthorizationView } from '../../types/AuthProps'
import { sortDropdownOptions, cartUrl, logoUrl, searchUrl } from './NavUtils'

export const BrandLogo: FunctionComponent = () => <a href="/">
    <Image src={logoUrl} rounded style={{ width: '50%',  }} />
</a>

export const SearchField = (options: object[], field: string, onChange: (x: any) => void) => <Form.Control as="select"
    value={field} custom="true"
    placeholder="Search by..."
    onChange={onChange}
>
    {sortDropdownOptions(options)}
</Form.Control>

export const SearchInput = (query: string, setQuery: (q: string) => void, handleClick: () => void) => <InputGroup>
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


export const CartLogo: FunctionComponent = () => <a href="/cart">
    <Image src={cartUrl} rounded style={{ width: '40%', transform: 'scale(0.66)', marginLeft: '2em' }} />
</a>


const SignedInManagement = ({ user, auth }: TAuthorizationView, { store }: any ) => {
    const name = user ? user.name.split(" ")[0] : "Guest";

    const hasStore: boolean = (store.length > 0);

    return user && <DropdownButton variant="info" id="dropdown-basic-button" title="Your Account">
        <Dropdown.Item eventKey="0" disabled>Hello, {name}! </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="1" href="/account">My Account</Dropdown.Item>
        <Dropdown.Item eventKey="2">My Orders</Dropdown.Item>
        {hasStore && <Dropdown.Item eventKey="3" href={`/store/${store[0].store_id}`}>My Store</Dropdown.Item>}
        <Dropdown.Item eventKey={hasStore ? "4": "3"} onClick={() => auth.signOut()}>Sign Out</Dropdown.Item>
    </DropdownButton>
}

const SignedOutManagement = ({ user, auth }: TAuthorizationView, { store }: any) => <DropdownButton variant="info" id="dropdown-basic-button" title="Your Account">
    <Dropdown.Item eventKey="1" onClick={() => auth.signIn('google')}>Sign In</Dropdown.Item>
</DropdownButton>

export const AccountManagement = ({ user, auth, loading }: TAuthorizationView, { store }: any ) => {
    const ManagementView = (user) ? SignedInManagement : SignedOutManagement
    return ManagementView({ user, auth, loading }, { store });
}