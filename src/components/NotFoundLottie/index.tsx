import Lottie, { Options } from "react-lottie"

import { Container } from "./styles"

// const defaultOptions: Options = {
//   animationData: notFoundAnimationData,
//   loop: true,
//   autoplay: true,
//   rendererSettings: { preserveAspectRatio: "xMiddYMid slice" }
// }

interface NotFoundLottieProps {
  width?: string | number | undefined
  height?: string | number | undefined
}

const NotFoundLottie: React.FC<NotFoundLottieProps> = ({
  height = 200,
  width = 200
}) => {
  return (
    <Container>
      Teste
      {/* <Lottie options={defaultOptions} width={width} height={height} /> */}
    </Container>
  )
}

export default NotFoundLottie
