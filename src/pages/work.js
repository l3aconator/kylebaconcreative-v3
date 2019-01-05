import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class Work extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="All posts"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <div className="main-content">
                    <div className="container">
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug
                            return (
                                <div key={`/work/${node.fields.slug}`}>
                                    <h3>
                                        <Link style={{ boxShadow: `none` }} to={`/work/${node.fields.slug}`}>
                                            {title}
                                        </Link>
                                    </h3>
                                    <small>{node.frontmatter.date}</small>
                                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}} sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
