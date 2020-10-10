import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import SEO from './SEO';
import Footer from './Footer';

library.add(fab, fas);

function Layout({ children }) {
  return (
    <div className="m-auto w-11/12 md:w-9/12 lg:w-8/12">
      <SEO />
      <main className="font-display">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
