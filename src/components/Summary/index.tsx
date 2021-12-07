import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <button type="button">Novo paciente</button>
      <div>
        <header>
          <p>Pacientes</p>
        </header>
          <strong>0</strong>
      </div>
      <div>
        <header>
          <p>Prorrogação</p>
        </header>
          <strong>0</strong>
      </div>
      <div>
        <header>
          <p>Alta</p>
        </header>
          <strong>0</strong>
      </div>
    </Container>
  ) 
}