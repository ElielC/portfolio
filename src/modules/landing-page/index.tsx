import Text from "@/components/Text"
import Layout from "@/modules/layouts/LandingPage"

import { MainContainer } from "./styles"

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <MainContainer>
        <Text>Portfolio</Text>
        <Text>WebSite in initial development</Text>
      </MainContainer>
    </Layout>
  )
}

export default LandingPage
