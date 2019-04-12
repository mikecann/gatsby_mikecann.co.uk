import React, { ComponentProps } from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { setupPage, normalize } from "csstips"
import { style } from "typestyle"
import { Image, Button, Icon } from "semantic-ui-react"

const styles = style({
  color: "#ebebeb",
  $nest: {
    "&:hover": {
      color: "white",
    },
  },
})

interface Props extends ComponentProps<typeof Icon> {
  href: string
}

export function SocialIcon({ href, ...rest }: Props) {
  return (
    <a href={href} target="_blank">
      <Icon
        className={styles}
        {...rest}
        style={{ cursor: "pointer", margin: 5 }}
      />
    </a>
  )
}
