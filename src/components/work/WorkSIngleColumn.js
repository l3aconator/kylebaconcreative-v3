import React from 'react';

export default function WorkSingleColumn({ singlecolumncontent }) {
  return singlecolumncontent.assets.map(({ className, image, alt }) => (
    <img
      className={className}
      src={image && image.childImageSharp.gatsbyImageData.images.fallback.src}
      alt={alt}
    />
  ));
}
