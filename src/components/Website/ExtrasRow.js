import React from 'react';

export const ExtrasRow = (props) => (
  <section className="work-detail-extras">
    <div className="container">
      <div className="grid flex--grid flex-grid--gutters u-pad mobile-pad-cont">
        {props.typography && (
          <div className="col col--width__six">
            <h4>Typography</h4>
            {props.typography.map(({ image, imagealt }) => (
              <div className="type-image-box" key={imagealt}>
                <img
                  className="type-image"
                  src={image?.childImageSharp?.fluid?.src}
                  alt={imagealt}
                />
              </div>
            ))}
          </div>
        )}
        {props.colorpalette && (
          <div className="col col--width__six">
            <h4>Color Palette</h4>
            {props.colorpalette.map(({ value }) => (
              <div
                className="color-box"
                style={{ backgroundColor: value }}
                key={value}
              >
                <span className="color-title">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);
