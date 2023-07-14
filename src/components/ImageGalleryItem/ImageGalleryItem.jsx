import React from 'react';

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <li>
    <img src={webformatURL} alt={tags} />
  </li>
);

export default ImageGalleryItem;
