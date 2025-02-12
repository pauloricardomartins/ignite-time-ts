import { Play } from '@phosphor-icons/react/dist/ssr'
import {
  CountDownContainer,
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  HomeContainer,
  Separator,
  ButtonContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput
            type='text'
            id='task'
            placeholder='de um nome para o seu projeto'
            list='task-suggestions'
          />
          <datalist id='task-suggestions'>
            <option value='Projeto 1'></option>
            <option value='Projeto 2'></option>
            <option value='Projeto 3'></option>
          </datalist>
          <label htmlFor='minutesAmount'>durante</label>
          <MinutesAmountInput
            type='number'
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <ButtonContainer disabled type='submit'>
          <Play size={24} />
          Começar
        </ButtonContainer>
      </form>
    </HomeContainer>
  )
}
