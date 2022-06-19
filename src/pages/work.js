import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class Work extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Some of my work" />
        <div className="main-content work-gallery">
          <div className="container">
            <div className="page-hero">
              <h1>Some of my work</h1>
            </div>
            <div className="grid flex--grid flex-grid--gutters">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                const teaser = node.frontmatter.homepageteaser;
                const slug = `/work${node.fields.slug}`;
                const image =
                  node.frontmatter.homepagepreview.childImageSharp.fluid.src;
                const classArray = [
                  'work--orange',
                  'work--blue__light',
                  'work--pink',
                  'work--turq',
                ];
                const widthArray = ['four', 'eight'];
                const generateClass =
                  classArray[Math.floor(Math.random() * Math.floor(4))];
                const width =
                  widthArray[Math.floor(Math.random() * Math.floor(2))];
                return (
                  <div className={`col col--width__${width}`} key={slug}>
                    <Link to={slug}>
                      <div
                        className={`work-image-box ${generateClass}`}
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      >
                        <div className="work-meta">
                          <div className="work-meta--content">
                            <p className="work-meta--content-title">{title}</p>
                            <p className="work-meta--content-teaser">
                              {teaser}
                            </p>
                            <img
                              className="work-meta--content-arrow"
                              src="/prev-arrow.svg"
                              alt="An arrow to go onto the work."
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Work;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            homepagepreview {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            homepageteaser
          }
        }
      }
    }
  }
`;
