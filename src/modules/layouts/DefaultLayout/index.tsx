import Header from "@/components/Header"

import { Container, BodyContainer } from "./styles"

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <BodyContainer> {children} </BodyContainer>
    </Container>
  )
}

export default DefaultLayout
