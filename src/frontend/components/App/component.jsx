import React from 'react';
import PropTypes from 'prop-types';

const App = ({ isLoggedIn }) => (
  isLoggedIn ? <h1>loggedIn</h1> : <h1>not loggedIn</h1>
);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
