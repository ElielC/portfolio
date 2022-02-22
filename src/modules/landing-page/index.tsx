import Head from "next/head"
import Link from "next/link"

import Text from "@/components/Text"
import Layout from "@/modules/layouts/LandingPage"
import { Row, SizedBox } from "@/styles/global"
import { GitHub, LinkedIn } from "@material-ui/icons"

import { HomeDraw, ImageContainer, MainContainer } from "./styles"

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Eliel Silveira</title>
      </Head>
      <MainContainer>
        <Row>
          <Link href="https://github.com/ElielC" passHref>
            <a target="_blank">
              <GitHub fontSize="large" />
            </a>
          </Link>
          <SizedBox width="0.5rem" />
          <Link href="https://www.linkedin.com/in/elielcsilveira" passHref>
            <a target="_blank">
              <LinkedIn fontSize="large" />
            </a>
          </Link>
        </Row>
        <SizedBox height="0.5rem" />
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
