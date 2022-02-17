import styled from "styled-components"

import { Card as MaterialCard, CardContent } from "@material-ui/core"

export const BarretoCard = styled(MaterialCard)`
  min-height: 1rem;
  min-width: 1rem;
  max-width: 80rem;
  background-color: ${({ theme }) => theme.colors["white.100"]};
  color: ${({ theme }) => theme.colors["black.100"]};
`

export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`

export const Label = styled.h2`
  color: ${({ theme }) => theme.colors["black.100"]};
  padding-bottom: 1rem;
`

export const Description = styled.h4`
  color: ${({ theme }) => theme.colors["gray.300"]};
  padding-bottom: 2rem;
  padding-top: 1rem;
`

export const CardSpacer = styled.div`
  height: 2rem;
`
