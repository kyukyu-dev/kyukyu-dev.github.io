import { style } from '@vanilla-extract/css'

export const content = style({
  maxWidth: 980,
  width: '92%',
  margin: '0 auto',
})

export const header = style({
  paddingTop: 70,
  paddingBottom: 24,
})

export const tagDropdownTrigger = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 36,
  fontWeight: 700,
  lineHeight: 1.3,
  color: '#333D4B',
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
})

export const postList = style({
  padding: 0,
  margin: '16px 0px',
})
