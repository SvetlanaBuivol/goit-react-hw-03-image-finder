import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images}) => (
        <ul>
          {images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
            />
          ))}
        </ul>
      );

export default ImageGallery;
