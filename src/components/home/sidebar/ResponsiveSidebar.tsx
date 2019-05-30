import React, { useEffect } from "react"
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

interface Props extends React.Props<{}> {
  searchVisible?: boolean
  onSearchVisibleChanged?: (b: boolean) => any
}

export function ResponsiveSidebar(props: Props) {
  const [searchVisible, setSearchVisible] = useState(
    props.searchVisible || false
  )
  const { width } = useWindowSize()

  useEffect(() => {
    setSearchVisible(props.searchVisible || false)
  }, [props.searchVisible])

  useEffect(() => {
    props.onSearchVisibleChanged && props.onSearchVisibleChanged(searchVisible)
  }, [searchVisible])

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
