import { Navigation } from '@/components/Navigation/Navigation'
import { getPostDatabase } from '@/notionApi/getPostDatabase'
import { Client } from '@notionhq/client'
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { NotionToMarkdown } from 'notion-to-md'
import {
  aStyle,
  codeStyle,
  container,
  content,
  coverImage,
  h1Style,
  h2Style,
  h3Style,
  imgStyle,
  olStyle,
  pStyle,
  ulStyle,
} from './styles.css'
import { MDXComponents } from 'mdx/types'

interface PageCoverType {
  cover: {
    type: 'file' | 'external'
    file: {
      url: string
    }
    external: {
      url: string
    }
  }
}

export default async function PostPage({
  params,
}: {
  params: { postId: string }
}) {
  const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_TOKEN,
  })

  const notionPage = (await notion.pages.retrieve({
    page_id: params.postId,
  })) as GetPageResponse & PageCoverType

  const n2m = new NotionToMarkdown({ notionClient: notion })

  const markdownBlocks = await n2m.pageToMarkdown(params.postId)
  const markdown = n2m.toMarkdownString(markdownBlocks)

  return (
    <>
      <Navigation />

      <div className={container}>
        <div className={content}>
          <article style={{ position: 'relative' }}>
            <Image
              src={
                notionPage.cover.type === 'file'
                  ? notionPage.cover.file.url
                  : notionPage.cover.external.url
              }
              alt="포스트 커버 이미지"
              className={coverImage}
              fill
            />

            <MDXRemote
              source={markdown.parent}
              components={{ ...components }}
            />
          </article>
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const response = await getPostDatabase()

  return response.results.map(({ id }) => {
    return {
      postId: id,
    }
  })
}

const components = {
  h1: props => (
    <h1 {...props} className={h1Style}>
      {props.children}
    </h1>
  ),
  h2: props => (
    <h2 {...props} className={h2Style}>
      {props.children}
    </h2>
  ),
  h3: props => (
    <h3 {...props} className={h3Style}>
      {props.children}
    </h3>
  ),
  p: props => (
    <p {...props} className={pStyle}>
      {props.children}
    </p>
  ),
  a: props => (
    <a {...props} target="_blank" className={aStyle}>
      {props.children}
    </a>
  ),
  // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  img: props => <img {...props} className={imgStyle} />,
  code: props => <code {...props} className={codeStyle} />,
  ol: props => <ol {...props} className={olStyle} />,
  ul: props => <ul {...props} className={ulStyle} />,
} as MDXComponents
