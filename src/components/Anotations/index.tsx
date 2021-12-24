import { useAnotations } from "../../hooks/useAnotations";
import { Container } from "./styles";


export function Anotations() {
  const { anotations } = useAnotations()
  

  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Nome Paciente</th>
          <th>Relatório</th>
          <th>Status</th>
          <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {anotations.map(anotation => (
              <tr key={anotation.id}>
              <td>{anotation.name}</td>
              <td >{anotation.report}</td>
              <td>{anotation.type}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date (anotation.createAt)
                  )}
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}