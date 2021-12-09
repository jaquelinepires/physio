import Modal from 'react-modal'
import { Container } from './styles'
import close from '../../assets/close.svg'
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
       <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}