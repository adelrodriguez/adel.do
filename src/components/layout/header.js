import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Link, animateScroll as scroll } from 'react-scroll';
import { scale, rhythm } from '../../utils/typography';

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `,
  );

  return (
    <header>
      <Navbar>
        <SiteTitle onClick={scroll.scrollToTop}>{siteMetadata.title}</SiteTitle>
        <MenuLinks>
          {siteMetadata.menuLinks.map(menuLink => (
            <MenuLink key={menuLink.name}>
              <Link offset={-100} smooth to={menuLink.link}>
                {menuLink.name}
              </Link>
            </MenuLink>
          ))}
        </MenuLinks>
      </Navbar>
    </header>
  );
};

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: ${rhythm(1)};
`;

const SiteTitle = styled.div`
  font-weight: 800;
  font-family: 'CircularStd';
  ${scale(0.25)};
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  font-family: 'CircularStd';

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    display: none;
  }
`;

const MenuLink = styled.div`
  cursor: pointer;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
