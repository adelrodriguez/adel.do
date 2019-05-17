module.exports = {
  siteMetadata: {
    title: 'Adel Rodríguez',
    description: "Hey, I'm Adel! Full Stack Developer and Mechatronic Engineer",
    author: 'Adel Rodríguez',
    email: 'adelrodriguezv@gmail.com',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
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
        icon: 'src/images/bearded-person-emoji.png', // This path is relative to the root of the site.
        cache_busting_mode: 'query',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};
