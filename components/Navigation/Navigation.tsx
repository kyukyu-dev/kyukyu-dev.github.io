import Link from 'next/link'
import { container, content } from './styles.css'

export function Navigation() {
  return (
    <nav className={container}>
      <div className={content}>
        <span>넣고 싶은 제목</span>

        <div>
          <Link href="/">About</Link>
          <button></button>
          <button></button>
        </div>
      </div>
    </nav>
  )
}
