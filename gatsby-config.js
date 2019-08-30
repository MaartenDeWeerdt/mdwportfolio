/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    siteTitle: "MDW Portfolio",
    siteTitleAlt: "Portfolio Maarten De Weerdt",
    siteHeadline: "Hi, My name is Maarten",
    siteUrl: "https://mdwportfolio.netlify.com",
    siteDescription: "This website showcases my passion for Javascript",
    siteLanguage: "en",
    siteImage: "/banner.jpg",
    author: "@MaartenDeWe",
    basePath: "/",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "mdwportfolio",
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => project => `/${project.uid}`,
      },
    },
  ],
}
