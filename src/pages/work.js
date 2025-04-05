import React from 'react';
import { Link, graphql } from 'gatsby';
import { MoveUpRight } from 'lucide-react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

function Work({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Work" />
      <div className="main-content work-gallery">
        <div className="container">
          <div className="page-hero">
            <h1>My Work</h1>
            <p>
              View my past projects and read case studies covering my Product
              design, Web design and Web development.
            </p>
          </div>
          <div className="grid flex--grid flex-grid--gutters">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              const teaser = node.frontmatter.homepageteaser;
              const slug = `/work${node.fields.slug}`;
              const image =
                node.frontmatter.homepagepreview.childImageSharp.fluid.src;
              return (
                <div className="col col--width__six" key={slug}>
                  <Link to={slug}>
                    <img src={image} alt={title} className="work-image-box" />
                    <div className="work-meta">
                      <div className="work-meta--content">
                        <div>
                          <h3 className="work-meta--content-title">{title}</h3>
                          <MoveUpRight className="work-meta--content-arrow" />
                        </div>
                        <p className="work-meta--content-teaser">{teaser}</p>
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
      sort: { frontmatter: { title: ASC } }
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
