import 'es6-promise/auto';

import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import { StateProvider } from 'lib/appState';

import App from 'components/App';
import './assets';

const email = Cookies.get('email');
const initialState = {
  userEmail: email,
  socket: email && io('/', { query: `email=${email}` }),
};

ReactDOM.render(
  <StateProvider initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('app'),
);
