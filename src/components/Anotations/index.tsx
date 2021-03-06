import { useAnotations } from "../../hooks/useAnotations";
import { Container } from "./styles";
import pincel from "../../assets/pencil.svg"
import excluir from "../../assets/excluir.svg"


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
              <td>{anotation.report}</td>
              <td className={anotation.type}>{anotation.type}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date (anotation.createAt)
                  )}
                  <div>
              <button>
                <img src={pincel} alt="edit" />
                 Editar
                </button>
                
              <button>
              <img src={excluir} alt="delete" />Excluir</button>
              </div>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}