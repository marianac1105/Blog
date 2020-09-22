/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Mariana Cerqueira | Front End Developer",
    author: "Mariana Cerqueira"

  },
  
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  `gatsby-transformer-remark`],
}
