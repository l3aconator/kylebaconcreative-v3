import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, slug } = this.props.pageContext;
    const image = post.frontmatter.journalhero.childImageSharp.fluid.src;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        classes="main--noMargin"
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="blog-post">
          {/* Hero image section with title */}
          <div
            className="blog-post-hero"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="blog-post-hero-overlay" />
            <div className="blog-post-hero-title">
              <h1>{post.frontmatter.title}</h1>
              <div className="blog-post-meta">
                <time>{post.frontmatter.date}</time>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="blog-post-container">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          {/* Next/Previous posts */}
          <div className="blog-post-navigation">
            <div className="blog-post-navigation-container">
              <div className="prev-next-grid">
                <div className="prev-post">
                  {previous && (
                    <Link to={`/blog${previous.fields.slug}`} rel="prev">
                      <span>← Previous Post</span>
                      <p>{previous.frontmatter.title}</p>
                    </Link>
                  )}
                </div>

                <div className="next-post">
                  {next && (
                    <Link to={`/blog${next.fields.slug}`} rel="next">
                      <span>Next Post →</span>
                      <p>{next.frontmatter.title}</p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`;
