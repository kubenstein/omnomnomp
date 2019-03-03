import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ images = [], socket, userEmail }, _props, updateState) => ({
  onSubmit: ({ photoUrl, title = '' }) => {
    const query = `
      mutation {
        image : addImage(userEmail: "${userEmail}", url: "${photoUrl}", title: "${title}") {
          id
          url
          title
        }
      }
    `;
    socket.emit('query', query, response => updateState({ images: [response.data.image, ...images] }));
  },
});

export default connect(mapStateToProps)(Component);
