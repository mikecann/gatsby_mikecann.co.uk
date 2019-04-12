import React from "react"
import { graphql } from "gatsby"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { CategoriesQuery } from "../generated"
import { notNull, urlify } from "../utils/utils"
import { Page } from "../components/Page"
import { List, Header } from "semantic-ui-react"
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
  data: CategoriesQuery
}

export type Post = NonNullable<
  Props["data"]["allMarkdownRemark"]
>["edges"][0]["node"]

export default function CategoriesPage({ data }: Props) {
  const posts: Post[] = notNull(notNull(data.allMarkdownRemark).edges).map(
    e => e.node
  )

  return (
    <Page className={styles}>
      <SEO
        title="Categories"
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
            Post Categories
          </Header>
          <PostsByCategory posts={posts} />
        </List>
      </div>
    </Page>
  )
}

function PostsByCategory({ posts }: { posts: Post[] }) {
  const postsByCategory: any[] = []
  for (var post of posts) {
    for (var category of post.frontmatter!.categories!) {
      let grp = postsByCategory.find(o => o.category == category)
      if (!grp) {
        grp = {
          category,
          posts: [],
        }
        postsByCategory.push(grp)
      }
      grp.posts.push(post)
    }
  }

  return (
    <>
      {postsByCategory.map((o, i) => (
        <List.Item key={o.category + i} style={{ fontSize: 15 }}>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>{o.category}</List.Header>
            <List.List>
              {o.posts.map((p: Post, i: number) => (
                <List.Content key={p.id + i} style={{ paddingTop: 5 }}>
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
  query Categories {
    allMarkdownRemark(
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
            categories
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
