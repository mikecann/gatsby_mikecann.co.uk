import React from "react"
import { graphql } from "gatsby"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { AboutPageQuery } from "../generated"
import { notNull } from "../utils/utils"
import { Page } from "../components/Page"
import { Header } from "semantic-ui-react"
import { ResponsiveSidebar } from "../components/home/sidebar/ResponsiveSidebar"
import { MarkdownHtml } from "../components/MarkdownHtml"
import { ContentWrapper } from "../components/ContentWrapper"

const styles = style({
  display: "flex",
  alignItems: "row",
  width: "100%",
  height: "100%",
})

interface Props {
  data: AboutPageQuery
}

export default function ArchivePage({ data }: Props) {
  const post = notNull(notNull(data.allMarkdownRemark).edges).map(
    e => e.node
  )[0]

  return (
    <Page className={styles}>
      <SEO
        title="About"
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
        <div style={{ maxWidth: 750 }}>
          <Header as="h1" style={{ marginBottom: 20 }}>
            About
          </Header>
          <MarkdownHtml html={post.html} />
        </div>
      </ContentWrapper>
    </Page>
  )
}

export const query = graphql`
  query AboutPage {
    allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/pages/about/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
