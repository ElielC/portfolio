import Copyright from "@/components/Copyright"
import LogoContainer from "@/components/LogoContainer"

import { GridContainer } from "./styles"

const BaseLayout: React.FC = ({ children }) => {
  return (
    <GridContainer>
      <LogoContainer />
      {children}
      <Copyright />
    </GridContainer>
  )
}

export default BaseLayout
