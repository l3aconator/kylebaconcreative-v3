import React, { useState } from 'react';
import { graphql } from 'gatsby';
import JSConfetti from 'js-confetti';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';

const EmailReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const email = 'hello@kylebaconcreative.com';
  const jsConfetti = new JSConfetti();
  const confettiOptions = {
    emojis: ['👋', '🥓', '🐖', '🐽', '🥓', '🥓', '🥓', '🥓', '🥓', '🥓'],
  };

  const handleReveal = () => {
    setIsRevealed(true);
    jsConfetti.addConfetti(confettiOptions);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      jsConfetti.addConfetti(confettiOptions);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="email-reveal">
      {!isRevealed ? (
        <button onClick={handleReveal} className="reveal-button">
          Reveal Email
        </button>
      ) : (
        <div className="email-container">
          <span className="email">{email}</span>
          <button
            onClick={handleCopy}
            className={`copy-button ${isCopied ? 'copied' : ''}`}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
};

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <div className="main-content contact">
          <div className="contact-grid container">
            <div className="contact-info">
              <h1>Contact me</h1>
              <p className="contact-intro">
                If you have a project or business opportunity you would like to
                discuss, or just want to say hi, feel free to reach out.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <h2>BUSINESS INQUIRES</h2>
                  <EmailReveal />
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form
                data-netlify="true"
                method="POST"
                data-netlify-honeypot="bot-field"
                name="contact"
                action="/contact/thanks"
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">NAME</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">SUBJECT</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject line"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
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
