import { useStaticQuery, graphql } from 'gatsby';

function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            email
            navLinks {
              label
              value
            }
          }
        }
      }
    `
  );

  return siteMetadata as SiteMetadata;
}

export default useSiteMetadata;
