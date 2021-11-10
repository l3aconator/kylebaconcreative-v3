import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../scss/styles.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
