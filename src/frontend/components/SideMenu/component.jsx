import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';

import { imageShape } from 'lib/shapes';

import './styles.scss';

const Sidemenu = ({ userEmail, likedImages, fetchImages, close, logout }) => {
  useEffect(fetchImages, []);

  return (
    <div className="sidemenu-wrapper">
      <FunctionLink className="overlay" onClick={close} />

      <div className="menu-content">
        <FunctionLink className="close" onClick={close}>✖</FunctionLink>
        <span className="promo">
          Jakub Niewczas
          <br />
          Sr. FullStack Dev
        </span>
        <span className="user">{userEmail}</span>
        <FunctionLink className="logout" onClick={logout}>logout</FunctionLink>


        <div className="list">
          <small className="header">Liked Images:</small>
          <div className="content">
            {likedImages.map(image => (
              <img alt="like food" className="image" key={image.url} src={image.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Sidemenu.propTypes = {
  userEmail: PropTypes.string.isRequired,
  likedImages: PropTypes.arrayOf(imageShape).isRequired,
  fetchImages: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Sidemenu;
