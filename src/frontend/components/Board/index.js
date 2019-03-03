import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ images = [], socket, userEmail }, _props, updateState) => {
  const fetchImages = (fromId = null) => {
    const query = `
      query {
        images(userEmail: "${userEmail}", fromId: ${fromId || 'null'}) {
          id
          url
          title
        }
      }
    `;
    socket.emit('query', query, response => updateState({ images: [...images, ...response.data.images] }));
  };

  return {
    images,
    fetchImages,
    loadMore: () => {
      const fromId = (images[images.length - 1] || { id: null }).id;
      fetchImages(fromId);
    },
  };
};

export default connect(mapStateToProps)(Component);
