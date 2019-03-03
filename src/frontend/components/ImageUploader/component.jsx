/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import serialize from 'form-serialize';

import FunctionLink from 'components/FunctionLink';
import './styles.scss';

const ImageUploader = ({ onSubmit }) => {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isOpen, open] = useState(false);
  const [isValid, setValid] = useState(false);
  const [isUploading, setUploading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);

  const handleFileUpload = () => {
    setUploading(true);
    const file = fileInputRef.current.files[0];
    const data = new FormData();
    data.append('photo', file);
    return axios.post('/photos/', data)
      .then((response) => {
        setPhotoUrl(response.data.photoUrl);
        setValid(true);
        setUploading(false);
      });
  };

  const onClose = () => {
    setPhotoUrl(null);
    setValid(false);
    setUploading(false);
    open(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const formValues = serialize(formRef.current, { hash: true });
    onSubmit(formValues);
    onClose();
  };

  return isOpen ? (
    <form
      className="imageuploader"
      ref={formRef}
      onSubmit={submit}
    >
      <FunctionLink className="close" onClick={onClose}>✖</FunctionLink>
      { photoUrl ? (
        <div className="photo-input">
          <img alt="uploaded food" src={photoUrl} />
          <input type="hidden" name="photoUrl" value={photoUrl} />
        </div>
      ) : (
        <label htmlFor="file" className="photo-input empty">
          <input
            className="file-input"
            type="file"
            id="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*; capture=camera"
            capture
          />
        </label>
      )}

      <input className="title" name="title" placeholder="This food looks so delicious!" />

      {isValid && <button className="btn" type="submit">Share!</button>}
      {isUploading && <span className="btn">Uploading...</span>}
      {(!isValid && !isUploading) && <label htmlFor="file" className="btn">Take a picture!</label>}

    </form>
  ) : (
    <FunctionLink className="imageuploader-trigger" onClick={() => open(true)} />
  );
};

ImageUploader.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ImageUploader;
