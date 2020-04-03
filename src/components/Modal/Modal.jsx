import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ image }) => {
  const { largeImageURL } = image;
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
