import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, AnotationsTypeContainer, RadioBox } from './styles'
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { useAnotations } from '../../hooks/useAnotations'

interface NewAnotationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewAnotationsModal({isOpen, onRequestClose}: NewAnotationModalProps) {
  const { createAnotation } = useAnotations();

  const [name, setName] = useState('')
  const [report, setReport] = useState('')
  const [type, setType] = useState('anotations')

  async function handleCreateNewAnotation(event: FormEvent) {
   event.preventDefault();

   await createAnotation({
    name,
    report,
    type
   })

   setName('');
   setReport('');
   setType('anotations');
   onRequestClose();

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

      <Container onSubmit={handleCreateNewAnotation}>
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