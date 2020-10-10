import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Writing from '../components/sections/Writing';
import Contact from '../components/sections/Contact';

const MainPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Writing />
    <Contact />
  </Layout>
);

export default MainPage;
