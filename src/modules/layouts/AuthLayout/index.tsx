import Image from "next/image"
import barretoBackground from "public/assets/barreto-background.png"
import { FC } from "react"
import { useMediaPredicate } from "react-media-hook"

import Logo from "@/components/Logo"

import { Container, ContentContainer, ImageContainer } from "./styles"

const AuthLayout: FC = ({ children }) => {
  const windowSmallerThan720 = useMediaPredicate("(max-width:720px)")

  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
      {!windowSmallerThan720 && (
        <ImageContainer>
          <Image
            src={barretoBackground}
            layout="fill"
            className="image"
            priority
          />
          <Logo isInverted />
        </ImageContainer>
      )}
    </Container>
  )
}

export default AuthLayout
