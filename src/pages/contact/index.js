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
                    title="Contact"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <div class="main-content contact">
                    <div class="container">
                        <div class="page-hero">
                            <h1>Give me a holler!</h1>
                            <h3>I would love to help consult, code, or design your next project!</h3>
                        </div>
                        <fieldset class="contact-form">
                            <form data-netlify="true" method="POST" data-netlify-honeypot="bot-field" name="contact">
                                <div class="form-row">
                                    <div class="grid flex-grid">
                                        <div class="col--width__six">
                                            <div class="form-text">Hey Bacon, my name is:</div>
                                        </div>
                                        <div class="col--width__six">
                                            <input id="name" type="text" name="name" placeholder="Darth Vader" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="grid flex-grid">
                                        <div class="col--width__three">
                                            <div class="form-text">My email is:</div>
                                        </div>
                                        <div class="col--width__nine">
                                            <input id="email-address" type="email" name="email" placeholder="luke@iamyourfather.com" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="grid flex-grid">
                                        <div class="col--width__six">
                                            <div class="form-text">I am contacting you about:</div>
                                        </div>
                                        <div class="col--width__six">
                                            <select name="contact-reason">
                                                <option value="select">--</option>
                                                <option value="new-project">a new project</option>
                                                <option value="portfolio">a piece of your work</option>
                                                <option value="screw-up">a comment I have</option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <textarea name="message" draggable="false" placeholder="Transmission here…"></textarea>
                                <input type="hidden" name="bot-field" />
                                <input class="form-button" type="submit" />
                            </form>
                        </fieldset>
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
