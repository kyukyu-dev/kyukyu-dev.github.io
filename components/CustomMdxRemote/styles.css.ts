import { style } from '@vanilla-extract/css'

export const h1Style = style({
  fontSize: 48,
  fontWeight: 700,
  lineHeight: 1.25,
  color: 'rgb(51, 61, 75)',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
  marginTop: 20,
  marginBottom: 0,
})

export const h2Style = style({
  fontSize: 30,
  lineHeight: 1.55,
  fontWeight: 700,
  color: '#191f28',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const h3Style = style({
  fontSize: 24,
  lineHeight: 1.6,
  fontWeight: 700,
  color: '#191f28',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const pStyle = style({
  fontSize: 17,
  lineHeight: 1.6,
  fontWeight: 400,
  color: '#333d4b',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const aStyle = style({
  color: '#6b7684',
})

export const imgStyle = style({
  width: '100%',
  borderRadius: 16,
})

export const codeStyle = style({
  fontSize: 15.3,
  lineHeight: 1.6,
  backgroundColor: 'rgba(2, 32, 71, 0.05)',
  border: '1px solid rgba(0, 27, 55, 0.1)',
  borderRadius: 3,
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const olStyle = style({
  margin: '24px 0 8px',
  paddingLeft: 24,
})

export const ulStyle = style({
  margin: '24px 0 8px',
  paddingLeft: 24,
})

export const codeWrapperPreStyle = style({
  position: 'relative',
})

export const codeWrapper = style({
  padding: '16px 24px',
  display: 'block',
  minHeight: 48,
  tabSize: 4,
  borderRadius: 8,
  overflowX: 'scroll',

  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
})

export const codeLanguageBox = style({
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: 'black',
  color: 'white',
  padding: 4,
  textTransform: 'uppercase',
})
