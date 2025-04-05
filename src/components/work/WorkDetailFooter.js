import React from 'react';

export default function WorkDetailFooter({ footerimage, footeralt }) {
  return (
    <section>
      <div className="work-detail-img-box">
        <img
          className="work-detail-full-img"
          src={
            footerimage?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
          }
          alt={footeralt}
        />
      </div>
    </section>
  );
}
