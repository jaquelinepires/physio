import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Anotation {
  id: number,
  name: string,
  report: string,
  type: string,
  createAt: string,
}
export function Anotations() {
  const [anotations, setAnotations] = useState<Anotation[]>([]);

    useEffect(() => {
      api.get('anotations')
      .then(response => setAnotations(response.data.anotations))
    }, []);

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
              <td>{anotation.createAt}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}