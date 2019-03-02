import PropTypes from 'prop-types';

export const imageShape = PropTypes.shape({
  redditPostUrl: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  liked: PropTypes.bool,
});
