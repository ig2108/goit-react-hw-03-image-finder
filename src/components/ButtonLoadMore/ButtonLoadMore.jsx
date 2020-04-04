import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <button
      className={styles.ButtonLoadMore}
      type="button"
      onClick={onLoadMore}
    >
      Load more
    </button>
  );
};

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
