import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typed from 'react-typed';

function Footer() {
  const { footerContent } = useStaticQuery(
    graphql`
      {
        footerContent: contentYaml(section: { eq: "footer" }) {
          content
        }
      }
    `
  );

  return (
    <footer className="font-display text-gray-700 text-xs md:text-sm py-4 border-solid border-t border-gray-200">
      {`© ${new Date().getFullYear()} — Adel Rodríguez `}
      <Typed
        strings={footerContent.content}
        typeSpeed={40}
        backSpeed={40}
        backDelay={1500}
        loop
        shuffle
      />
    </footer>
  );
}

export default Footer;
