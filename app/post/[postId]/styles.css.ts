import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 700,
  marginBottom: 80,
  margin: '0 auto',
})

export const content = style({
  width: '92%',
  maxWidth: 'calc(100% - 48px)',
  margin: '0 auto',
})

export const coverImage = style({
  borderRadius: 12,
  aspectRatio: '16 / 9',
  overflow: 'clip',
  // @ts-ignore
  position: 'relative !important',
  height: 'unset !important',
  marginTop: 36,
})
