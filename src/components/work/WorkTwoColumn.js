import React from 'react';

export default function WorkTwoColumn({ twocolumncontent }) {
  return (
    <div className="container">
      <div className="grid flex--grid flex-grid--gutters marg-bot">
        {twocolumncontent.assets.map(
          ({ className, customlink, image, alt }) => (
            <div
              className={`col col--width__six church-icon-set-container ${
                className ? className : ''
              }`}
              style={{ marginLeft: -30 }}
            >
              <img src={image.publicURL} alt={alt} />
              {customlink && (
                <p dangerouslySetInnerHTML={{ __html: customlink }} />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
