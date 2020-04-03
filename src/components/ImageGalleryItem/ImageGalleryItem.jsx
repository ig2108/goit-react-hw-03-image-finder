import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const { webformatURL } = image;

  return (
    <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
  );
};

export default ImageGalleryItem;
