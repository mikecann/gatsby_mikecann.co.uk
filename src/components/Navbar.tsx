import * as React from "react"
import { style } from "typestyle"
import { Transition, Container, Icon } from "semantic-ui-react"
import { IconButton } from "./IconButton"
import { Link } from "gatsby"

const styles = style({
  height: 60,
  width: "100%",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 100,
  boxShadow: "0 1px 4px 0 rgba(34,36,38,.25)",
})

const innerStyles = style({
  paddingLeft: 20,
  paddingRight: 20,
  display: "flex",
  width: "100%",
  height: "100%",
  fontSize: 20,
  alignItems: "center",
  color: "#88909a",
})

interface Props {
  visible?: boolean
  onOpenSearch: () => void
}

export function Navbar({ visible, onOpenSearch }: Props) {
  return (
    <Transition.Group animation="fade up" duration={250}>
      {visible && (
        <div className={styles}>
          <div className={innerStyles}>
            <Link to="/">
              <IconButton name="home" />
            </Link>
            <div style={{ flex: 1, textAlign: "center" }}>
              <Link to="/" style={{ color: "#88909a" }}>
                mikecann.co.uk
              </Link>
            </div>
            <IconButton name="search" onClick={onOpenSearch} />
          </div>
        </div>
      )}
    </Transition.Group>
  )
}
