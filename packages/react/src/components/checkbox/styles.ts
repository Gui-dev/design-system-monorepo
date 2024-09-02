import * as Checkbox from '@radix-ui/react-checkbox'

import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: '$gray-900',
  border: '2px solid $gray-900',
  borderRadius: '$xs',
  boxSizing: 'border-box',
  lineHeight: 0,
  height: '$6',
  width: '$6',
  overflow: 'hidden',

  '&:focus': {
    border: '2px solid $green-300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$green-300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  height: '$4',
  width: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
