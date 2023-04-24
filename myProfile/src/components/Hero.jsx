// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`
function Hero() {
  return (
    <Section>
      <Navbar />
    </Section>
  )
}

export default Hero
