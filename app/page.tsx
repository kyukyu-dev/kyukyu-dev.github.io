const { Client } = require('@notionhq/client')
import { Navigation } from '@/components/Navigation/Navigation'

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

      <div>
        <button>
          카테고리
          <svg />
        </button>
      </div>

      <ul>
        {response.results.map((database: any) => (
          <li key={database.id}>
            <div>
              <span>{database.properties.title.title[0].plain_text}</span>
              <p>{database.properties.description.rich_text[0].plain_text}</p>
              <span>{database.properties.post_date.date.start}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
