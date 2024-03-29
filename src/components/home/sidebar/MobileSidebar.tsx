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
  width: 70,
  padding: 5,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  color: "#ebebeb",
  fontSize: 20,
  position: "fixed",
  top: 0,
  left: 0,
  textAlign: "center",
  backgroundSize: "cover",
})

interface Props {
  onOpenSearch: () => any
}

export function MobileSidebar({ onOpenSearch }: Props) {
  return (
    <div className={styles}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 11,
          width: 40,
          height: 40,
        }}
      >
        <Image src={me} circular />
      </div>
      <div>
        <Pages hideLabels onOpenSearch={onOpenSearch} />
      </div>
    </div>
  )
}
