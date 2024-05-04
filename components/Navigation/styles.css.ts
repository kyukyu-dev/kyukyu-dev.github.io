import { style } from '@vanilla-extract/css'

export const container = style({
  maxWidth: 1140,
  margin: '0 auto',
  height: 60,
})

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '92%',
  margin: '0 auto',
  height: '100%',
})

export const navTitleContainer = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

export const logoEmoji = style({
  fontSize: 24,
  lineHeight: 1.5,
  marginRight: 4,
})

export const title = style({
  fontSize: 16,
  lineHeight: 1.5,
  color: '#333D4B',
  fontWeight: 400,
})

export const bold = style({
  fontWeight: 700,
})

export const navControlList = style({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  height: '100%',
})

export const navControlListItem = style({
  height: 'fit-content',

  selectors: {
    '& + &': {
      marginLeft: 4,
    },
  },
})

export const aboutLink = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 15,
  fontWeight: 500,
  color: '#6B7684',
  textDecoration: 'none',
  padding: '0 12px',
  paddingTop: 16,
  paddingBottom: 14,
  borderRadius: 8,
})

export const iconButton = style({
  background: 'transparent',
  border: 'none',
  height: 48,
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: '0px 12px',
  cursor: 'pointer',
  borderRadius: 8,
})
