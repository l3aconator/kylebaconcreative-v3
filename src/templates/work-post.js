import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { ContentRow } from '../components/Website/ContentRow';
import { OffsetRow } from '../components/Website/OffsetRow';
import { FooterRow } from '../components/Website/FooterRow';
import { ExtrasRow } from '../components/Website/ExtrasRow';
import { IconRow } from '../components/Website/IconRow';

class WorkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const {
      title,
      heroimagealt,
      circleteaserone,
      circleteasertwo,
      circleteaseronealt,
      circleteasertwoalt,
      middle,
      middlealt,
      workdetailwebsiteprimary,
      workdetailwebsiteprimaryheading,
      workdetailwebsiteprimarycontent,
      workdetailwebsiteprimaryheroalt,
      workdetailwebsiteprimarycontentbgimagealt,
      workdetailwebsiteprimarybutton,
      workdetailwebsiteprimaryurl,
      workdetailwebsitesecondary,
      workdetailwebsitesecondaryheading,
      workdetailwebsitesecondarycontent,
      workdetailwebsitesecondarycontentmainimagealt,
      workdetailwebsitesecondarybutton,
      workdetailwebsitesecondaryurl,
      workdetailwebsitelast,
      workdetailwebsitelastheading,
      workdetailwebsitelastcontent,
      workdetailwebsitelastcontentmainimagealt,
      workdetailwebsitelastbutton,
      workdetailwebsitelasturl,
      workdetailwebsitetertiary,
      workdetailwebsitetertiaryheading,
      workdetailwebsitetertiarycontent,
      workdetailwebsitetertiarycontentbgimagealt,
      workdetailwebsitetertiarycontentmainimagealt,
      workdetailwebsitefooter,
      workdetailwebsitefooterheading,
      workdetailwebsitefootercontent,
      workdetailwebsitefooterimagealt,
      colorpalette,
      typography,
      workdetailiconography,
      workdetailiconographyheading,
      workdetailiconographycontent,
      workdetailiconographybutton,
      workdetailiconographyurl,
      workdetailiconographyicons,
      singlecolumnfull,
      singlecolumn,
      twocolumn,
      singlecolumnfullcontent,
      singlecolumncontent,
      twocolumncontent,
      infographic,
      infographicimage,
      infographicimagealt,
      squaretall,
      squareimage,
      squarealt,
      squareimagecaption,
      tallimage,
      tallalt,
      footer,
      footerimage,
      footeralt,
    } = post.frontmatter;

    // Imagery for all the templates
    const heroimage =
      post.frontmatter.heroimage &&
      post.frontmatter.heroimage.childImageSharp.fluid.src;
    const circleteaseroneimage =
      post.frontmatter.circleteaseroneimage &&
      post.frontmatter.circleteaseroneimage.childImageSharp.fluid.src;
    const circleteasertwoimage =
      post.frontmatter.circleteasertwoimage &&
      post.frontmatter.circleteasertwoimage.childImageSharp.fluid.src;
    const middleimage =
      post.frontmatter.middleimage &&
      post.frontmatter.middleimage.childImageSharp.fluid.src;

    const workdetailwebsiteprimaryhero =
      post.frontmatter.workdetailwebsiteprimaryhero &&
      post.frontmatter.workdetailwebsiteprimaryhero.childImageSharp.fluid.src;
    const workdetailwebsiteprimarycontentmainimage =
      post.frontmatter.workdetailwebsiteprimarycontentmainimage &&
      post.frontmatter.workdetailwebsiteprimarycontentmainimage.childImageSharp
        .fluid.src;

    const workdetailwebsitesecondarycontentmainimage =
      post.frontmatter.workdetailwebsitesecondarycontentmainimage &&
      post.frontmatter.workdetailwebsitesecondarycontentmainimage
        .childImageSharp.fluid.src;

    const workdetailwebsitelastcontentmainimage =
      post.frontmatter.workdetailwebsitelastcontentmainimage &&
      post.frontmatter.workdetailwebsitelastcontentmainimage.childImageSharp
        .fluid.src;

    const workdetailwebsitetertiarycontentbgimage =
      post.frontmatter.workdetailwebsitetertiarycontentbgimage &&
      post.frontmatter.workdetailwebsitetertiarycontentbgimage.childImageSharp
        .fluid.src;
    const workdetailwebsitetertiarycontentmainimage =
      post.frontmatter.workdetailwebsitetertiarycontentmainimage &&
      post.frontmatter.workdetailwebsitetertiarycontentmainimage.childImageSharp
        .fluid.src;

    const workdetailwebsitefooterimage =
      post.frontmatter.workdetailwebsitefooterimage &&
      post.frontmatter.workdetailwebsitefooterimage.childImageSharp.fluid.src;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={post.excerpt} />
        <div className="main-content work-detail">
          <section className="work-detail-header">
            <div className="work-detail-img-box">
              <img
                className="work-detail-full-img"
                src={heroimage}
                alt={heroimagealt}
              />
              <div className="container">
                <div className="grid flex-grid--gutters">
                  <div className="col col--width__six project">
                    <h1 className="name">{title}</h1>
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </div>
                  <div className="col col--width__six">
                    {circleteaserone && (
                      <div className="close-up-circle large">
                        <img
                          src={circleteaseroneimage}
                          alt={circleteaseronealt}
                        />
                      </div>
                    )}
                    {circleteasertwo && (
                      <div className="close-up-circle medium">
                        <img
                          src={circleteasertwoimage}
                          alt={circleteasertwoalt}
                        />
                      </div>
                    )}
                    <div className="down-circle">
                      <a href="#down">
                        <img
                          src="/down-arrow.svg"
                          alt="An arrow to go down to images of the projects."
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="down">
            {middle && (
              <div className="work-detail-img-box">
                <img
                  className="work-detail-full-img"
                  src={middleimage}
                  alt={middlealt}
                />
              </div>
            )}
            {singlecolumnfull &&
              singlecolumnfullcontent.assets.map(
                ({ className, image, alt }) => (
                  <img
                    className={className}
                    src={image && image.childImageSharp.fluid.src}
                    alt={alt}
                  />
                )
              )}
            {singlecolumn &&
              singlecolumncontent.assets.map(({ className, image, alt }) => (
                <div className={`container ${className}`}>
                  <img
                    src={image && image.childImageSharp.fluid.src}
                    alt={alt}
                  />
                </div>
              ))}
            {infographic && (
              <div className="infographic-container">
                <Link to={infographicimage.publicURL}>
                  <img
                    className="infographic"
                    src={
                      infographicimage &&
                      infographicimage.childImageSharp.fluid.src
                    }
                    alt={infographicimagealt}
                  />
                </Link>
              </div>
            )}
            {squaretall && (
              <section className="work-detail-middle">
                <div className="container">
                  <div className="grid flex-grid--gutters">
                    <div className="col col--width__six">
                      <div className="work-detail-secondary-img">
                        <img
                          src={
                            squareimage && squareimage.childImageSharp.fluid.src
                          }
                          alt={squarealt}
                        />
                      </div>
                      <p>{squareimagecaption}</p>
                    </div>
                    <div className="col col--width__six">
                      <div className="work-detail-tall-img">
                        <img
                          className="work-detail-tall-img"
                          src={tallimage && tallimage.childImageSharp.fluid.src}
                          alt={tallalt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {twocolumn && (
              <div className="container">
                <div className="grid flex-grid--gutters marg-bot">
                  {twocolumncontent.assets.map(
                    ({ className, customlink, image, alt }) => (
                      <div
                        className={`col col--width__six church-icon-set-container ${
                          className ? className : ''
                        }`}
                        style={{ marginLeft: -30 }}
                      >
                        <img src={image.publicURL} alt={alt} />
                        {customlink && (
                          <p dangerouslySetInnerHTML={{ __html: customlink }} />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </section>
          {footer && (
            <section>
              <div className="work-detail-img-box">
                <img
                  className="work-detail-full-img"
                  src={footerimage && footerimage.childImageSharp.fluid.src}
                  alt={footeralt}
                />
              </div>
            </section>
          )}
          {colorpalette && typography && (
            <ExtrasRow colorpalette={colorpalette} typography={typography} />
          )}
          {workdetailwebsiteprimary && (
            <ContentRow
              image={workdetailwebsiteprimaryhero}
              imageAlt={workdetailwebsiteprimaryheroalt}
              heading={workdetailwebsiteprimaryheading}
              content={workdetailwebsiteprimarycontent}
              contentImage={workdetailwebsiteprimarycontentmainimage}
              contentAlt={workdetailwebsiteprimarycontentbgimagealt}
              url={workdetailwebsiteprimaryurl}
              buttonContent={workdetailwebsiteprimarybutton}
              className="primary"
            />
          )}
          {workdetailwebsitesecondary && (
            <ContentRow
              heading={workdetailwebsitesecondaryheading}
              content={workdetailwebsitesecondarycontent}
              contentImage={workdetailwebsitesecondarycontentmainimage}
              contentAlt={workdetailwebsitesecondarycontentmainimagealt}
              url={workdetailwebsitesecondaryurl}
              buttonContent={workdetailwebsitesecondarybutton}
              className="secondary"
            />
          )}
          {workdetailwebsitelast && (
            <ContentRow
              heading={workdetailwebsitelastheading}
              content={workdetailwebsitelastcontent}
              contentImage={workdetailwebsitelastcontentmainimage}
              contentAlt={workdetailwebsitelastcontentmainimagealt}
              url={workdetailwebsitelasturl}
              buttonContent={workdetailwebsitelastbutton}
              className="last"
            />
          )}
          {workdetailwebsitetertiary && (
            <OffsetRow
              image={workdetailwebsitetertiarycontentbgimage}
              imageAlt={workdetailwebsitetertiarycontentbgimagealt}
              heading={workdetailwebsitetertiaryheading}
              content={workdetailwebsitetertiarycontent}
              contentImage={workdetailwebsitetertiarycontentmainimage}
              contentAlt={workdetailwebsitetertiarycontentmainimagealt}
            />
          )}
          {workdetailwebsitefooter && (
            <FooterRow
              image={workdetailwebsitefooterimage}
              imageAlt={workdetailwebsitefooterimagealt}
              heading={workdetailwebsitefooterheading}
              content={workdetailwebsitefootercontent}
            />
          )}
          {workdetailiconography && (
            <IconRow
              heading={workdetailiconographyheading}
              content={workdetailiconographycontent}
              buttonContent={workdetailiconographybutton}
              url={workdetailiconographyurl}
              icons={workdetailiconographyicons}
            />
          )}
        </div>

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default WorkPostTemplate;

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
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
        heroimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        heroimagealt
        circleteaserone
        circleteaseroneimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        circleteaseronealt
        circleteasertwo
        circleteasertwoimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        circleteasertwoalt
        middle
        middleimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        middlealt
        workdetailwebsiteprimary
        workdetailwebsiteprimaryhero {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsiteprimaryheroalt
        workdetailwebsiteprimaryheading
        workdetailwebsiteprimarycontent
        workdetailwebsiteprimarycontentmainimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsiteprimarycontentbgimagealt
        workdetailwebsiteprimarybutton
        workdetailwebsiteprimaryurl
        workdetailwebsitesecondary
        workdetailwebsitesecondaryheading
        workdetailwebsitesecondarycontent
        workdetailwebsitesecondarycontentmainimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsitesecondarycontentmainimagealt
        workdetailwebsitesecondarybutton
        workdetailwebsitesecondaryurl
        workdetailwebsitelast
        workdetailwebsitelastheading
        workdetailwebsitelastcontent
        workdetailwebsitelastcontentmainimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsitelastcontentmainimagealt
        workdetailwebsitelastbutton
        workdetailwebsitelasturl
        workdetailwebsitetertiary
        workdetailwebsitetertiaryheading
        workdetailwebsitetertiarycontent
        workdetailwebsitetertiarycontentbgimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsitetertiarycontentbgimagealt
        workdetailwebsitetertiarycontentmainimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsitetertiarycontentmainimagealt
        workdetailwebsitefooter
        workdetailwebsitefooterheading
        workdetailwebsitefootercontent
        workdetailwebsitefooterimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        workdetailwebsitefooterimagealt
        colorpalette {
          value
        }
        typography {
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          imagealt
        }
        workdetailiconography
        workdetailiconographyheading
        workdetailiconographycontent
        workdetailiconographybutton
        workdetailiconographyurl
        workdetailiconographyicons {
          iconimage {
            publicURL
          }
          iconimagealt
        }
        singlecolumnfull
        singlecolumn
        twocolumn
        singlecolumnfullcontent {
          assets {
            class
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt
          }
        }
        singlecolumncontent {
          assets {
            class
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt
          }
        }
        twocolumncontent {
          assets {
            className
            image {
              publicURL
            }
            alt
            customlink
          }
        }
        infographic
        infographicimage {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
        inforgraphicimagealt
        squaretall
        squareimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        squarealt
        squareimagecaption
        tallimage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        tallalt
        footer
        footeralt
        footerimage {
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
