import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Anotations() {

    useEffect(() => {
      api.get('anotations')
      .then(response => console.log(response.data))
    },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Nome Paciente</th>
          <th>Relatório</th>
          <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="admission">João cardoso</td>
            <td className="admission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est perspiciatis optio. Non mollitia blanditiis adipisci rerum reiciendis ea, possimus odit perspiciatis repellat vitae beatae quibusdam quae sint obcaecati sunt.</td>
            <td className="admission">12/08/2001</td>
          </tr>
          <tr>
            <td className="withdraw">João cardoso</td>
            <td className="withdraw">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis est perspiciatis optio. Non mollitia blanditiis adipisci rerum reiciendis ea, possimus odit perspiciatis repellat vitae beatae quibusdam quae sint obcaecati sunt.</td>
            <td className="withdraw">12/08/2001</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}