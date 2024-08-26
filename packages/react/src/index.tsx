import { colors } from '@llh-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green-500',
  borderRadius: '$md',
})

export const App = () => {
  return (
    <>
      <h1 style={{ color: colors['green-300'] }}>Hello World</h1>
      <Button>Click</Button>
    </>
  )
}
