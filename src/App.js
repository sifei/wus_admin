import logo from './logo.svg';
import {Amplify, Auth, Logger} from 'aws-amplify';
import React, {useEffect, useState} from "react";
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import {SelectField, TextField} from '@aws-amplify/ui-react';


Amplify.configure(awsExports);

function App() {
  const [username,setUsername] = useState("")
  const funcc = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user)
    const { username } = user;
    setUsername(username)
  }
  funcc()
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3 id="userName"> Welcome {username} </h3>
        </div>
        <p></p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://tsui-wakeupsafe.research.chop.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wakeup Safe
        </a>

      </header>

    </div>
  );
}

export default withAuthenticator(App);
