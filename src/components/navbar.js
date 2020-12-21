import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

export default () => (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Hello build</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#github">Github</Nav.Link>
        <Nav.Link href="#calendar">Google Calendar</Nav.Link>        
        </Nav>        
        <AmplifySignOut />        
    </Navbar.Collapse>
    </Navbar>   
);