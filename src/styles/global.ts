import styled, { createGlobalStyle } from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
interface sizedBoxProps {
  height?: string
  width?: string
}
export const SizedBox = styled.div<sizedBoxProps>`
  height: ${props => props.height};
  width: ${props => props.width};
`

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif
  }

  html, body, #__next {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    border: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors["grey.800"]};
    color: ${({ theme }) => theme.colors["white.100"]};
    font-size: 16px;
  }

  ::-moz-selection {
    color: ${({ theme }) => theme.colors["white.100"]};
    background: ${({ theme }) => theme.colors["portfolio-light"]};
  }

  ::selection {
    color: ${({ theme }) => theme.colors["white.100"]};
    background: ${({ theme }) => theme.colors["portfolio-light"]};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["white.100"]};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${({ theme }) => theme.colors["portfolio-light"]};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors["portfolio-dark"]};
  }

  #__next {
    button, a{
      cursor: pointer;
    }

    a {
      color: ${({ theme }) => theme.colors["portfolio-dark"]};
      :hover {
        color: ${({ theme }) => theme.colors["portfolio-mid"]};
      }
      text-decoration: none;
    }
  }
`
