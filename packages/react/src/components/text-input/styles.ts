import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  backgroundColor: '$gray-900',
  borderRadius: '$md',
  border: '2px solid $gray-900',
  boxSizing: 'border-box',
  padding: '$3 $4',

  '&:has(input:focus)': {
    borderColor: '$green-300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray-400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:placeholder': {
    color: '$gray-400',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
