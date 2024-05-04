import { style } from '@vanilla-extract/css'

export const postListItem = style({
  listStyle: 'none',

  selectors: {
    '& + &': {
      marginTop: 80,
    },
  },
})

export const postListItemLink = style({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
})

export const textContainer = style({
  marginLeft: 48,
})

export const titleStyle = style({
  display: 'inline-block',
  fontSize: 36,
  lineHeight: 1.4,
  color: '#333D4B',
  fontWeight: 700,
  marginBottom: 14,
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const descriptionStyle = style({
  fontSize: 17,
  lineHeight: 1.6,
  color: '#4E5968',
  fontWeight: 500,
  padding: 0,
  margin: 0,
  marginBottom: 12,
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
})

export const postDateStyle = style({
  display: 'inline-block',
  fontSize: 15,
  lineHeight: 1.6,
  color: '#8B95A1',
  fontWeight: 400,
  padding: 0,
  margin: 0,
})
