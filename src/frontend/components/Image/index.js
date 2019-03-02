import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = () => ({
  onDoubleClick: () => {},
});

export default connect(mapStateToProps)(Component);
