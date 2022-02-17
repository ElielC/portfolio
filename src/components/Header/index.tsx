import { Toolbar } from "@material-ui/core"

import Logo from "../Logo"
import { AppBar, Spacer } from "./styles"

const Header: React.FC = () => {
  return (
    <AppBar elevation={2} position="fixed">
      <Toolbar>
        <Logo />
        <Spacer />
      </Toolbar>
    </AppBar>
  )
}

export default Header
