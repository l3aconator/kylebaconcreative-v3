import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'

class Contact extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Thanks for contacting me!"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <div class="main-content contact">
                    <div class="container">
                        <div class="page-hero">
                            <h1>Thanks for contacting me! I will get back to you shortly</h1>
                            <Link to="/">Back to the homepage</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
