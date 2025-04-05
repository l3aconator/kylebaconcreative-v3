import React from 'react';
import { Link } from 'gatsby';

export default function WorkCarousel({ previous, next }) {
  return (
    <section className="work-carousel align-center main-content">
      <div className="container">
        <div className="grid flex--grid flex-grid--gutters">
          <div className="col col--width__six">
            <div className="grid flex--grid flex-grid--gutters">
              <div className="col col--width__nine left-name">
                {previous && (
                  <React.Fragment>
                    <div className="work-carousel-name">Previous post</div>
                    <Link to={`/work${previous.fields.slug}`} rel="prev">
                      <div className="work-carousel-project">
                        {previous.frontmatter.title}
                      </div>
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div className="col col--width__six">
            <div className="grid flex--grid flex-grid--gutters">
              <div className="col col--width__nine right-name">
                {next && (
                  <React.Fragment>
                    <div className="work-carousel-name">Next post</div>
                    <Link to={`/work${next.fields.slug}`} rel="next">
                      <div className="work-carousel-project">
                        {next.frontmatter.title}
                      </div>
                    </Link>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
