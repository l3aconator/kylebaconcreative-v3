import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import JSConfetti from 'js-confetti';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';

function Thanks({ location, data }) {
  const isBrowser = typeof window !== 'undefined';
  const siteTitle = data.site.siteMetadata.title;
  const confettiOptions = {
    emojis: ['👋', '🥓', '🐖', '🐽', '🥓', '🥓', '🥓', '🥓', '🥓', '🥓'],
  };

  useEffect(() => {
    if (isBrowser) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti(confettiOptions);
    }
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Thanks for contacting me!" />
      <div className="main-content contact">
        <div className="container">
          <div className="page-hero">
            <h1>Thanks for contacting me! I will get back to you shortly</h1>
            <Link to="/">Back to the homepage</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Thanks;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
