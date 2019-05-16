import React from 'react';
import Layout from '../components/layout/layout';
import {
  Hero,
  About,
  Experience,
  Projects,
  Education,
  Writing,
  Contact,
} from '../components/sections';

const MainPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Education />
    <Writing />
    <Contact />
  </Layout>
);

export default MainPage;
