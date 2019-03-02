import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(Component);
