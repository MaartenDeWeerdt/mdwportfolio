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
    author: "@MaartenDeWe",
    basePath: "/",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "MDW Portfolio",
        short_name: "mdw_portfolio",
        start_url: "/",
        icon: "src/images/icon.png",
        display: "minimal-ui",
        background_color: "#f7fafc",
        theme_color: "#2d3748",
      },
    },
  ],
}
