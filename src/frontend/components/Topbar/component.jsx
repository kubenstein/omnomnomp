import React from 'react';
import PropTypes from 'prop-types';
import 'components/Topbar/styles.scss';

const Topbar = ({ isLoggedIn: _ }) => (
  <div className="topbar">
    <span>Omnomnomp!</span>
  </div>
);

Topbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Topbar;
