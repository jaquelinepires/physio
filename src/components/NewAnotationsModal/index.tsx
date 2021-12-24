import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, AnotationsTypeContainer, RadioBox } from './styles'
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

interface NewAnotationsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewAnotationsModal({isOpen, onRequestClose}: NewAnotationsModalProps) {
  const [name, setName] = useState('')
  const [report, setReport] = useState('')
  const [type, setType] = useState('anotations')

  function handleCreateNewAnotations(event: FormEvent) {
   event.preventDefault()

   console.log(
     name, 
     report,
   )
  }

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
      >
        <img src={close} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewAnotations}>
        <h2>Novo paciente</h2>
        <input 
          placeholder="Nome Completo Paciente"
          value={name}
          onChange={event => setName(event.target.value)}
        />
         <textarea 
          placeholder="Histório Clínico"
          value={report} 
          onChange={event => setReport(event.target.value)}
        />
      <AnotationsTypeContainer>
        <RadioBox
        type="button"
        onClick={() => {setType('anotations')}}
        isActive={type === 'anotations'}
        activeColor="green"
        >
          <img src={income} alt="Prorrogação" />
          <span>Prorrogação</span>
        </RadioBox>
        <RadioBox
        type="button"
        onClick={() => {setType('withdraw')}}
        isActive={type === 'withdraw'}
        activeColor="red"
        >
          <img src={outcome} alt="Alta" />
          <span>Alta</span>
        </RadioBox>
      </AnotationsTypeContainer>
       <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}