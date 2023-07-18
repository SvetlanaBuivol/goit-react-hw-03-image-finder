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
    const { toggleModal } = this;

    return (
      <GalleryItem>
        <img src={webformatURL} alt={tags} onClick={toggleModal} />
        {this.state.showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeURL} alt={tags} onClick={toggleModal} />
          </Modal>
        )}
      </GalleryItem>
    );
  }
}
