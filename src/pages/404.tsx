import React from "react"
import { style } from "typestyle"
import { SEO } from "../components/SEO"
import { Page } from "../components/Page"
import { Header } from "semantic-ui-react"
import { ResponsiveSidebar } from "../components/home/sidebar/ResponsiveSidebar"
import gif from "../images/404.gif"
import { ContentWrapper } from "../components/ContentWrapper"
import { useState } from "react"

const styles = style({
  display: "flex",
  alignItems: "row",
  width: "100%",
  height: "100%",
})

interface Props {}

export default function Page404({  }: Props) {
  const [searchVisible, setSearchVisible] = useState(false)

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
      <ResponsiveSidebar
        searchVisible={searchVisible}
        onSearchVisibleChanged={setSearchVisible}
      />
      <ContentWrapper>
        <div style={{ maxWidth: 750 }}>
          <Header as="h1" style={{ marginBottom: 20 }}>
            404
          </Header>
          <img src={gif} />
          <div>
            Whoops! Looks like this page cant be found. Perhaps it was moved,
            try <a onClick={() => setSearchVisible(true)}>searching</a> for it.
          </div>
        </div>
      </ContentWrapper>
    </Page>
  )
}
