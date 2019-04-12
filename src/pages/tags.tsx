import React from "react"
import { graphql } from "gatsby"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { TagsQuery } from "../generated"
import { notNull, urlify } from "../utils/utils"
import { Page } from "../components/Page"
import { List, Header, Accordion, Icon } from "semantic-ui-react"
import { ResponsiveSidebar } from "../components/home/sidebar/ResponsiveSidebar"

const styles = style({
  display: "flex",
  alignItems: "row",
  width: "100%",
  height: "100%",
})

const contentStyles = style({
  flex: 1,
  display: "flex",
  alignItems: "column",
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
  data: TagsQuery
}

export type Post = NonNullable<
  Props["data"]["allMarkdownRemark"]
>["edges"][0]["node"]

export default function TagsPage({ data }: Props) {
  const posts: Post[] = notNull(notNull(data.allMarkdownRemark).edges).map(
    e => e.node
  )

  return (
    <Page className={styles}>
      <SEO
        title="Tags"
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
      <div className={contentStyles}>
        <List className={postListStyles}>
          <Header as="h1" style={{ marginBottom: 20 }}>
            Post Tags
          </Header>
          <PostsByTag posts={posts} />
        </List>
      </div>
    </Page>
  )
}

function PostsByTag({ posts }: { posts: Post[] }) {
  const postsByCategory: any[] = []
  for (var post of posts) {
    const tags = post.frontmatter!.tags!
    if (!tags) continue
    for (var tag of tags) {
      let grp = postsByCategory.find(o => o.tag == tag)
      if (!grp) {
        grp = {
          tag,
          posts: [],
        }
        postsByCategory.push(grp)
      }
      grp.posts.push(post)
    }
  }

  return (
    <>
      {postsByCategory.map(o => (
        <List.Item key={o.tag} style={{ fontSize: 15 }}>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>{o.tag}</List.Header>
            <List.List>
              {o.posts.map((p: Post) => (
                <List.Content key={p.id} style={{ paddingTop: 5 }}>
                  <List.Header>
                    <PostLine post={p} />
                  </List.Header>
                </List.Content>
              ))}
            </List.List>
          </List.Content>
        </List.Item>
      ))}
    </>
  )
}

function PostLine({ post }: { post: Post }) {
  const frontmatter = notNull(post.frontmatter)
  const url = post.fields ? post.fields.slug : ""
  return (
    <a key={post.id} href={url + ""}>
      {frontmatter.title}
    </a>
  )
}

export const query = graphql`
  query Tags {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
