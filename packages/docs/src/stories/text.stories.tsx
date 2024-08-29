import { Meta, StoryObj } from '@storybook/react'

import { Text, ITextProps } from '@llh-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod optio quibusdam explicabo veritatis sed, distinctio libero sint ex rem. Commodi veritatis molestiae saepe voluptatibus odit dolorum eaque officia ipsam aliquam.'
  }
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {
}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}

