import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-45qyrjq6.us.auth0.com" //These are in your account
  clientId="iQ4DYQUslCw4Ro1u3Dqh1VdXJekdyfzG" //In account
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
  document.getElementById("root")
);