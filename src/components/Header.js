import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import useScrollListener from '../hooks/useScrollListener';

import Logo from './Logo';
import LinkedInIcon from './svg/LinkedInIcon';
import TwitterIcon from './svg/TwitterIcon';
import GithubIcon from './svg/GithubIcon';

export default function Header({ classes = '' }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [navClass, setNavClass] = useState('');
  const scroll = useScrollListener();

  useEffect(() => {
    if (scroll.y > 50) {
      setNavClass('Header--scrolled');
    } else {
      setNavClass('');
    }
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    openMenu ? setNavClass('Header--scrolled') : setNavClass('');
  }, [openMenu]);

  return (
    <header className={`${classes} Header ${navClass}`}>
      <div className="container">
        <div className="Header--container">
          <div className="Header--row">
            <Link to="/">
              <Logo />
            </Link>
            <button
              className="Header--button"
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? 'Close' : 'Menu'}
            </button>
          </div>
          <nav className={openMenu ? 'Header--openMenu' : ''}>
            <ul>
              <li>
                <Link to="/work">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Experiments</Link>
              </li>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
