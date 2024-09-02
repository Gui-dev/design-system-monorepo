import { styled } from '../../styles'
import { Text } from '../text'

export const MultiStepContainer = styled('div', {})

export const MultiStepLabel = styled(Text, {
  color: '$gray-200',

  defaultVariants: {
    size: 'xs',
  },
})

export const MultiStepSteps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  backgroundColor: '$gray-600',
  borderRadius: '$px',
  height: '$1',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray-100',
      },
    },
  },
})
