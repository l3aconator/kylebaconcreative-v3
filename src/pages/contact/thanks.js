import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
}

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
