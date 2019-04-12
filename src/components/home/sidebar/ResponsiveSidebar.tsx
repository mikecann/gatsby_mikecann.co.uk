import React from "react"
import { style } from "typestyle"
import { Responsive } from "semantic-ui-react"
import { LargeScreenSidebar } from "./LargeScreenSidebar"
import { TabletSidebar } from "./TabletSidebar"
import { SearchDialog } from "../../search/SearchDialog"
import { useState } from "react"
import { MobileSidebar } from "./MobileSidebar"
import { getWidth } from "../../../utils/utils"
import { useWindowSize } from "../../../utils/useWindowSize"

const styles = style({ backgroundColor: "red" })

interface Props extends React.Props<{}> {}

export function ResponsiveSidebar({  }: Props) {
  const [searchVisible, setSearchVisible] = useState(false)
  const { width } = useWindowSize()

  return (
    <div id="sidebar">
      {width > 1280 && (
        <LargeScreenSidebar onOpenSearch={() => setSearchVisible(true)} />
      )}

      {width < 1280 && width > 1024 && (
        <TabletSidebar onOpenSearch={() => setSearchVisible(true)} />
      )}

      {width < 1024 && (
        <MobileSidebar onOpenSearch={() => setSearchVisible(true)} />
      )}

      <SearchDialog
        open={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </div>
  )
}