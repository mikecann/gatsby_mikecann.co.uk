import * as React from "react"
import { style } from "typestyle"
import * as css from "csstips"

const contentStyles = style({
  color: "#5d686f",
  fontWeight: 400,
  fontSize: "1.3rem",
  marginTop: 40,
  marginBottom: 40,
  $nest: {
    img: {
      maxWidth: "100%",
    },
  },
})

const styles = style({})

interface Props {
  html?: string | null
}

export function MarkdownHtml({ html }: Props) {
  return (
    <div
      className={contentStyles}
      dangerouslySetInnerHTML={{ __html: html + "" }}
    />
  )
}
