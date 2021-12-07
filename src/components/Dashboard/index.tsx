
import { Anotations } from "../Anotations";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Anotations />
    </Container>
  )
}