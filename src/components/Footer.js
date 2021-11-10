import React from 'react';
import { Link } from 'gatsby';

import Logo from './Logo';
import LinkedInIcon from './svg/LinkedInIcon';
import TwitterIcon from './svg/TwitterIcon';
import GithubIcon from './svg/GithubIcon';

export default function Footer({}) {
  return (
    <footer>
      <div className="container">
        <div className="flex-grid">
          <div className="col">
            <Link className="logo" to="/">
              <Logo />
            </Link>
          </div>
          <div className="col">
            <ul className="SocialList">
              <li>
                <a
                  href="https://github.com/l3aconator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/baconcreative"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/l3acon"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <nav>
              <ul>
                <li>
                  <Link to="/work">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/journal">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <p>© 2021 Kyle Bacon Creative, LLC</p>
        </div>
      </div>
    </footer>
  );
}
