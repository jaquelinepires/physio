import { Container } from "./styles";

export function Anotations() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Nome Paciente</th>
          <th>Quadro Clinico</th>
          <th>Endereço</th>
          <th>Contato</th>
          <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="admission">João cardoso</td>
            <td className="admission">AVC-I</td>
            <td className="admission">travessa domingos pires</td>
            <td className="admission">71 986224674</td>
            <td className="admission">12/08/2001</td>
          </tr>
          <tr>
            <td className="withdraw">João cardoso</td>
            <td className="withdraw">AVC-I</td>
            <td className="withdraw"> travessa domingos pires</td>
            <td className="withdraw">71 986224674</td>
            <td className="withdraw">12/08/2001</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}