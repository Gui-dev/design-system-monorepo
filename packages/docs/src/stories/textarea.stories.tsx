import { Meta, StoryObj } from '@storybook/react'

import { TextArea, ITextAreaProps, Box, Text } from '@llh-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Observations</Text>
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
} as Meta<ITextAreaProps>

export const Primary: StoryObj<ITextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
}

export const Disabled: StoryObj<ITextAreaProps> = {
  args: {
    disabled: true,
  },
}
