import Link from "next/link"

import { SizedBox } from "@/styles/global"
import { Toolbar } from "@material-ui/core"
import { GitHub, LinkedIn } from "@material-ui/icons"

import Logo from "../Logo"
import { AppBar, LinkContent, Spacer } from "./styles"

const Header: React.FC = () => {
  return (
    <AppBar elevation={2} position="fixed">
      <Toolbar>
        <Logo />
        <Spacer />
        <Link href="https://github.com/ElielC" passHref>
          <LinkContent target="_blank">
            <GitHub />
          </LinkContent>
        </Link>
        <SizedBox width="0.5rem" />
        <Link href="https://www.linkedin.com/in/elielcsilveira" passHref>
          <LinkContent target="_blank">
            <LinkedIn />
          </LinkContent>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
