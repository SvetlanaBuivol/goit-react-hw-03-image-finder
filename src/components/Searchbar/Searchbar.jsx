import { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Notify } from 'notiflix';
import { SearchbarHead, SearchForm, Input } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleImageChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      Notify.warning('Please enter a value', { position: 'center-center' });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarHead>
        <SearchForm onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleImageChange}
            value={this.state.query}
          />
          <button type="submit">
            <RiSearchLine />
          </button>
        </SearchForm>
      </SearchbarHead>
    );
  }
}
