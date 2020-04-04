import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const { id, webformatURL } = image;

  return (
    <img
      src={webformatURL}
      id={id}
      alt=""
      className={styles.ImageGalleryItemImage}
    />
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
