import React from 'react';

export default function WorkSquareTall({
  squareimage,
  squarealt,
  squareimagecaption,
  tallimage,
  tallalt,
}) {
  return (
    <section className="work-detail-middle">
      <div className="container">
        <div className="grid flex--grid flex-grid--gutters">
          <div className="col col--width__six">
            <div className="work-detail-secondary-img">
              <img
                src={
                  squareimage?.childImageSharp?.gatsbyImageData?.images
                    ?.fallback?.src
                }
                alt={squarealt}
              />
            </div>
            <p>{squareimagecaption}</p>
          </div>
          <div className="col col--width__six">
            <div className="work-detail-tall-img">
              <img
                className="work-detail-tall-img"
                src={
                  tallimage?.childImageSharp?.gatsbyImageData?.images?.fallback
                    ?.src
                }
                alt={tallalt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
