import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Nav from "./components/navbar"

function App() {
  return (
     <div className="App">       
      <Nav />      
      <img src="/static/media/logo.6ce24c58.svg" class="App-logo" alt="logo"/>     
    </div>
  );
}

export default withAuthenticator(App);
