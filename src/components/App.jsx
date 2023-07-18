import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import getImages from 'services/images-api';
import { Notify } from 'notiflix';
import { Container } from './App.styled';
import Button from './Button/Button';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    query: '',
    images: null,
    loading: false,
    showButton: false,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        loading: true,
        images: null,
        page: 1,
        showButton: false,
      });
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    getImages(query, page)
      .then(response => {
        if (response.data.total) {
          const totalPages = Math.ceil(response.data.totalHits / 12);
          this.setState(prevState => ({
            images: prevState.images
              ? [...prevState.images, ...response.data.hits]
              : response.data.hits,
            loading: false,
            showButton: page < totalPages,
            page: page + 1,
          }));
        } else {
          this.setState({ loading: false });
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.',
            { position: 'center-center' }
          );
        }
      })
      .catch(error => console.log(error));
  };

  handleFormSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  render() {
    const { loading, images, showButton } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {images && <ImageGallery images={images} />}
        {images && !showButton && (
          <Notification text="All images loaded" />
        )}
        {showButton && <Button onClick={this.handleLoadMore} />}
      </Container>
    );
  }
}
