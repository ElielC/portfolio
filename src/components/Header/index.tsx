import Link from "next/link"

import { SizedBox } from "@/styles/global"
import { Toolbar } from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"

import Logo from "../Logo"
import { AppBar, Spacer } from "./styles"

const Header: React.FC = () => {
  return (
    <AppBar elevation={2} position="fixed">
      <Toolbar>
        <Logo />
        <Spacer />
        <Link href="https://github.com/ElielC" passHref>
          <a target="_blank">
            <GitHub />
          </a>
        </Link>
        <SizedBox width="0.5rem" />
        <Link href="https://www.linkedin.com/in/elielcsilveira" passHref>
          <a target="_blank">
            <LinkedIn />
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
