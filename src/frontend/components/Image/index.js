import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ socket, likedImages = [], userEmail }, { image: { id } }, updateState) => ({
  onDoubleClick: () => {
    const query = `
    mutation {
      image : like(userEmail: "${userEmail}", imageId: ${id}) {
        id
        url
        title
        redditPostUrl
      }
    }
    `;
    socket.emit('query', query, (response) => {
      likedImages.push(response.data.image);
      updateState({ likedImages });
    });
  },
});

export default connect(mapStateToProps)(Component);
