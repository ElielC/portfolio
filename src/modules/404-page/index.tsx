import Head from "next/head"
import { useRouter } from "next/router"

import Button from "@/components/Button"
import NotFoundLottie from "@/components/NotFoundLottie"
import { ArrowBack } from "@material-ui/icons"

import {
  Container,
  AnimationContainer,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubtitle
} from "./styles"

const NotFound: React.FC = () => {
  const router = useRouter()

  function handleBackButton() {
    router.back()
  }

  return (
    <Container>
      <Head>
        <title>404</title>
      </Head>
      <AnimationContainer>
        <NotFoundLottie width={"35rem"} height={"35rem"} />
      </AnimationContainer>
      <NotFoundContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Ops! A página não foi encontrada!</NotFoundSubtitle>
        <Button buttoncolor="primary" onClick={handleBackButton}>
          <ArrowBack />
          Voltar à página anterior
        </Button>
      </NotFoundContainer>
    </Container>
  )
}

export default NotFound
