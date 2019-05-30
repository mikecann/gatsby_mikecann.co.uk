import React from "react"
import { setupPage, normalize } from "csstips"
import { style } from "typestyle"
import { Image } from "semantic-ui-react"
import { SocialIcon } from "./SocialIcon"
import { PageButton } from "./PageButton"
import { Link } from "gatsby"
import { Pages } from "./Pages"
import cover from "../../../images/cover.jpg"
import me from "../../../images/me-shaved-head.jpg"

const styles = style({
  backgroundImage: `url(${cover})`,
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
  position: "fixed",
  top: 0,
  left: 0,
  backgroundSize: "cover",
})

interface Props {
  onOpenSearch: () => any
}

export function TabletSidebar({ onOpenSearch }: Props) {
  return (
    <div className={styles}>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image src={me} circular />
      </div>
      <p>Mike Cann</p>
      <div>
        <Pages onOpenSearch={onOpenSearch} />
      </div>
    </div>
  )
}
