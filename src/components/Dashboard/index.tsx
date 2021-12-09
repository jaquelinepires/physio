
import { useState } from "react";
import { Anotations } from "../Anotations";
import { Summary } from "../Summary";
import { Container } from "./styles";
import Modal from 'react-modal'
import { NewAnotationsModal } from "../NewAnotationsModal";

Modal.setAppElement('#root');

export function Dashboard() {

  // MODAL
  const [isNewAnotationsModalOpen, setIsNewAnotationsModalOpen] = useState(false)
  
  function handleOpenNewAnotationsModal() {
    setIsNewAnotationsModalOpen(true)
  }
  function handleCloseNewAnotationsModal() {
    setIsNewAnotationsModalOpen(false)
  }
  return (
    <Container>
      <Summary onOpenNewAnotationsModal={handleOpenNewAnotationsModal}/>
      <Anotations />
      <NewAnotationsModal
        isOpen={isNewAnotationsModalOpen}
        onRequestClose={handleCloseNewAnotationsModal}
       />

    </Container>
  )
}