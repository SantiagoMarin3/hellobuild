import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { HomeScreen } from "./HomeScreen";
import { GithubScreen } from './GithubScreen';
import { GoogleCalendatScreen } from './GoogleCalendatScreen';
import NavBar from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            
                <NavBar />

                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/github" component={ GithubScreen } />
                    <Route exact path="/calendar" component={ GoogleCalendatScreen } />
                    
                </Switch>
            
        </Router>
    )
}
