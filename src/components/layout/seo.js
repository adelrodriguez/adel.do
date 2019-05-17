import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ lang, meta, keywords }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:title',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: site.siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: site.siteMetadata.description,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : [],
        )
        .concat(meta)}
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;
