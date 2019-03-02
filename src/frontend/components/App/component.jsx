import React from 'react';
import PropTypes from 'prop-types';
import Login from 'components/Login';
import Board from 'components/Board';

const App = ({ isLoggedIn }) => (
  isLoggedIn ? <Board /> : <Login />
);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
