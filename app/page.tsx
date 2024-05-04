import { Navigation } from '@/components/Navigation/Navigation'
import { PostListItem } from '@/components/PostListItem/PostListItem'
import { tagDropdownTrigger, content, header, postList } from './styles.css'

import dropDownArrow from '@/public/icons/arrow_drop_down.svg'
import Image from 'next/image'
import { getPostDatabase } from '@/notionApi/getPostDatabase'

export default async function Home() {
  const response = await getPostDatabase()

  return (
    <>
      <Navigation />

      <div className={content}>
        <div className={header}>
          <button className={tagDropdownTrigger}>
            전체
            <Image src={dropDownArrow} alt="화살표" />
          </button>
        </div>

        <ul className={postList}>
          {response.results.map((database: any) => (
            <PostListItem
              key={database.id}
              coverUrl={
                database.cover.type === 'file'
                  ? database.cover.file.url
                  : database.cover.external.url
              }
              title={database.properties.title.title[0].plain_text}
              description={
                database.properties.description.rich_text[0].plain_text
              }
              postDate={database.properties.post_date.date.start.replace(
                /-/gi,
                '. '
              )}
              postId={database.id}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
