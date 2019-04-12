import React, { ComponentProps } from "react"
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
