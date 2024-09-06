import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$gray-900',
  borderRadius: '$md',
  border: '2px solid $gray-900',
  boxSizing: 'border-box',

  '&:has(input:focus)': {
    borderColor: '$green-300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray-400',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    }
  },

  defaultVariants: {
    size: 'md',
  }
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
