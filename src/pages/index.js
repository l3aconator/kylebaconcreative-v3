import React from 'react';
import { Link, graphql } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Layout from '../components/Layout';
import SEO from '../components/seo';

function CTAs() {
  return (
    <div className="mt45 ctas">
      <Link to="/work" className="button">
        See my portfolio
      </Link>
      <Link to="/contact" className="text-link">
        Get in touch
      </Link>
    </div>
  );
}

function Homepage({ data: { site, work, blog }, location }) {
  const siteTitle = site.siteMetadata.title;
  const workPosts = work.edges;
  const blogPosts = blog.edges;

  return (
    <Layout location={location} title={siteTitle} classes="main--noMargin">
      <SEO title="Work" />
      <section className="hero--full">
        <img src="/bg-callout.svg" className="svg--callout" />
        <div className="container">
          <div className="content--container">
            <p className="callout">THE HUMAN CONDITION, MATTERS</p>
            <h1>Bacon is a lover of design, code, and hard problems.</h1>
            <CTAs />
          </div>
        </div>
      </section>
      <section className="skills--block">
        <div className="container">
          <div className="flex--grid flex-grid--gutters">
            <div className="col col-width__six homepage--swiper">
              {workPosts && (
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3500,
                  }}
                >
                  {workPosts.map(
                    (
                      {
                        node: {
                          frontmatter: { title, homepagepreview, client },
                          fields: { slug },
                        },
                      },
                      index
                    ) => {
                      return (
                        <SwiperSlide key={index}>
                          <Link to={`/work${slug}`}>
                            <img
                              src={homepagepreview.childImageSharp.fluid.src}
                            />
                            <div className="work--meta">
                              <h4>
                                <span>{title}</span>
                              </h4>
                              {client && <h5>{client}</h5>}
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    }
                  )}
                </Swiper>
              )}
            </div>
            <div className="col col-width__six">
              <div className="flex--grid flex-grid--gutters">
                <div className="col col-width__six">
                  <h3>Design</h3>
                  <ul className="list">
                    <li>UX consulting</li>
                    <li>UI/Product design</li>
                    <li>Marketing website solutions</li>
                    <li>Design strategy</li>
                    <li>Branding</li>
                    <li>Email design/development</li>
                  </ul>
                </div>
                <div className="col col-width__six">
                  <h3>Development</h3>
                  <ul className="list">
                    <li>React</li>
                    <li>Elixir (intermediate)</li>
                    <li>Next.js</li>
                    <li>Gatsby.js</li>
                    <li>ES5+ JavaScript</li>
                    <li>Debugging</li>
                    <li>Flat-file CMSs</li>
                    <li>Web performance consulting</li>
                    <li>Webflow / Wordpress / Shopify</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="section--margin-tb container" />
      <section>
        <div className="container">
          <div className="flex-grid flex-grid--gutters">
            <div className="col col--width__six">
              <div className="bio--flex">
                <img src="/me.png" />
                <p>
                  When Bacon isn’t freelancin', he’s either swinging a hammer on
                  a home improvement project or growing massive tomato plants.
                  Bacon has been a designer and developer across marketing and
                  product teams for almost a decade. He loves designing for
                  every medium but his favorite is the open web platform.
                </p>
              </div>
              <p>
                Bacon has skills across the board, from illustration to
                marketing to designing/coding websites and web apps. He has a
                knack for learning as he goes. He previously worked at TeamSnap
                for 6+ years as the Senior UX/UI Designer for the marketing
                team.
              </p>
              <p>
                Bacon is originally from Yakima, WA, and now resides in the
                Portland area with his fiancee and 2 cats, experiencing
                everything that it has to offer, including—of course—coffee and
                a good microbrew with his homies. He likes to run and also nerd
                out over a good video game, film or TV show. If he had a
                superpower, it would be his ability to drink a pot of coffee
                without the jitters.
              </p>
              <CTAs />
            </div>
            <div className="col col--width__four fun--callouts__mobile">
              <div className="fun--callouts fun--callouts__music">
                <div>
                  <div className="content--div">
                    <h4>Song of the week</h4>
                    <p>Daughter—Pearl Jam</p>
                  </div>
                  <img src="/wave-icon.svg" alt="sound wave icon" />
                </div>
              </div>
              <div className="fun--callouts">
                <div>
                  <div className="content--div">
                    <h4>Probably on the 3rd cup of the day</h4>
                  </div>
                  <div className="coffee">
                    <img src="/coffee-icon.svg" alt="coffee icon" />
                    <p>3</p>
                  </div>
                </div>
              </div>
              <div className="fun--callouts">
                <h4>My process</h4>
                <ul className="list">
                  <li>
                    <img src="/coffee-icon.svg" alt="coffee icon" /> Listen
                  </li>
                  <li>
                    <img src="/research.svg" alt="coffee icon" /> Research
                  </li>
                  <li>
                    <img src="/concept.svg" alt="coffee icon" /> Concept
                  </li>
                  <li>
                    <img src="/create.svg" alt="coffee icon" /> Create
                  </li>
                  <li>
                    <img src="/launch.svg" alt="coffee icon" /> Launch
                  </li>
                  <li>
                    <img src="/monitor.svg" alt="coffee icon" /> Monitor &
                    Iterate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section--padding-tb">
        <div className="container">
          <div className="flex-grid flex-grid--gutters">
            <div className="col col--width__seven">
              <h4>Latest blog posts</h4>
              {blogPosts && (
                <ul className="list blog--list">
                  {blogPosts.map(
                    (
                      {
                        node: {
                          frontmatter: { title },
                          fields: { slug },
                          excerpt,
                        },
                      },
                      index
                    ) => {
                      return (
                        <li key={index}>
                          <Link to={`/blog${slug}`}>
                            <h5>{title}</h5>
                            <p>{excerpt}</p>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              )}
            </div>
            <div className="col col--width__five">
              <h4>Latest movie quote</h4>
              <blockquote>
                Tony, trying to get you to stop has been one of the few failures
                of my entire life.
                <cite>— Pepper Potts, Avengers: Endgame</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    work: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 4
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
          }
        }
      }
    }
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 2
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
          }
        }
      }
    }
  }
`;
