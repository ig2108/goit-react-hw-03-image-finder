import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <li
          key={image.id}
          className={styles.ImageGalleryItem}
          onClick={onClickImage}
        >
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
