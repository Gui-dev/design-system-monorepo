import { Meta, StoryObj } from '@storybook/react'

import { Button, IButtonProps } from '@llh-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  }
} as Meta<IButtonProps>

export const Primary: StoryObj<IButtonProps> = {
}

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
  }
}

export const Tertiary: StoryObj<IButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  }
}

export const WithIcon: StoryObj<IButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  }
}

export const Small: StoryObj<IButtonProps> = {
  args: {
    size: 'sm',
  }
}

export const Medium: StoryObj<IButtonProps> = {
  args: {
    size: 'md',
  }
}

export const Desabled: StoryObj<IButtonProps> = {
  args: {
    disabled: true,
  },
}
