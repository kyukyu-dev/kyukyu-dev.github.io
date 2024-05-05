import { MDXComponents } from 'mdx/types'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import {
  aStyle,
  codeStyle,
  h1Style,
  h2Style,
  h3Style,
  imgStyle,
  olStyle,
  pStyle,
  codeWrapper,
  ulStyle,
  codeWrapperPreStyle,
  codeLanguageBox,
} from './styles.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'
import clsx from 'clsx'

export function CustomMdxRemote(props: Omit<MDXRemoteProps, 'components'>) {
  return <MDXRemote {...props} components={{ ...components }} />
}

const components = {
  h1: props => <h1 {...props} className={h1Style}></h1>,
  h2: props => <h2 {...props} className={h2Style}></h2>,
  h3: props => <h3 {...props} className={h3Style}></h3>,
  p: props => <p {...props} className={pStyle}></p>,
  a: props => <a {...props} target="_blank" className={aStyle}></a>,
  // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  img: props => <img {...props} className={imgStyle} />,
  code: ({ children, className }) => {
    const codeLanguage = className?.replace('language-', '')

    // 노션에서 코드 블럭이 아닌 단순 텍스트를 코드로 감싼 형태일 경우
    if (codeLanguage === undefined) {
      return <code className={codeStyle}>{children}</code>
    }
    // 노션에서 코드 블럭으로 표현한 경우
    else {
      return (
        <>
          <span className={codeLanguageBox}>{codeLanguage}</span>

          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(`${children}`, {
                language: codeLanguage,
              }).value,
            }}
          />
        </>
      )
    }
  },
  ol: props => <ol {...props} className={olStyle}></ol>,
  ul: props => <ul {...props} className={ulStyle}></ul>,
  pre: ({ children, ...props }) => (
    <pre
      {...props}
      className={clsx('theme-github-dark-dimmed', codeWrapperPreStyle)}
    >
      <span className={clsx('hljs', codeWrapper)}>{children}</span>
    </pre>
  ),
} as MDXComponents
