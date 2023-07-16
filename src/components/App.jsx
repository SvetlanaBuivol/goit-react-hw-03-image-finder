import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import getImages from 'services/images-api';
import { Notify } from 'notiflix';

export class App extends React.Component {
  state = {
    query: '',
    images: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true, images: null });
      const response = getImages(this.state.query);
      response
        .then(response => {
          if (response.data.total) {
            return this.setState({
              images: response.data.hits,
              loading: false,
            });
          } else {
            this.setState({ loading: false });
            Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
        })
        .catch(error => console.log(error));
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <Loader />}
        {this.state.images && <ImageGallery images={this.state.images} />}
      </>
    );
  }
}
