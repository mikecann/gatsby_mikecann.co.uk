import * as React from "react"
import { style } from "typestyle"
import * as css from "csstips"
import {
  Modal,
  Button,
  Image,
  Header,
  Input,
  Divider,
  Icon,
} from "semantic-ui-react"
import * as algoliasearch from "algoliasearch"
import { useEffect, useState } from "react"
import { PostTeaser } from "../home/PostTeaser"
import { notNull, coverImage } from "../../utils/utils"
import { Post } from "../../pages/index"
import { useWindowSize } from "../../utils/useWindowSize"

const styles = style({})

interface Props {
  onClose: () => void
  open?: boolean
}

type Hit = {
  createdAt: number
  excerpt: string
  objectID: string
  fields: {
    slug: string
  }
  frontmatter: {
    categories: string[]
    date: string
    tags: string[]
    title: string
    coverImage?: string | null
    featuredImage?: {
      childImageSharp?: {
        fluid?: {
          src?: string
        }
      }
    }
  }
}

const client = algoliasearch("JYZJ63OX7U", "01ddc3505766aa8d46cbbd65006671ec")
const index = client.initIndex("gatsbyblog")

export function SearchDialog({ onClose, open }: Props) {
  const [term, setTerm] = useState("")
  const [results, setResults] = useState<Hit[]>([])
  const windowSize = useWindowSize()

  useEffect(() => {
    index.search(term).then(resp => {
      console.log("algolia response", resp)
      setResults(resp.hits)
    })
  }, [term])

  return (
    <Modal open={open} size="small">
      <Modal.Content>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search..."
            value={term}
            style={{ width: "100%", marginRight: 20 }}
            onChange={e => setTerm(e.currentTarget.value)}
          />
          <Button icon onClick={onClose}>
            <Icon name="close" />
          </Button>
        </div>

        <Divider />
        <Modal.Description
          style={{ overflow: "auto", height: windowSize.height - 200 }}
        >
          {results.map(hit => (
            <div key={hit.objectID} style={{ marginTop: 40, marginBottom: 40 }}>
              <Teaser hit={hit} />
              <Divider />
            </div>
          ))}
          {results.length == 0 && (
            <div className={style(css.centerCenter, { height: "100%" })}>
              <Header icon>
                <Icon name="search" />
                No posts matching your query.
              </Header>
            </div>
          )}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

function Teaser({ hit }: { hit: Hit }) {
  const frontmatter = notNull(hit.frontmatter)
  const coverImg = coverImage(hit)
  const url = "/" + hit.fields!.slug
  return (
    <PostTeaser
      title={frontmatter.title + ""}
      coverImg={coverImg}
      date={frontmatter.date + ""}
      excerpt={hit.excerpt + ""}
      url={url + ""}
    />
  )
}
