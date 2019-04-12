import React, { ComponentProps } from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { setupPage, normalize } from "csstips"
import { style } from "typestyle"
import { Image, Button, Icon, SemanticICONS } from "semantic-ui-react"
import { Link } from "gatsby"

const styles = style({
  color: "#ebebeb !important",
  backgroundColor: "rgba(0,0,0,0) !important",
  $nest: {
    "&:hover": {
      color: "white !important",
    },
  },
})

interface Props extends ComponentProps<typeof Button> {
  icon: SemanticICONS
  label: string
}

export function PageButton({ href, icon, label, ...rest }: Props) {
  return (
    <Button
      className={styles}
      {...rest}
      style={{ cursor: "pointer", margin: 5 }}
    >
      <Icon name={icon} /> {label}
    </Button>
  )
}
