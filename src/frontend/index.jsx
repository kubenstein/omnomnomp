import 'es6-promise/auto';

import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { StateProvider } from 'lib/appState';

import App from 'components/App';
import './assets';

const initialState = {
  isLoggedIn: !!Cookies.get('email'),
};

ReactDOM.render(
  <StateProvider initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('app'),
);
