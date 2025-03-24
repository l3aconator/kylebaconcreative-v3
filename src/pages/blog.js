import React from 'react';
import { Link, graphql } from 'gatsby';
import { gb, gbc } from '@yuvalkarif/gradient-blob';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BaconBitsLogo from '../components/BaconBitsLogo';

const coordinates = 20;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ['#136497', '#C34848', '#165E4E', '#101238', '#3337A5'];
    this.state = {
      gradientBlob: gb(coordinates),
      colorIndex: 0,
    };
    this.blobInterval = null;
    this.colorInterval = null;
  }

  componentDidMount() {
    // Update the gradient blob every 1.5 seconds
    this.blobInterval = setInterval(() => {
      this.setState({
        gradientBlob: gb(coordinates),
      });
    }, 1500);

    // Change the color every 6 seconds
    this.colorInterval = setInterval(() => {
      this.setState((prevState) => ({
        colorIndex: (prevState.colorIndex + 1) % this.colors.length,
      }));
    }, 6000);
  }

  componentWillUnmount() {
    // Clean up the intervals when component unmounts
    if (this.blobInterval) {
      clearInterval(this.blobInterval);
    }
    if (this.colorInterval) {
      clearInterval(this.colorInterval);
    }
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const { gradientBlob, colorIndex } = this.state;
    const currentColor = this.colors[colorIndex];

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        classes="main--noMargin journal"
      >
        <SEO title="All posts" />
        <div
          className="journal-hero"
          style={{
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            className="container"
            style={{
              zIndex: 4,
              position: 'relative',
            }}
          >
            <div className="journal-hero__content">
              <div className="journal-header__content">
                <div className="journal-header">
                  <BaconBitsLogo />
                </div>
                <h1>
                  ENGINEERS THINK IN CODE. DESIGNERS THINK IN PIXELS. AI IS
                  CHANGING BOTH.
                </h1>
                <p>
                  Don't get left behind. Bridge the gap between Engineering, UX,
                  Design, and AI—bit by bit with snackable lessons that help you
                  write cleaner code, design smarter interfaces, and stay
                  relevant in a world where staying static means falling behind.{' '}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              filter: `blur(100px)`,
            }}
          >
            <div
              className="blob"
              style={{
                clipPath: `polygon(${gradientBlob})`,
                backgroundColor: currentColor,
                width: '100%',
                height: '100%',
                transition: 'clip-path 2.5s ease, background-color 2.5s ease',
              }}
            ></div>
          </div>
        </div>
        <div className="main-content journal-feed">
          <div className="container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              const image =
                node.frontmatter.journalhero.childImageSharp.fluid.src;
              return (
                <div className="journal-item" key={`/blog${node.fields.slug}`}>
                  <div className="journal-hero">
                    <div
                      className="journal-hero__image"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    />
                    <div className="journal-hero__overlay" />
                    <div className="journal-hero__content">
                      <h2>
                        <Link to={`/blog${node.fields.slug}`}>{title}</Link>
                      </h2>
                      <p className="journal-date">{node.frontmatter.date}</p>
                    </div>
                  </div>
                  <div className="journal-content">
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link to={`/blog${node.fields.slug}`} className="button">
                      Read more
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
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
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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
