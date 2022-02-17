import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors["white.100"]};

  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.colors["brown.100"]};
  background-color: ${({ theme }) => theme.colors["white.100"]};

  align-items: center;
  justify-content: center;
`
