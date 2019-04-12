import React from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { setupPage, normalize } from "csstips"
import { cssRule } from "typestyle"

setupPage("#___gatsby")
//normalize()

cssRule("#___gatsby > div", {
  height: "100%",
})

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function Page(props: Props) {
  return <div data-test-name="page" {...props} />
}
