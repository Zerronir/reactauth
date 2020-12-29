import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importamos los datos para poder hacer la autenticación del usuario
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}>
  <React.StrictMode>

      <Router>
            <App />
            <Route path="/" exact component={Profile} />
            <Route path="/productos/:tipo" exact component={ProductList} />
      </Router>
  </React.StrictMode>
</Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
