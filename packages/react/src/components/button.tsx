import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'right',
  minWidth: 120,
  borderRadius: '$sm',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray-100'
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    height: '$4',
    width: '$4',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green-500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green-300',
        },
        '&:disabled': {
          backgroundColor: '$gray-200',
        },
      },
      secondary: {
        color: '$green-300',
        border: '2px solid $green-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$green-500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray-200',
          border: '2px solid $gray-200',
        },
      },
      tertiary: {
        color: '$gray-100',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray-600',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface IButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
