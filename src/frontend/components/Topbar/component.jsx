import React from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import SideMenu from 'components/SideMenu';

import 'components/Topbar/styles.scss';

const Topbar = ({ isLoggedIn, isOpen, toggle }) => (
  <>
    {isOpen && <SideMenu />}
    <div className="topbar">
      {isLoggedIn && (
        <FunctionLink
          className="menu"
          unselectable="on"
          onClick={() => toggle(!isOpen)}
        >
          ☰
        </FunctionLink>
      )}
      <span className="title">Omnomnomp!</span>
    </div>
  </>
);

Topbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Topbar;
