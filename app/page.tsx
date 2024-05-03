const { Client } = require('@notionhq/client')
import { Navigation } from '@/components/Navigation/Navigation'
import { PostListItem } from '@/components/PostListItem/PostListItem'
import { tagDropdownTrigger, content, header, postList } from './styles.css'

export default async function Home() {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })
  const databaseId = process.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'ready_for_post',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'post_date',
        direction: 'descending',
      },
    ],
  })

  return (
    <>
      <Navigation />

      <div className={content}>
        <div className={header}>
          <button className={tagDropdownTrigger}>카테고리</button>
        </div>

        <ul className={postList}>
          {response.results.map((database: any) => (
            <PostListItem
              key={database.id}
              thumbnailUrl={database.properties.thumbnail.files[0].file.url}
              title={database.properties.title.title[0].plain_text}
              description={
                database.properties.description.rich_text[0].plain_text
              }
              postDate={database.properties.post_date.date.start.replace(
                /-/gi,
                '. '
              )}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
