import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { MoveUpRight } from 'lucide-react';
import JSConfetti from 'js-confetti';

const WorkCarousel = ({ previous, next }) => {
  const confettiRef = useRef(null);
  const [confettiFired, setConfettiFired] = useState(false);

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser || !confettiRef.current || confettiFired) {
      return;
    }

    const jsConfetti = new JSConfetti();
    const confettiOptions = {
      emojis: ['👋', '🥓', '🐖', '🐽', '🥓', '🥓', '🥓', '🥓', '🥓', '🥓'],
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !confettiFired) {
          jsConfetti.addConfetti(confettiOptions);
          setConfettiFired(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(confettiRef.current);

    return () => {
      observer.disconnect();
    };
  }, [confettiFired]);

  return (
    <>
      <section className="align-center main-content footer-cta">
        <div className="container">
          <h2>Have a design or development project you need help with?</h2>
          <div>
            <Link to="/contact" className="button">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
      <section
        ref={confettiRef}
        className="work-carousel align-center main-content"
      >
        <div className="container">
          <h2 className="work-carousel-title">More Case Studies</h2>
          <div className="grid flex--grid flex-grid--gutters">
            <div className="col col--width__six">
              {previous && (
                <Link to={`/work${previous.fields.slug}`} rel="prev">
                  <img
                    src={
                      previous.frontmatter.homepagepreview.childImageSharp.fluid
                        .src
                    }
                    alt={previous.frontmatter.workPageTitle}
                    className="work-image-box"
                  />
                  <div className="work-meta">
                    <div className="work-meta--content">
                      <div>
                        <h3 className="work-meta--content-title">
                          {previous.frontmatter.workPageTitle}
                        </h3>
                        <MoveUpRight className="work-meta--content-arrow" />
                      </div>
                      <p className="work-meta--content-teaser">
                        {previous.frontmatter.homepageteaser}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
            <div className="col col--width__six">
              {next && (
                <Link to={`/work${next.fields.slug}`} rel="next">
                  <img
                    src={
                      next.frontmatter.homepagepreview.childImageSharp.fluid.src
                    }
                    alt={next.frontmatter.workPageTitle}
                    className="work-image-box"
                  />
                  <div className="work-meta">
                    <div className="work-meta--content">
                      <div>
                        <h3 className="work-meta--content-title">
                          {next.frontmatter.workPageTitle}
                        </h3>
                        <MoveUpRight className="work-meta--content-arrow" />
                      </div>
                      <p className="work-meta--content-teaser">
                        {next.frontmatter.homepageteaser}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkCarousel;
