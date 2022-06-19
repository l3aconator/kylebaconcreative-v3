import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import useScrollListener from '../hooks/useScrollListener';

import Logo from './Logo';

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
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
