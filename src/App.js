import React from 'react';
import { withAuthenticator} from '@aws-amplify/ui-react'
import { AppRouter } from './components/AppRouter';


function App() {
  return (
     <div>       
        <AppRouter />          
    </div>
  );
}

export default withAuthenticator(App);
