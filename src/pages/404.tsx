import React from "react"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { Page } from "../components/Page"
import { Header } from "semantic-ui-react"
import { ResponsiveSidebar } from "../components/home/sidebar/ResponsiveSidebar"
import gif from "../images/404.gif"

const styles = style({
  display: "flex",
  alignItems: "row",
  width: "100%",
  height: "100%",
})

const contentStyles = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 40,
  width: "100%",
  height: "100%",
  overflowY: "auto",
})

interface Props {}

export default function Page404({  }: Props) {
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
      <div className={contentStyles}>
        <div style={{ maxWidth: 750 }}>
          <Header as="h1" style={{ marginBottom: 20 }}>
            404
          </Header>
          <img src={gif} />
          <div>
            Whoops! Looks like this page cant be found. Perhaps it was moved,
            try searching for it.
          </div>
        </div>
      </div>
    </Page>
  )
}
