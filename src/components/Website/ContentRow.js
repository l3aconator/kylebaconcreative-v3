import React from 'react'

export const ContentRow = (props) => (
    <section className={`work-detail-website-${props.className}`}>
        {props.image && (
            <div className="work-detail-website-primary-hero">
                <img className="work-detail-website-primary-hero" src={props.image} alt={props.imageAlt} />
            </div>
        )}
        <div className="grid flex-grid--gutters">
            <div className="col col--width__four">
                <a href={props.url} target="_blank">
                    <img className={`work-detail-website-${props.className}-main-image`} src={props.contentImage} alt={props.contentAlt} />
                </a>
            </div>
            <div className="col col--width__eight container content">
                <h4>{props.heading}</h4>
                <p>{props.content}</p>
                {props.buttonContent && (
                    <a className="button-link" href={props.url}><button className="dark-btn" type="button">{props.buttonContent}</button></a>
                )}
            </div>
        </div>
    </section>
);