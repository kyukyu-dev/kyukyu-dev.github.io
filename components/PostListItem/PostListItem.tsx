import Image from 'next/image'
import {
  descriptionStyle,
  postDateStyle,
  postListItem,
  textContainer,
  titleStyle,
} from './styles.css'

interface PostListItemProps {
  thumbnailUrl: string
  title: string
  description: string
  postDate: string
}

export function PostListItem({
  thumbnailUrl,
  title,
  description,
  postDate,
}: PostListItemProps) {
  return (
    <li className={postListItem}>
      <Image
        src={thumbnailUrl}
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
    </li>
  )
}
