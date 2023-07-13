import React from "react";
import Searchbar from "./Searchbar/Searchbar";


export class App extends React.Component {

  state = {
    image: '',
  }

  handleFormSubmit = image => {
    this.setState({ image });

  }

  render() {
    return (
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
    </div>
  );
  } 
};
