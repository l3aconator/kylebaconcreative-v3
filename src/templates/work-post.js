import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { ContentRow } from '../components/Website/ContentRow';
import { OffsetRow } from '../components/Website/OffsetRow';
import { FooterRow } from '../components/Website/FooterRow';
import { ExtrasRow } from '../components/Website/ExtrasRow';
import { IconRow } from '../components/Website/IconRow';
import {
  WorkHeader,
  WorkCarousel,
  WorkMiddle,
  WorkSingleColumnFull,
  WorkSingleColumn,
  WorkTwoColumn,
  WorkSquareTall,
  WorkDetailFooter,
} from '../components/work';
import {
  Container,
  MainColumn,
  Sidebar,
  Block,
  Metrics,
  Metric,
  AssetContainer,
  Assets,
  AssetImage,
  AssetVideo,
  Hero,
} from '../components/new-work';
import SweptAnimation from '../components/custom/SweptAnimation';

const WorkPostTemplate = ({ data, children, location, pageContext }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const {
    title,
    typography,
    workdetailiconographyicons,
    singlecolumnfullcontent,
    singlecolumncontent,
    twocolumncontent,
    squareimage,
    tallimage,
    footerimage,
  } = post.frontmatter;

  // Imagery for all the templates
  const heroimage =
    post?.frontmatter?.heroimage?.childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src;
  const circleteaseroneimage =
    post?.frontmatter?.circleteaseroneimage?.childImageSharp?.gatsbyImageData
      ?.images?.fallback?.src;
  const circleteasertwoimage =
    post?.frontmatter?.circleteasertwoimage?.childImageSharp?.gatsbyImageData
      ?.images?.fallback?.src;
  const middleimage =
    post?.frontmatter?.middleimage?.childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src;

  const workdetailwebsiteprimaryhero =
    post.frontmatter.workdetailwebsiteprimaryhero &&
    post.frontmatter.workdetailwebsiteprimaryhero.childImageSharp
      .gatsbyImageData.images.fallback.src;
  const workdetailwebsiteprimarycontentmainimage =
    post.frontmatter.workdetailwebsiteprimarycontentmainimage &&
    post.frontmatter.workdetailwebsiteprimarycontentmainimage.childImageSharp
      .gatsbyImageData.images.fallback.src;

  const workdetailwebsitesecondarycontentmainimage =
    post.frontmatter.workdetailwebsitesecondarycontentmainimage &&
    post.frontmatter.workdetailwebsitesecondarycontentmainimage.childImageSharp
      .gatsbyImageData.images.fallback.src;

  const workdetailwebsitelastcontentmainimage =
    post?.frontmatter?.workdetailwebsitelastcontentmainimage?.childImageSharp
      ?.fluid?.src;

  const workdetailwebsitetertiarycontentbgimage =
    post.frontmatter.workdetailwebsitetertiarycontentbgimage &&
    post.frontmatter.workdetailwebsitetertiarycontentbgimage.childImageSharp
      .gatsbyImageData.images.fallback.src;
  const workdetailwebsitetertiarycontentmainimage =
    post.frontmatter.workdetailwebsitetertiarycontentmainimage &&
    post.frontmatter.workdetailwebsitetertiarycontentmainimage.childImageSharp
      .gatsbyImageData.images.fallback.src;

  const workdetailwebsitefooterimage =
    post.frontmatter.workdetailwebsitefooterimage &&
    post.frontmatter.workdetailwebsitefooterimage.childImageSharp
      .gatsbyImageData.images.fallback.src;

  const shortcodes = {
    Link,
    WorkHeader: (props) => (
      <WorkHeader
        {...props}
        heroimage={heroimage}
        circleteaseroneimage={circleteaseroneimage}
        circleteasertwoimage={circleteasertwoimage}
      />
    ),
    WorkMiddle: (props) => <WorkMiddle {...props} middleimage={middleimage} />,
    WorkSingleColumnFull: (props) => (
      <WorkSingleColumnFull
        {...props}
        singlecolumnfullcontent={singlecolumnfullcontent}
      />
    ),
    WorkSingleColumn: (props) => (
      <WorkSingleColumn {...props} singlecolumncontent={singlecolumncontent} />
    ),
    WorkSquareTall: (props) => (
      <WorkSquareTall
        {...props}
        squareimage={squareimage}
        tallimage={tallimage}
      />
    ),
    WorkTwoColumn: (props) => (
      <WorkTwoColumn {...props} twocolumncontent={twocolumncontent} />
    ),
    WorkDetailFooter: (props) => (
      <WorkDetailFooter {...props} footerimage={footerimage} />
    ),
    ExtrasRow: (props) => <ExtrasRow {...props} typography={typography} />,
    ContentRowPrimary: (props) => (
      <ContentRow
        {...props}
        contentImage={workdetailwebsiteprimarycontentmainimage}
        image={workdetailwebsiteprimaryhero}
      />
    ),
    ContentRowSecondary: (props) => (
      <ContentRow
        {...props}
        contentImage={workdetailwebsitesecondarycontentmainimage}
      />
    ),
    ContentRowLast: (props) => (
      <ContentRow
        {...props}
        contentImage={workdetailwebsitelastcontentmainimage}
      />
    ),
    OffsetRow: (props) => (
      <OffsetRow
        {...props}
        contentImage={workdetailwebsitetertiarycontentmainimage}
        image={workdetailwebsitetertiarycontentbgimage}
      />
    ),
    FooterRow: (props) => (
      <FooterRow {...props} image={workdetailwebsitefooterimage} />
    ),
    IconRow: (props) => (
      <IconRow {...props} icons={workdetailiconographyicons} />
    ),
    Container,
    MainColumn,
    Sidebar,
    Block,
    Metrics,
    Metric,
    WorkCarousel,
    AssetContainer,
    Assets,
    AssetImage,
    AssetVideo,
    Hero,
    SweptAnimation,
  };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={post.excerpt} />
      <div className="main-content work-detail">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
      <WorkCarousel previous={previous} next={next} />
    </Layout>
  );
};

export default WorkPostTemplate;

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      children {
        id
      }
      excerpt(pruneLength: 160)
      frontmatter {
        title
        heroimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        circleteaseroneimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        circleteasertwoimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        middleimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsiteprimaryhero {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsiteprimarycontentmainimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsitesecondarycontentmainimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsitelastcontentmainimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsitetertiarycontentbgimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsitetertiarycontentmainimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        workdetailwebsitefooterimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        typography {
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          imagealt
        }
        workdetailiconographyicons {
          iconimage {
            publicURL
          }
          iconimagealt
        }
        singlecolumnfullcontent {
          assets {
            class
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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
                gatsbyImageData(layout: FULL_WIDTH)
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
        infographicimage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        squareimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        tallimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        footerimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
