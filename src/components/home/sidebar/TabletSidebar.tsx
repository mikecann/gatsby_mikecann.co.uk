import React from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { setupPage, normalize } from "csstips"
import { style } from "typestyle"
import { Image } from "semantic-ui-react"
import { SocialIcon } from "./SocialIcon"
import { PageButton } from "./PageButton"
import { Link } from "gatsby"
import { Pages } from "./Pages"

const styles = style({
  backgroundImage: "url(/images/cover.jpg)",
  width: 200,
  padding: 20,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  color: "#ebebeb",
  fontSize: 20,
  textAlign: "center",
})

interface Props {
  onOpenSearch: () => any
}

export function TabletSidebar({ onOpenSearch }: Props) {
  return (
    <div className={styles}>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image src="/images/me-shaved-head.jpg" circular />
      </div>
      <p>Mike Cann</p>
      <div>
        <Pages onOpenSearch={onOpenSearch} />
      </div>
    </div>
  )
}
