import * as React from "react"
import { style } from "typestyle"
import * as css from "csstips"
import { PageButton } from "./PageButton"
import { Link } from "gatsby"

const styles = style({})

interface Props {
  onOpenSearch: () => any
  hideLabels?: boolean
}

export function Pages({ onOpenSearch, hideLabels }: Props) {
  return (
    <>
      <Link to="/">
        <PageButton icon="home" label={hideLabels ? "" : "Home"} />
      </Link>
      <Link to="/categories">
        <PageButton icon="list" label={hideLabels ? "" : "Categories"} />
      </Link>
      <Link to="/tags">
        <PageButton icon="tag" label={hideLabels ? "" : "Tags"} />
      </Link>
      <Link to="/archive">
        <PageButton icon="archive" label={hideLabels ? "" : "Archive"} />
      </Link>
      <Link to="/about">
        <PageButton icon="question" label={hideLabels ? "" : "About"} />
      </Link>
      <a href="/rss.xml">
        <PageButton icon="rss" label={hideLabels ? "" : "RSS"} />
      </a>
      <PageButton
        onClick={onOpenSearch}
        icon="search"
        label={hideLabels ? "" : "Search"}
      />
    </>
  )
}
