import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext
    const image = post.frontmatter.journalhero.childImageSharp.fluid.src;
    const cirlceImage = post.frontmatter.journalherocircle.childImageSharp.fluid.src;
    const cirlceImageAlt = post.frontmatter.journalherocirclealt;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="blog-content-item">
          <div className="item">
            <div class="journal-header">
              <section class="journal-hero main-content image-here" style={{
                backgroundImage: `url(${image})`
              }}>
                <div class="grid flex-grid--gutters">
                  <div class="col col--width__seven">
                    <h1 class="journal-main-heading"><Link to={`/journal/${slug}`}>{post.frontmatter.title}</Link></h1>
                  </div>
                  <div class="col col--width__six">
                    <div class="journal-hero-circle large">
                      <img src={cirlceImage} alt={cirlceImageAlt} />
                    </div>
                  </div>
                </div>
              </section>
              <section class="journal-information main-content">
                <span class="list-blog-date">
                  <span>Posted on
                      <span> {post.frontmatter.date} </span>
                  </span>
                </span>
              </section>
            </div>
            <section class="main-content journal-content clearfix">
              <div class="container">
                <div class="journal-item">
                  <div class="list-blog-padding" dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </div>
            </section>
          </div>
        </div>
        <section class="work-carousel align-center main-content">
          <div class="container">
            <div class="grid flex-grid--gutters">
              <div class="col col--width__six">
                <div class="grid flex-grid--gutters">
                  <div class="col col--width__nine left-name">
                    {previous && (
                      <React.Fragment>
                        <div class="work-carousel-name">Previous post</div>
                        <Link to={`/journal/${previous.fields.slug}`} rel="prev">
                          <div class="work-carousel-project">{previous.frontmatter.title}</div>
                        </Link>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
              <div class="col col--width__six">
                <div class="grid flex-grid--gutters">
                  <div class="col col--width__nine right-name">
                    {next && (
                      <React.Fragment>
                        <div class="work-carousel-name">Next post</div>
                        <Link to={`/journal/${next.fields.slug}`} rel="next">
                          <div class="work-carousel-project">{next.frontmatter.title}</div>
                        </Link>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug } }) {
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
        journalherocircle {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        journalherocirclealt
      }
    }
  }
`
