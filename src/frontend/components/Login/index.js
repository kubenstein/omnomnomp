import Cookies from 'js-cookie';
import io from 'socket.io-client';

import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = (_state, _props, updateState) => ({
  onLogin: (email) => {
    Cookies.set('email', email);
    updateState({
      userEmail: email,
      socket: io('/', { query: `email=${email}` }),
    });
  },
});

export default connect(mapStateToProps)(Component);
