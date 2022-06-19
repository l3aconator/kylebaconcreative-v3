import React from 'react';

export const IconRow = (props) => (
  <section className="work-detail-iconography dark-bg u-pad">
    <div className="container">
      <div className="grid flex--grid flex-grid--gutters mobile-pad-cont">
        <div className="col col--width__six">
          <h4 className="text-white">{props.heading}</h4>
          <p className="text-white">{props.content}</p>
          {props.buttonContent && (
            <a className="button-link" href={props.url}>
              <button type="button">{props.buttonContent}</button>
            </a>
          )}
        </div>
        <div className="col col--width__six">
          <ul className="icon-list">
            {props.icons.map(({ iconimage, iconimagealt }) => (
              <li className="icon-circle" key={iconimagealt}>
                <img
                  src={iconimage && iconimage.publicURL}
                  alt={iconimagealt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
