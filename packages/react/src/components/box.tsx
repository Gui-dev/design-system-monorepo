import { ComponentProps } from '@stitches/react'
import { styled } from './../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray-800',
  border: '1px solid $gray-600',
})

export interface IBoxProps extends ComponentProps<typeof Box> {}
