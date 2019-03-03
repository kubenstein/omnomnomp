import PropTypes from 'prop-types';

export const imageShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  liked: PropTypes.bool,
});
