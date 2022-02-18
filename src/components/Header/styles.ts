import styled from "styled-components"

import { AppBar as MaterialAppBar } from "@material-ui/core"

export const AppBar = styled(MaterialAppBar)`
  padding: 0.5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors["grey.900"]};
`

export const Spacer = styled.div`
  flex-grow: 1;
`

export const LinkContent = styled.a`
  color: ${({ theme }) => theme.colors["portfolio-dark"]};
  :hover {
    color: ${({ theme }) => theme.colors["portfolio-mid"]};
  }
`
