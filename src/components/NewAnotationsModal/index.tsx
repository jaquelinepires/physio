import Modal from 'react-modal'

interface NewAnotationsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewAnotationsModal({isOpen, onRequestClose}: NewAnotationsModalProps) {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    >
      <h2>Novo paciente</h2>
    </Modal>
  )
}