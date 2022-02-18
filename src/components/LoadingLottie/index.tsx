import Lottie, { Options } from "react-lottie"

import { Container } from "./styles"

// const defaultOptions: Options = {
//   animationData: loadingAnimationData,
//   loop: true,
//   autoplay: true,
//   rendererSettings: { preserveAspectRatio: "xMiddYMid slice" }
// }

interface LoadingLottieProps {
  width?: string | number | undefined
  height?: string | number | undefined
}

const LoadingLottie: React.FC<LoadingLottieProps> = ({
  height = 200,
  width = 200
}) => {
  return (
    <Container>
      teste
      {/* <Lottie options={defaultOptions} width={width} height={height} /> */}
    </Container>
  )
}

export default LoadingLottie
