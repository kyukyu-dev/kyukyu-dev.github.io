import { Client } from '@notionhq/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { NotionToMarkdown } from 'notion-to-md'

export default async function MdxPage() {
  const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_TOKEN,
  })

  const n2m = new NotionToMarkdown({ notionClient: notion })

  const markdownBlocks = await n2m.pageToMarkdown(
    '1839de74a4234dbc8e1e93355004dd0c'
  )
  const markdown = n2m.toMarkdownString(markdownBlocks)

  return <MDXRemote source={markdown.parent} />
}
