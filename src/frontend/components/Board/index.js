import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ images = [] }, _props, updateState) => ({
  images,
  fetchImages: () => {
    //
    // ... fetch from graphql

    updateState('images', [
      {
        redditPostUrl: '/r/FoodPorn/comments/80m2mb/my_second_attempt_at_ramen_this_time_its_shoyu/',
        title: 'Its taken a ton of testing to get here, but these really are the ultimate big, soft, and supe',
        url: 'https://i.redd.it/yhhj3uie5hm11.jpg',
        liked: false,
      },
      {
        redditPostUrl: '/r/FoodPorn/comments/80m2mb/my_second_attempt_at_ramen_this_time_its_shoyu/',
        title: 'Its taken a ton of testing to get here, but these really are the ultimate big, soft, and supe',
        url: 'https://i.redd.it/u17jr74gucl01.jpg',
        liked: false,
      },
    ]);
  },
});

export default connect(mapStateToProps)(Component);
