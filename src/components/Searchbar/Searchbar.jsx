import { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Notify } from 'notiflix';

export default class Searchbar extends Component {
  state = {
    request: '',
  };

  handleImageChange = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.request.trim() === '') {
      Notify.warning('Please enter a value', { position: 'center-top' });
      return;
    }
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
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
            value={this.state.request}
          />
          <button type="submit">
            <RiSearchLine />
          </button>
        </form>
      </header>
    );
  }
}
