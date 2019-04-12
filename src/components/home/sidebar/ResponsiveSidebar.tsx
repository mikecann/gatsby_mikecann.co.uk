import React from "react"
import "semantic-ui-css/semantic.min.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { style } from "typestyle"
import { Responsive } from "semantic-ui-react"
import { LargeScreenSidebar } from "./LargeScreenSidebar"
import { TabletSidebar } from "./TabletSidebar"
import { SearchDialog } from "../../search/SearchDialog"
import { useState } from "react"
import { MobileSidebar } from "./MobileSidebar"

const styles = style({ backgroundColor: "red" })

interface Props extends React.Props<{}> {}

export function ResponsiveSidebar({  }: Props) {
  const [searchVisible, setSearchVisible] = useState(false)
  return (
    <>
      <Responsive minWidth={Responsive.onlyLargeScreen.minWidth}>
        <LargeScreenSidebar onOpenSearch={() => setSearchVisible(true)} />
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyLargeScreen.minWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <TabletSidebar onOpenSearch={() => setSearchVisible(true)} />
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyTablet.minWidth}
        minWidth={Responsive.onlyMobile.minWidth}
      >
        <MobileSidebar onOpenSearch={() => setSearchVisible(true)} />
      </Responsive>
      <SearchDialog
        open={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </>
  )
}
