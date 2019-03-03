import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import { imageShape } from 'lib/shapes';

import './styles.scss';

const Image = ({ image, onDoubleClick }) => {
  const [wasJustLiked, setWasJustLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const clickDelay = 200;
  const clicks = [];
  let timeout;

  const onImgClick = () => {
    clicks.push(new Date().getTime());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < clickDelay) {
        onDoubleClick();
        setWasJustLiked(true);
        setTimeout(() => setWasJustLiked(false), 2000);
      } else {
        setOpen(true);
      }
    }, clickDelay);
  };

  const onModalImgClick = () => {
    clicks.push(new Date().getTime());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < clickDelay) {
        onDoubleClick();
        setWasJustLiked(true);
        setTimeout(() => setWasJustLiked(false), 2000);
      }
    }, clickDelay);
  };

  return (
    <div className="image-wrapper">
      { open && (
        <div className="modal">
          <FunctionLink className="close" onClick={() => setOpen(false)}>✖</FunctionLink>
          <FunctionLink onClick={onModalImgClick}>
            { wasJustLiked && <div className="like" />}
            <img alt="delicious food" src={image.url} />
            <small>{image.title || ''}</small>
          </FunctionLink>
        </div>
      )}
      <FunctionLink onClick={onImgClick}>
        { wasJustLiked && <div className="like" />}
        <img alt="delicious food" src={image.url} />
      </FunctionLink>
      <small>{image.title}</small>
    </div>
  );
};

Image.propTypes = {
  image: imageShape.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
};

export default Image;
