import React from 'react'
import styled from 'styled-components'

import pokeball1 from '../assets/pokeball.png'
import pokeball2 from '../assets/pokeball2.png'

const BackGroundStyle = styled.div`
  z-index: -1;
  position: absolute;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  img {
    max-inline-size: 100%;
    block-size: auto;
    height: 20rem;
  }
`

function Background() {
  return <BackGroundStyle>
    <img src={pokeball1} alt="pokeball" className='pokeball pokeball1' />
    <img src={pokeball2} alt="pokeball" className='pokeball pokeball2' />
    <img src={pokeball1} alt="pokeball" className='pokeball pokeball3' />
    <img src={pokeball2} alt="pokeball" className='pokeball pokeball4' />
    <img src={pokeball1} alt="pokeball" className='pokeball pokeball5' />
    <img src={pokeball2} alt="pokeball" className='pokeball pokeball6' />
  </BackGroundStyle>
}

export default Background
