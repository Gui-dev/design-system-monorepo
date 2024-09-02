import { Meta, StoryObj } from '@storybook/react'

import { MultiStep, IMultiStepProps, Box } from '@llh-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      )
    }
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
} as Meta<IMultiStepProps>

export const Primary: StoryObj<IMultiStepProps> = {
}

export const Full: StoryObj<IMultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
