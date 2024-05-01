import { Navigation } from '@/components/Navigation/Navigation'

export default function Home() {
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
        <li>
          {/* <img /> */}

          <div>
            <span>글의 제목</span>
            <p>
              글의 내용입니다. 글의 내용은 길어질 수 있습니다. 내용이 길어질
              경우에는 단어가 끊기지 않도록 단어 단위로 줄바꿈이 됩니다.
            </p>
            <span>2024.04.28</span>
          </div>
        </li>
      </ul>
    </>
  )
}
