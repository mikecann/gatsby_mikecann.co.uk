import { Post } from "../pages"
import { Responsive } from "semantic-ui-react"

export type Maybe<T> = T | null | undefined

export function urlify(str: Maybe<string>) {
  if (!str) return ""
  const url = str
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9\-]+/g, "")
    .split("---")
    .join("-")
    .split("--")
    .join("-")

  if (url.length > 0 && url[url.length - 1] == "-")
    return url.substr(0, url.length - 1)

  return url
}

export function notNull<T extends unknown>(obj: T | undefined | null): T {
  if (obj == undefined || obj == null)
    throw new Error("Object should not be null or undefined")
  return obj
}

export const open = (url: string, target = "_blank") => () =>
  window.open(url, target)

export function coverImage(post: any): string {
  const frontmatter = notNull(post.frontmatter)

  if (
    frontmatter.featuredImage &&
    frontmatter.featuredImage.childImageSharp &&
    frontmatter.featuredImage.childImageSharp.fluid
  )
    return (
      frontmatter.featuredImage.childImageSharp.fluid.srcSet ||
      frontmatter.featuredImage.childImageSharp.fluid.src
    )

  if (frontmatter && frontmatter.coverImage) return frontmatter.coverImage

  return ""
}

export const getWidth = (): number => {
  const isSSR = typeof window === "undefined"
  return (isSSR
    ? Responsive.onlyLargeScreen.minWidth
    : window.innerWidth) as any
}
