import React, { useState } from "react"
import { graphql } from "gatsby"
import { PostByIdQuery } from "../generated"
import { notNull, coverImage } from "../utils/utils"
import { Page } from "../components/Page"
import { Container, Header, Visibility } from "semantic-ui-react"
import { style } from "typestyle"
import { Navbar } from "../components/Navbar"
import { DiscussionEmbed, CommentCount } from "disqus-react"
import { SearchDialog } from "../components/search/SearchDialog"
import { MarkdownHtml } from "../components/MarkdownHtml"

const coverImgStyles = style({
  width: "100%",
  objectFit: "cover",
  marginBottom: 40,
  height: 700,
})

interface Props {
  data: PostByIdQuery
}

export default function BlogPost({ data }: Props) {
  const [showNav, setShowNav] = useState(true)
  const [searchVisible, setSearchVisible] = useState(false)

  const markdownRemark = notNull(data.markdownRemark)
  const frontmatter = notNull(markdownRemark.frontmatter)
  const category =
    frontmatter.categories && frontmatter.categories.length > 0
      ? frontmatter.categories[0]
      : ""
  const coverImg = coverImage(data.markdownRemark)
  const url = data.markdownRemark!.fields!.slug

  return (
    <Page>
      {coverImg ? (
        <img className={coverImgStyles} srcSet={coverImg} />
      ) : (
        <div style={{ height: 100 }} />
      )}
      <Visibility
        onUpdate={(_, { calculations: { direction, pixelsPassed } }) =>
          setShowNav(direction == "up" || pixelsPassed < 0)
        }
      >
        <Container text>
          <Header as="h1">
            <Header>{frontmatter.title}</Header>
            <Header.Subheader>
              {frontmatter.date}
              {category ? " in " + category : ""}
            </Header.Subheader>
          </Header>
          <MarkdownHtml html={markdownRemark.html} />
          <DiscussionEmbed
            shortname="devwbfg"
            config={{
              identifier: url,
              title: frontmatter.title,
            }}
          />
        </Container>
      </Visibility>
      <Navbar visible={showNav} onOpenSearch={() => setSearchVisible(true)} />
      <SearchDialog
        open={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </Page>
  )
}

// NOTE: The $id var is passed in via context when calling createPage in gatsby-node.js
export const pageQuery = graphql`
  query PostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        categories

        date(formatString: "DD MMMM, YYYY")
        coverImage
        featuredImage {
          childImageSharp {
            sizes {
              srcSet
            }
          }
        }
      }
      html
    }
  }
`
