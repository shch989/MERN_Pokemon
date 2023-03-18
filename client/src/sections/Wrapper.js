import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  margin: 0 5rem;
  border: 0.5px solid rgba(255, 255, 255, 0.203);
  border-top: none;
  border-bottom: none;
  height: 80vh;
`

function Wrapper(props) {
  return (
    <Content>
      {props.children}
    </Content>
  )
}

export default Wrapper
