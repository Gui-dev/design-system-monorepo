import { Meta, StoryObj } from '@storybook/react'

import { Box, IBoxProps, Text } from '@llh-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {
}

