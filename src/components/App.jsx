import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends React.Component {

  state = {
    query: '',
  }

  handleFormSubmit = query => {
    this.setState({ query });

  }

  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query}/>
    </div>
  );
  } 
};
