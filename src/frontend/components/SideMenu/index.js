import Cookies from 'js-cookie';
import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ socket, userEmail, likedImages = [] }, _props, updateState) => ({
  userEmail,
  likedImages,
  logout: () => {
    Cookies.remove('email');
    socket.disconnect();
    updateState({
      isSidemenuOpen: false,
      userEmail: null,
      socket: null,
    });
  },
  close: () => updateState({ isSidemenuOpen: false }),
  fetchImages: () => {
    const query = `
      query {
        images : likedImages(userEmail: "${userEmail}") {
          id
          url
          title
        }
      }
    `;
    socket.emit('query', query, response => updateState({ likedImages: response.data.images }));
  },
});

export default connect(mapStateToProps)(Component);
