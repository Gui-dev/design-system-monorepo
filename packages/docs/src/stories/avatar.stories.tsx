import { Meta, StoryObj } from '@storybook/react'

import { Avatar, IAvatarProps } from '@llh-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Gui-dev.png',
    alt: 'Gui Silva'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {
}

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
}
