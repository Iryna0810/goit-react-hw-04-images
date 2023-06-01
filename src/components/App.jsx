import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";

export class App extends Component {

  state = {
    searchImages: '',
    page: 1,
   };

 
  
  handleSearch = (searchImages) => {
    this.setState({searchImages});
  }
  
  render() {
  
    return (
    <div
        style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
        height: '100vh',
        fontSize: 40,
          color: '#010101'
       
      }}
      >
        <Searchbar handleSearch={ this.handleSearch} />
        <ImageGallery searchImages={this.state.searchImages} page={this.state.page} />       
        </div>
  );  
  }  
};

