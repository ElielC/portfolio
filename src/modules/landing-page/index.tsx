import Text from "@/components/Text"
import Layout from "@/modules/layouts/LandingPage"

import { MainContainer } from "./styles"

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <MainContainer>
        <Text as="h1" size="title.lg" fontWeight="bold">
          Not much to see here Yet. Come back later!
        </Text>
      </MainContainer>
    </Layout>
  )
}

export default LandingPage
