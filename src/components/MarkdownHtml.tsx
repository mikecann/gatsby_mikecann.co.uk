import * as React from "react"
import { style } from "typestyle"
import * as css from "csstips"

const contentStyles = style({
  color: "#5d686f",
  fontWeight: 400,
  fontSize: "1.3rem",
  fontFamily:
    "Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  marginTop: 40,
  marginBottom: 40,
  $nest: {
    img: {
      maxWidth: "100%",
      boxShadow: "0px 0px 10px #bbb !important",
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
