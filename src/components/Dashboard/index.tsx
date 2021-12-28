
import { useState } from "react";
import { Anotations } from "../Anotations";
import { Summary } from "../Summary";
import { Container } from "./styles";
import Modal from 'react-modal'
import { NewAnotationModal } from "../NewAnotationModal";

Modal.setAppElement('#root');

export function Dashboard() {

  // MODAL
  const [isNewAnotationModalOpen, setIsNewAnotationModalOpen] = useState(false)
  
  function handleOpenNewAnotationModal() {
    setIsNewAnotationModalOpen(true)
  }
  function handleCloseNewAnotationModal() {
    setIsNewAnotationModalOpen(false)
  }
  return (
    <Container>
      <Summary onOpenNewAnotationsModal={handleOpenNewAnotationModal}/>
      <Anotations />
      <NewAnotationModal
        isOpen={isNewAnotationModalOpen}
        onRequestClose={handleCloseNewAnotationModal}
       />

    </Container>
  )
}