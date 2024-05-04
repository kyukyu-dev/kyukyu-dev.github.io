import Image from 'next/image'
import {
  descriptionStyle,
  postDateStyle,
  postListItemLink,
  postListItem,
  textContainer,
  titleStyle,
} from './styles.css'
import Link from 'next/link'

interface PostListItemProps {
  coverUrl: string
  title: string
  description: string
  postDate: string
  postId: string
}

export function PostListItem({
  coverUrl,
  title,
  description,
  postDate,
  postId,
}: PostListItemProps) {
  return (
    <li className={postListItem}>
      <Link href={`/post/${postId}`} className={postListItemLink}>
        <Image
          src={coverUrl}
          alt="포스팅 이미지"
          width={240}
          height={240}
          style={{
            objectFit: 'cover',
            borderRadius: 14,
          }}
        />

        <div className={textContainer}>
          <span className={titleStyle}>{title}</span>
          <p className={descriptionStyle}>{description}</p>
          <span className={postDateStyle}>{postDate}</span>
        </div>
      </Link>
    </li>
  )
}
