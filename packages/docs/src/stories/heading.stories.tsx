import { Meta, StoryObj } from '@storybook/react'

import { Heading, IHeadingProps } from '@llh-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
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
} as Meta<IHeadingProps>

export const Primary: StoryObj<IHeadingProps> = {
}

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, ams podemos mudar isso com a propriedade `as`',
      },
    },
  },
}

