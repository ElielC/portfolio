import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
`

export const NotFoundTitle = styled.text`
  font: bold 15rem "Open Sans", sans-serif;
`

export const NotFoundSubtitle = styled.text`
  font: bold 2rem "Open Sans", sans-serif;
  margin-bottom: 2rem;
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-grow: 0.4;
  height: 100%;

  align-items: center;
  justify-content: center;
`

export const NotFoundContainer = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`
