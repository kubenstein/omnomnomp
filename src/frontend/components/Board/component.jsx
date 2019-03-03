import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FunctionLink from 'components/FunctionLink';
import Topbar from 'components/Topbar';
import Image from 'components/Image';
import ImageUploader from 'components/ImageUploader';

import { imageShape } from 'lib/shapes';

import './styles.scss';

const Board = ({ images, fetchImages, loadMore }) => {
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
                Fantasticlicious! Single picture says more than a thousands of words!
                Omnomnomp is a place where you can browse and like absolutely fantastic food.
                Browse, Like, Want, Eat!
              </span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="separator" />

          <div className="list">
            {images.map(image => (
              <Image key={image.id} image={image} />
            ))}

            <FunctionLink className="btn" onClick={loadMore}>Load More!</FunctionLink>
          </div>
        </div>
      </div>
      <ImageUploader />
    </>
  );
};

Board.propTypes = {
  images: PropTypes.arrayOf(imageShape).isRequired,
  fetchImages: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Board;
