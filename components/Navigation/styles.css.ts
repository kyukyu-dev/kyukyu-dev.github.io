import { style } from '@vanilla-extract/css'

export const container = style({
  maxWidth: 1140,
  margin: '0 auto',
})

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '92%',
  margin: '0 auto',
})
