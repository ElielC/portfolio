import Head from "next/head"

import Text from "@/components/Text"
import Layout from "@/modules/layouts/LandingPage"

import { HomeDraw, ImageContainer, MainContainer } from "./styles"

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Eliel Silveira</title>
      </Head>
      <MainContainer>
        <Text as="h1" size="title.lg" fontWeight="bold">
          Not much to see here Yet. Come back later!
        </Text>
      </MainContainer>
      <ImageContainer>
        <HomeDraw src="/assets/landing-page-draw.svg" />
      </ImageContainer>
    </Layout>
  )
}

export default LandingPage
