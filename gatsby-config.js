module.exports = {
  siteMetadata: {
    title: `MikeCann.co.uk`,
    description: `Mikeysee mikeydo - the blog of mike cann`,
    author: `@mikeysee`,
    siteUrl: `https://mikecann.co.uk/`,
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
        name: `mikecann.co.uk`,
        short_name: `mikecann`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-typescript",
    `gatsby-plugin-feed`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts", // Name this source
        path: "content",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 750,
              height: 400,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              numberLines: true,
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
