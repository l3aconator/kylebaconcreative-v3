import React from 'react';

export default function WorkSingleColumnFull({ singlecolumnfullcontent }) {
  return singlecolumnfullcontent.assets.map(({ className, image, alt }) => (
    <img
      className={className}
      src={image && image.childImageSharp.gatsbyImageData.images.fallback.src}
      alt={alt}
    />
  ));
}
