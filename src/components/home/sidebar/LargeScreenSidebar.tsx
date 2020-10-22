import React, { ComponentProps } from "react"
import { setupPage, normalize } from "csstips"
import { cssRaw, style } from "typestyle"
import { Image, Button, Icon } from "semantic-ui-react"
import { SocialIcon } from "./SocialIcon"
import { PageButton } from "./PageButton"
import { Link } from "gatsby"
import { Pages } from "./Pages"
import cover from "../../../images/cover.jpg"
import me from "../../../images/me-shaved-head.jpg"

cssRaw(`
@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-10px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}
`)

const styles = style({
  backgroundImage: `url(${cover})`,
  width: 400,
  padding: 20,
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
  onOpenSearch: () => void
}

export function LargeScreenSidebar({ onOpenSearch }: Props) {
  return (
    <div className={styles}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px 10px 20px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <Image src={me} circular />
        </div>
      </div>
      <p>Mike Cann</p>
      <p style={{ fontSize: 16 }}>
        A professional software developer that just cant stop tinkering with
        things
      </p>
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <SocialIcon href="https://github.com/mikecann" name="github" />
        <SocialIcon
          href="https://stackoverflow.com/users/521097/mikeysee"
          name="stack overflow"
        />
        <SocialIcon href="https://twitter.com/mikeysee" name="twitter" />
        <SocialIcon href="https://facebook.com/mikeysee" name="facebook" />
        <SocialIcon
          href="https://www.linkedin.com/in/mikecann/"
          name="linkedin"
        />
        <SocialIcon href="mailto:mike.cann@gmail.com" name="mail" />
      </div>
      <div style={{ width: 320 }}>
        <Pages onOpenSearch={onOpenSearch} />
      </div>
    </div>
  )
}
