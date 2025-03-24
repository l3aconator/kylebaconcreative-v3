import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../scss/styles.scss';

function Layout({ children, classes = '' }) {
  return (
    <>
      <Header />
      <main className={classes}>{children}</main>
      <Footer />
      <div className="noise" />
    </>
  );
}

export default Layout;
