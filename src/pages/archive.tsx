import React from "react"
import { graphql } from "gatsby"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { ArchiveQuery } from "../generated"
import { notNull } from "../utils/utils"
import { Page } from "../components/Page"
import { List, Header } from "semantic-ui-react"
import { ResponsiveSidebar } from "../components/home/sidebar/ResponsiveSidebar"
import { ContentWrapper } from "../components/ContentWrapper"

const styles = style({
  display: "flex",
  alignItems: "row",
  width: "100%",
  height: "100%",
})

const postListStyles = style({
  maxWidth: 750,
})

interface Props {
  data: ArchiveQuery
}

export type Post = NonNullable<
  Props["data"]["allMarkdownRemark"]
>["edges"][0]["node"]

export default function ArchivePage({ data }: Props) {
  const posts: Post[] = notNull(notNull(data.allMarkdownRemark).edges).map(
    e => e.node
  )

  return (
    <Page className={styles}>
      <SEO
        title="Archive"
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
      <ContentWrapper>
        <List className={postListStyles}>
          <Header as="h1" style={{ marginBottom: 20 }}>
            Post Archive
          </Header>
          <PostsByYear posts={posts} />
        </List>
      </ContentWrapper>
    </Page>
  )
}

function PostsByYear({ posts }: { posts: Post[] }) {
  const postsByYear: any[] = []
  for (var p of posts) {
    const year = new Date(p.frontmatter!.date).getFullYear()
    let grp = postsByYear.find(o => o.year == year)
    if (!grp) {
      grp = {
        year,
        posts: [],
      }
      postsByYear.push(grp)
    }
    grp.posts.push(p)
  }

  return (
    <>
      {postsByYear.map(o => (
        <List.Item key={o.year} style={{ fontSize: 15 }}>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>{o.year}</List.Header>
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
  query Archive {
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
            categories
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
