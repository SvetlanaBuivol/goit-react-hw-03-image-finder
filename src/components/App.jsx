import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends React.Component {

  state = {
    request: '',
  }

  handleFormSubmit = request => {
    this.setState({ request });

  }

  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery image={this.state.request}/>
    </div>
  );
  } 
};
