import React, { useState, UIEventHandler, useEffect } from "react"
import { graphql } from "gatsby"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { IndexPageQQuery } from "../generated"
import { notNull, coverImage } from "../utils/utils"
import { Page } from "../components/Page"
import { Divider } from "semantic-ui-react"
import { ResponsiveSidebar } from "../components/home/sidebar/ResponsiveSidebar"
import { PostTeaser } from "../components/home/PostTeaser"
import { useWindowSize } from "../utils/useWindowSize"
import { useScroll } from "../utils/useScroll"

const styles = style({
  width: "100%",
  height: "100%",
})

const contentStyles = style({
  padding: "40px 40px 40px 450px",
  width: "100%",
  height: "100%",
})

const postListStyles = style({
  maxWidth: 750,
})

interface Props {
  data: IndexPageQQuery
}

const pageSize = 20

export type Post = NonNullable<
  Props["data"]["allMarkdownRemark"]
>["edges"][0]["node"]

export default function IndexPage({ data }: Props) {
  const posts: Post[] = notNull(notNull(data.allMarkdownRemark).edges).map(
    e => e.node
  )
  const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, pageSize))
  const [timeOfLastLoad, setTimeOfLastLoad] = useState(Date.now())
  const scroll = useScroll()
  const windowSize = useWindowSize()

  useEffect(() => {
    if (scroll.distanceFromBottom > 200) return
    if (Date.now() - timeOfLastLoad < 1000) return

    const endOfItemsReached = visiblePosts.length == posts.length
    if (endOfItemsReached) return

    console.log("Loading next page")
    setTimeOfLastLoad(Date.now())
    setVisiblePosts(posts.slice(0, visiblePosts.length + pageSize))
  }, [scroll.distanceFromBottom])

  let paddingLeft = 450
  if (windowSize.width < 1280) paddingLeft = 250
  if (windowSize.width < 1025) paddingLeft = 100

  return (
    <Page className={styles}>
      <SEO
        title="Home"
        keywords={[
          `blog`,
          `mikecann`,
          `games`,
          `programming`,
          `webdev`,
          `markd`,
        ]}
      />
      <ResponsiveSidebar />
      <div className={contentStyles} style={{ paddingLeft }}>
        <div className={postListStyles}>
          {visiblePosts.map((p, i) => (
            <div key={p.id + i} style={{ marginTop: 40, marginBottom: 40 }}>
              <Teaser post={p} />
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}

function Teaser({ post }: { post: Post }) {
  const frontmatter = notNull(post.frontmatter)
  const coverImg = coverImage(post)
  return (
    <PostTeaser
      title={frontmatter.title + ""}
      coverImg={coverImg}
      date={frontmatter.date + ""}
      excerpt={post.excerpt + ""}
      url={post.fields!.slug + ""}
    />
  )
}

export const query = graphql`
  query IndexPageQ {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
`
