import { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Notify } from 'notiflix';

export default class Searchbar extends Component {
  state = {
    image: '',
  };

  handleImageChange = event => {
    this.setState({ image: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.image.trim() === '') {
      Notify.warning('Please enter a value', { position: 'center-top' });
      return;
    }
    this.props.onSubmit(this.state.image);
    this.setState({ image: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleImageChange}
            value={this.state.image}
          />
          <button type="submit">
            <RiSearchLine />
          </button>
        </form>
      </header>
    );
  }
}
