import React from 'react';
import { NavLink } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react'

export default () => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" >Build</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink exact activeClassName="active" to="./github" className="nav-link" aria-current="page">Github</NavLink>
            <NavLink exact activeClassName="active" to="./calendar" className="nav-link" >Google Calendar</NavLink>
        </div>
        </div>
        < AmplifySignOut />
    </div>
    </nav>  
);