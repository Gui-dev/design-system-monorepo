import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export interface ICheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = (props: ICheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
      <div></div>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
