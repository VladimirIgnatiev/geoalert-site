require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: `Geoalert`,
    description: `Stay aware, analyse and make decisions faster - global geoanalytics platform powered by Earth Observation and AI`,
    author: `@dqunbp`,
    menuLinks: [
      { id: "navbar.products", title: "products", slug: "#products" },
      { id: "navbar.company", title: "company", slug: "#company" },
      { id: "navbar.blog", title: "blog", slug: "#blog" },
      { id: "navbar.contacts", title: "contacts", slug: "#contacts" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E73E33`,
        theme_color: `#E73E33`,
        display: `minimal-ui`,
        icon: `src/images/ga-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en-US`, `ru-RU`],
        defaultLanguage: `ru-RU`,
        redirect: false,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://gmail.us10.list-manage.com/subscribe/post?u=ac69b766f280087d9b8d0d8db&amp;id=4b57273fd6`,
      },
    },
  ],
}
