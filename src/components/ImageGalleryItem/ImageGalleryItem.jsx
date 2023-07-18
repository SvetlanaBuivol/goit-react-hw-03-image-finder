import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, tags, largeURL } = this.props;
    return (
      <GalleryItem>
        <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {this.state.showModal && (
                <Modal onClose={this.toggleModal}>
                   <img src={largeURL} alt={tags} onClick={this.toggleModal}/> 
          </Modal>
        )}
      </GalleryItem>
    );
  }
}
