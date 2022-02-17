import Text from "../Text"
import { Container } from "./styles"

const Copyright: React.FC = () => {
  return (
    <Container>
      <Text size="text.sm" colorKey="black.100">
        © 2022 · Eliel Silveira · All rights reserved
      </Text>
    </Container>
  )
}

export default Copyright
