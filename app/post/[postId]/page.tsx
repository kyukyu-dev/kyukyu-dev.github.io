import { getPostDatabase } from '@/notionApi/getPostDatabase'
import { Client } from '@notionhq/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { NotionToMarkdown } from 'notion-to-md'

export default async function PostPage({
  params,
}: {
  params: { postId: string }
}) {
  const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_TOKEN,
  })

  const n2m = new NotionToMarkdown({ notionClient: notion })

  const markdownBlocks = await n2m.pageToMarkdown(params.postId)
  const markdown = n2m.toMarkdownString(markdownBlocks)

  return <MDXRemote source={markdown.parent} />
}

export async function generateStaticParams() {
  const response = await getPostDatabase()

  return response.results.map(({ id }) => {
    return {
      postId: id,
    }
  })
}
