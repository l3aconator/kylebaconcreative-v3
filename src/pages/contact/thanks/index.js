import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import JSConfetti from 'js-confetti';

import Layout from '../../../components/Layout';
import SEO from '../../../components/seo';

function Thanks({ location, data }) {
  const siteTitle = data.site.siteMetadata.title;
  const jsConfetti = new JSConfetti();
  useEffect(() => {
    jsConfetti.addConfetti({
      emojis: ['👋', '🥓', '🐖', '🐽', '🥓', '🥓', '🥓', '🥓', '🥓', '🥓'],
    });
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
