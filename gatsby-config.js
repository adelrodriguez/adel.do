module.exports = {
  siteMetadata: {
    title: 'Adel Rodríguez - Full Stack Developer and Mechatronics Engineer',
    description: "Hello, I'm Adel! Full Stack Developer and Mechatronics Engineer",
    author: 'Adel Rodríguez',
    email: 'hello@adelrodriguez.com',
    menuLinks: [
      {
        name: 'about',
        link: 'about-section',
      },
      {
        name: 'experience',
        link: 'experience-section',
      },
      {
        name: 'projects',
        link: 'projects-section',
      },
      {
        name: 'education',
        link: 'education-section',
      },
      {
        name: 'writing',
        link: 'writing-section',
      },
      {
        name: 'contact',
        link: 'contact-section',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        pure: true,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adel Rodríguez',
        short_name: '@adelrodriguez',
        start_url: '/',
        background_color: '#1565c0',
        theme_color: '#1565c0',
        display: 'minimal-ui',
        icon: 'src/assets/images/bearded-person-emoji.png', // This path is relative to the root of the site.
        cache_busting_mode: 'query',
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-108969009-2',
        head: true,
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};
