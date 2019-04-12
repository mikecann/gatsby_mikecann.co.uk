import React, { ComponentProps } from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { setupPage, normalize } from "csstips"
import { style } from "typestyle"
import { Image, Button, Icon } from "semantic-ui-react"
import { Link } from "gatsby"

const styles = style({
  color: "#88909a",
  $nest: {
    "&:hover": {
      color: "#4a4a4a",
    },
  },
})

interface Props extends ComponentProps<typeof Icon> {
  to?: string
}

export function IconButton({ to, ...rest }: Props) {
  return (
    <Icon
      className={styles}
      {...rest}
      style={{ cursor: "pointer", margin: 5 }}
    />
  )
}
