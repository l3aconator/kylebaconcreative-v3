import React from 'react'

export const FooterRow = (props) => (
    <section className="work-detail-website-footer">
        <div className="work-detail-full-img">
            <img src={props.image} alt={props.imageAlt} />
        </div>
        <div className="container u-pad mobile-pad-cont">
            <div>
                <h4>{props.heading}</h4>
                <p>{props.content}</p>
                {props.buttonContent && (
                    <a className="button-link" href={props.url}><button className="dark-btn" type="button">{props.buttonContent}</button></a>
                )}
            </div>
        </div>
    </section>
);