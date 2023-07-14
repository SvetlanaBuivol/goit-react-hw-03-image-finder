import { Component } from 'react';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Notify } from 'notiflix';

const API_KEY = '36867238-d18d023007d9afe06dc91b3fb';
const BASE_URL = 'https://pixabay.com/api/';

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ loading: true, images: null });
      axios
        .get(
          `${BASE_URL}?q=${this.props.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => {
          response.data.total
            ? this.setState({ images: response.data.hits })
            : Notify.failure(
                'Sorry, there are no images matching your search query. Please try again.'
              );
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ul>
            {this.state.images.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}
