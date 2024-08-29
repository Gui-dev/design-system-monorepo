import { Meta, StoryObj } from '@storybook/react'

import { Box, IBoxProps } from '@llh-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    )
  }
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {
}

