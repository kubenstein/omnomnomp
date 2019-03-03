import Cookies from 'js-cookie';
import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  onLogin: (email) => {
    Cookies.set('email', email);
    updateState('userEmail', email);
  },
});

export default connect(mapStateToProps)(Component);
