import { Meta, StoryObj } from '@storybook/react'

import { Checkbox, ICheckboxProps, Box, Text } from '@llh-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size="sm">React</Text>
        </Box>
      )
    }
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
} as Meta<ICheckboxProps>

export const Primary: StoryObj<ICheckboxProps> = {
}

export const Disabled: StoryObj<ICheckboxProps> = {
}
