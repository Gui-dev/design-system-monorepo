import {
  MultiStepContainer,
  MultiStepLabel,
  MultiStepSteps,
  Step,
} from './styles'

export interface IMultiStepProps {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: IMultiStepProps) => {
  return (
    <MultiStepContainer>
      <MultiStepLabel>
        Passo {currentStep} de {size}
      </MultiStepLabel>
      <MultiStepSteps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </MultiStepSteps>
    </MultiStepContainer>
  )
}
