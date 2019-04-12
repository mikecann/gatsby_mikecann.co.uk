import React, { useState, UIEventHandler } from "react"
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

const styles = style({
  display: "flex",
  alignItems: "row",
  width: "100%",
  height: "100%",
})

const contentStyles = style({
  flex: 1,
  display: "flex",
  padding: 40,
  width: "100%",
  height: "100%",
  overflowY: "auto",
  justifyContent: "center",
})

const postListStyles = style({
  width: 750,
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

  const windowSize = useWindowSize()

  const onScroll: UIEventHandler<HTMLDivElement> = e => {
    const distanceFromBottom =
      e.currentTarget.scrollHeight -
      window.innerHeight -
      e.currentTarget.scrollTop +
      60

    const endOfItemsReached = visiblePosts.length == posts.length

    if (!endOfItemsReached && distanceFromBottom < 200)
      setVisiblePosts(posts.slice(0, visiblePosts.length + pageSize))
  }

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
      <div
        className={contentStyles}
        style={{ padding: windowSize.width > 500 ? 40 : 10 }}
        onScroll={onScroll}
      >
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
