import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import imagesApi from '../../services/imagesApi';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';

import styles from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  state = {
    images: [],
    searchInput: '',
    pageCurrent: 1,
    isLoading: false,
    error: null,
    imageId: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageCurrent !== this.state.pageCurrent ||
      prevState.searchInput !== this.state.searchInput
    ) {
      this.fetchImages();

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchInput, pageCurrent } = this.state;
    this.setState({
      isLoading: true,
    });

    imagesApi(searchInput, pageCurrent)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => this.setState(error))
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  };

  openModal = e => {
    const { id } = e.target;
    this.setState({ imageId: id });
  };

  closeModal = () =>
    this.setState({
      imageId: '',
    });

  handleSubmit = queryInput => {
    this.setState({
      images: [],
      searchInput: queryInput,
      pageCurrent: 1,
    });
  };

  handleLoadMore = e => {
    this.setState(prevState => ({
      pageCurrent: prevState.pageCurrent + 1,
    }));
  };

  render() {
    const { images, error, isLoading, imageId } = this.state;
    return (
      <div className={styles.container}>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <img src="../../error.jpg" alt="error" />}
        {isLoading && <Loader />}
        <ImageGallery images={images} onClickImage={this.openModal} />
        {imageId && (
          <Modal
            images={images}
            imageId={imageId}
            onCloseModal={this.closeModal}
          />
        )}
        {images.length > 0 && (
          <ButtonLoadMore onLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
