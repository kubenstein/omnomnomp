import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ userEmail, isSidemenuOpen: isOpen }, _props, updateState) => ({
  isLoggedIn: !!userEmail,
  isOpen,
  toggle: value => updateState('isSidemenuOpen', value),
});

export default connect(mapStateToProps)(Component);
