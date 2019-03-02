import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Topbar from 'components/Topbar';
import Image from 'components/Image';
import { imageShape } from 'lib/shapes';

import './styles.scss';

const App = ({ images, fetchImages }) => {
  useEffect(fetchImages, []);

  return (
    <>
      <Topbar />
      <div className="board-wrapper">
        <div className="jumbo">
          <div className="box-wrapper">
            <div className="box">
              <h1>Omnomnomp!</h1>
              <span>
                Fantasticlicious! A Picture says more than thousands words!
                Omnomnomp is a place where you can browse and like absolutely fantastic food.
                Browse, Like, want, eat!
              </span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="separator" />

          <div className="list">
            {images.map(image => (
              <Image key={image.url} image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

App.propTypes = {
  images: PropTypes.arrayOf(imageShape),
  fetchImages: PropTypes.func,
};

export default App;
