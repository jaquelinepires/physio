import { useAnotations } from "../../hooks/useAnotations";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { Container } from "./styles";

interface SummaryProps {
  onOpenNewAnotationsModal: () => void;
}

export function Summary({onOpenNewAnotationsModal}:SummaryProps) {
  const { anotations } = useAnotations();

  const summary = anotations.reduce((acc, anotation) => {
    if (anotation.type === 'alta') {
      acc.alta ++
      acc.total ++
    } else {
      acc.prorrogacao ++
      acc.total ++
    }
    return acc;
  }, {
    alta: 0,
    prorrogacao: 0,
    total: 0,

  });
  return (
    <Container>
      <button type="button" onClick={onOpenNewAnotationsModal}>Novo paciente</button>
      <div>
        <header>
          <p>Pacientes</p>
        </header>
          <strong>{summary.total}</strong>
      </div>
      <div>
        <header>
          <p>Prorrogação</p>
          <img src={income} alt="prorogacao" />
        </header>
          <strong>{summary.prorrogacao}</strong>
      </div>
      <div>
        <header>
          <p>Alta</p>
          <img src={outcome} alt="alta" />
        </header>
          <strong>{summary.alta}</strong>
      </div>

    </Container>
      ) 
    }