

import React from 'react'
import styled, { keyframes } from 'styled-components'
const UserInformation = () => {
 return (
  <Container>
   Hola
  </Container>
 )
}
export default UserInformation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Container = styled.div`
    display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`
