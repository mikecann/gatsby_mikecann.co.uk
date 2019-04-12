import React from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { style } from "typestyle"
import { Placeholder, Header, Responsive } from "semantic-ui-react"
import { useWindowSize } from "../../utils/useWindowSize"

const styles = style({
  display: "flex",
})

const imgStyles = style({
  width: 200,
  height: 150,
  objectFit: "cover",
  borderRadius: 6,
})

interface Props {
  title: string
  date: string
  coverImg: string
  url: string
  excerpt: string
}

export function PostTeaser({ title, date, coverImg, url, excerpt }: Props) {
  const windowSize = useWindowSize()
  return (
    <div className={styles}>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <a href={url}>
          {coverImg ? (
            <img className={imgStyles} srcSet={coverImg} />
          ) : (
            <Placeholder>
              <Placeholder.Image
                style={{ width: 200, height: 150, borderRadius: 6 }}
              />
            </Placeholder>
          )}
        </a>
      </Responsive>
      <div style={{ paddingLeft: windowSize.width > 500 ? 20 : 0 }}>
        <Header as="h2">
          <a href={url}>
            <Header as="h2">{title}</Header>
          </a>
          <Header.Subheader>{date}</Header.Subheader>
        </Header>
        <p style={{ fontSize: 16 }}>{excerpt}</p>
        <p style={{ marginTop: 20 }}>
          <a href={url}>Continue reading</a>
        </p>
      </div>
    </div>
  )
}
