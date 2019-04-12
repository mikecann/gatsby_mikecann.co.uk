/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

require("dotenv").config()

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const postPath = path.basename(node.fileAbsolutePath, ".md")

    const url = `${postCategory(node.frontmatter)}/${postPath}`
    createNodeField({
      node,
      name: `slug`,
      value: url,
    })
  }
}

function postCategory({ categories }) {
  return categories && categories.length > 0
    ? urlify(categories[0])
    : "uncategorized"
}

const omit = (obj, ...keys) => {
  let ret = {}
  let key
  for (key in obj) {
    if (keys.indexOf(key) == -1) {
      ret[key] = obj[key]
    }
  }
  return ret
}

function urlify(str) {
  if (!str) return ""
  const url = str
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9\-]+/g, "")
    .replace(/--|---|----/g, "-")
    .split("---")
    .join("-")
    .split("--")
    .join("-")

  if (url.length > 0 && url[url.length - 1] == "-")
    return url.substr(0, url.length - 1)

  return url
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Using async await. Query will likely be very similar to your pageQuery in index.js
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date
              categories
              coverImage
              featuredImage {
                childImageSharp {
                  fluid(maxHeight: 150) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { ALGOLIA_ADMIN_KEY, ALGOLIA_APP_ID } = process.env

  if (!ALGOLIA_ADMIN_KEY) {
    console.log("no algolia admin key, cannot index, skipping!")
  } else {
    const algoliasearch = require("algoliasearch")
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
    const index = client.initIndex("gatsbyblog")

    console.log("")
    console.log("indexing posts in algolia..")
    await index.addObjects(
      result.data.allMarkdownRemark.edges.map(e => ({
        ...omit(e.node, "id"),
        createdAt: new Date(e.node.frontmatter.date).getTime(),
        objectID: e.node.id,
      }))
    )
  }

  // Create blog posts pages..
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/BlogPost.tsx"),
      context: {
        id: node.id,
      },
    })
  })

  // Create PostList pages..
  // const posts = result.data.allMarkdownRemark.edges
  // const postsPerPage = 20
  // const numPages = Math.ceil(posts.length / postsPerPage)
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/page` : `/page/${i + 1}`,
  //     component: path.resolve("./src/templates/PostList.tsx"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //     },
  //   })
  // })
}
