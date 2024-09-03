import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  display: 'flex',
  alignItems: 'baseline',
  color: '$white',
  backgroundColor: '$gray-900',
  borderRadius: '$md',
  border: '2px solid $gray-900',
  boxSizing: 'border-box',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  resize: 'vertical',
  padding: '$3 $4',
  minHeight: 80,

  '&:placeholder': {
    color: '$gray-400',
  },

  '&:focus': {
    outline: 0,
    borderColor: '$green-300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export interface ITextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
