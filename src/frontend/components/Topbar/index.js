import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ isLoggedIn, isSidemenuOpen: isOpen }, _props, updateState) => ({
  isLoggedIn,
  isOpen,
  toggle: value => updateState('isSidemenuOpen', value),
});

export default connect(mapStateToProps)(Component);
