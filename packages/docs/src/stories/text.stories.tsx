import { Meta, StoryObj } from '@storybook/react'

import { Text, ITextProps } from '@llh-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod optio quibusdam explicabo veritatis sed, distinctio libero sint ex rem. Commodi veritatis molestiae saepe voluptatibus odit dolorum eaque officia ipsam aliquam.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {
  args: {
    size: "md"
  }
}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}

