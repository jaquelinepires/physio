import { Container } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

interface SummaryProps {
  onOpenNewAnotationsModal: () => void;
}

export function Summary({onOpenNewAnotationsModal}:SummaryProps) {
  return (
    <Container>
      <button type="button" onClick={onOpenNewAnotationsModal}>Novo paciente</button>
      <div>
        <header>
          <p>Pacientes</p>
        </header>
          <strong>0</strong>
      </div>
      <div>
        <header>
          <p>Prorrogação</p>
          <img src={income} alt="Admisson" />
        </header>
          <strong>0</strong>
      </div>
      <div>
        <header>
          <p>Alta</p>
          <img src={outcome} alt="Admisson" />
        </header>
          <strong>0</strong>
      </div>

    </Container>
      ) 
    }