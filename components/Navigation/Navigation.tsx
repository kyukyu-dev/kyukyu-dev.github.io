import Link from 'next/link'
import Image from 'next/image'
import {
  aboutLink,
  bold,
  container,
  content,
  iconButton,
  navControlList,
  navControlListItem,
  title,
} from './styles.css'

import darkModeIcon from '@/public/icons/dark_mode.svg'
import githubLogo from '@/public/icons/github_logo.svg'

export function Navigation() {
  return (
    <nav className={container}>
      <div className={content}>
        <span className={title}>
          <span className={bold}>Kyukyu</span> Blog
        </span>

        <ul className={navControlList}>
          <li className={navControlListItem}>
            <Link href="/" className={aboutLink}>
              About
            </Link>
          </li>
          <li className={navControlListItem}>
            <button className={iconButton}>
              <Image src={darkModeIcon} alt="다크모드" />
            </button>
          </li>
          <li className={navControlListItem}>
            <button className={iconButton}>
              <Image src={githubLogo} alt="깃허브" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
