import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  backdropRef = createRef();

  findModalImageUrl = (images, id) => {
    return images.find(image => {
      return image.id === id && image.largeImageURL;
    });
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onCloseModal();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onCloseModal();
  };

  render() {
    const { images, imageId } = this.props;
    const { largeImageURL } = this.findModalImageUrl(images, +imageId);
    return (
      <div
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        className={styles.Overlay}
      >
        <div className={styles.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
