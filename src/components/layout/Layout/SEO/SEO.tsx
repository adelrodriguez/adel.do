import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../../../../hooks/use-site-metadata';

interface Props {
  lang?: string;
  meta: [any];
  keyword: [string];
}

const SEO = ({ lang = 'en', meta = [], keywords = [] }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: siteMetadata.description,
        },
        {
          property: 'og:title',
          content: siteMetadata.title,
        },
        {
          property: 'og:description',
          content: siteMetadata.description,
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
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: siteMetadata.description,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
