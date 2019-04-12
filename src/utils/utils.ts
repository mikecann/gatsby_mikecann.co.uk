import { Post } from "../pages"

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
    frontmatter.featuredImage.childImageSharp.sizes &&
    frontmatter.featuredImage.childImageSharp.sizes.srcSet
  )
    return frontmatter.featuredImage.childImageSharp.sizes.srcSet

  if (frontmatter && frontmatter.coverImage) return frontmatter.coverImage

  return ""
}
