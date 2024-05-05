import { Navigation } from '@/components/Navigation/Navigation'
import { getPostDatabase } from '@/notionApi/getPostDatabase'
import { Client } from '@notionhq/client'
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'
import { NotionToMarkdown } from 'notion-to-md'
import { container, content, coverImage } from './styles.css'
import { CustomMdxRemote } from '@/components/CustomMdxRemote/CustomMdxRemote'

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

            <CustomMdxRemote source={markdown.parent} />
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
