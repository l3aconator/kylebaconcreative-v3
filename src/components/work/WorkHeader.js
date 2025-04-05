import React from 'react';
export default function WorkHeader({
  title,
  heroimage,
  heroimagealt,
  circleteaserone,
  circleteaseroneimage,
  circleteaseronealt,
  circleteasertwo,
  circleteasertwoimage,
  circleteasertwoalt,
  children,
}) {
  return (
    <section className="work-detail-header">
      <div className="work-detail-img-box">
        <img
          className="work-detail-full-img"
          src={heroimage}
          alt={heroimagealt}
        />
        <div className="container">
          <div className="grid flex--grid flex-grid--gutters">
            <div className="col col--width__six project">
              <h1 className="name">{title}</h1>
              <p className="description">{children}</p>
            </div>
            <div className="col col--width__six">
              {circleteaserone && (
                <div className="close-up-circle large">
                  <img src={circleteaseroneimage} alt={circleteaseronealt} />
                </div>
              )}
              {circleteasertwo && (
                <div className="close-up-circle medium">
                  <img src={circleteasertwoimage} alt={circleteasertwoalt} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
