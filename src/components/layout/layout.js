import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import theme from '../../utils/theme';
import { Header, Footer, SEO } from '.';

library.add(fab);

const GlobalStyle = createGlobalStyle`
  body {
    user-select: none;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <SEO />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
`;

export default Layout;
