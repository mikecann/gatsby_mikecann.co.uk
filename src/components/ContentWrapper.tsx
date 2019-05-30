import * as React from "react"
import { style } from "typestyle"
import { useWindowSize } from "../utils/useWindowSize"

const styles = style({
  padding: "40px 40px 40px 450px",
  width: "100%",
  height: "100%",
})

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function ContentWrapper(props: Props) {
  const windowSize = useWindowSize()

  let paddingLeft = 450
  if (windowSize.width < 1280) paddingLeft = 250
  if (windowSize.width < 1025) paddingLeft = 100

  return <div className={styles} style={{ paddingLeft }} {...props} />
}
