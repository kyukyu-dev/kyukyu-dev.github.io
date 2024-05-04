import { Client } from '@notionhq/client'

export async function getPostDatabase() {
  const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })
  const databaseId = process.env.NOTION_DATABASE_ID

  if (databaseId === undefined) {
    throw new Error('not valid notion database id')
  }

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

  return response
}
