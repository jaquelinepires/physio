import Modal from 'react-modal'
import { Container, AnotationsTypeContainer } from './styles'
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

interface NewAnotationsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewAnotationsModal({isOpen, onRequestClose}: NewAnotationsModalProps) {
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

      <Container>
        <h2>Novo paciente</h2>
        <input 
          placeholder="Nome Completo Paciente"
        />
         <textarea 
          placeholder="Histório Clínico" 
        />
      <AnotationsTypeContainer>
        <button
        type="button"
        >
          <img src={income} alt="Prorrogação" />
          <span>Prorrogação</span>
        </button>
        <button
        type="button"
        >
          <img src={outcome} alt="Alta" />
          <span>Alta</span>
        </button>
      </AnotationsTypeContainer>
       <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}