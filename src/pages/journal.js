import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class Homepage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="main-content journal-feed">
          <div className="container" style={{ marginTop: 60 }}>
            <div className="grid flex-grid--gutters">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                const image =
                  node.frontmatter.journalhero.childImageSharp.fluid.src;
                const classArray = [
                  'journal--orange',
                  'journal--blue__light',
                  'journal--pink',
                  'journal--turq',
                ];
                const generateClass =
                  classArray[Math.floor(Math.random() * Math.floor(4))];
                return (
                  <div
                    className="col col--width__six"
                    key={`/journal/${node.fields.slug}`}
                  >
                    <div className={`journal-feed-item ${generateClass}`}>
                      <div
                        className="journal-hero"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      >
                        <h4 className="journal-main-heading">
                          <Link to={`/journal/${node.fields.slug}`}>
                            {title}
                          </Link>
                        </h4>
                      </div>
                      <section className="journal-information">
                        <span className="list-blog-date">
                          <span>
                            Posted on <span>{node.frontmatter.date}</span>
                          </span>
                        </span>
                      </section>
                      <div className="journal-feed-content">
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        <Link
                          className="button-link"
                          to={`/journal/${node.fields.slug}`}
                        >
                          <button className="u-center dark">
                            Read more&hellip;
                          </button>
                        </Link>
                      </div>
                    </div>
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

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/journal/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
            journalhero {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
