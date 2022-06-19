import React from 'react';

export const OffsetRow = (props) => (
  <section className="work-detail-website-tertiary u-pad">
    <div className="grid flex--grid flex-grid--gutters mobile-pad-cont">
      <div className="content margin-left__128">
        <h4 className="text-white">{props.heading}</h4>
        <p className="text-white">{props.content}</p>
        {props.buttonContent && (
          <a className="button-link" href={props.url}>
            <button type="button">{props.buttonContent}</button>
          </a>
        )}
      </div>
      <img
        className="work-detail-website-tertiary-main-image"
        src={props.contentImage}
        alt={props.contentAlt}
      />
      {props.image && (
        <img
          className="work-detail-website-tertiary-bg-image"
          src={props.image}
          alt={props.imageAlt}
        />
      )}
    </div>
  </section>
);
