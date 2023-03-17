import React from 'react'
import styled from 'styled-components'
import { MdOutlinePowerSettingsNew } from 'react-icons/md'

const FooterBlock = styled.footer`
  display: grid;
  grid-template-columns: 5rem auto 5rem;
  height: auto;
  border-top: 0.5px solid rgba(255, 255, 255, 0.23);
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: #e21b5a;
      font-size: 2.5rem;
      cursor: pointer;
    }
    img {
      cursor: pointer;
      height: 3rem;
    }
  }
  .data {
    border: 0.5px solid rgba(255, 255, 255, 0.23);
    border-top: none;
    border-bottom: none;
  }
`

function Footer() {
  return (
    <FooterBlock>
      <div className="block"></div>
      <div className="data"></div>
      <div className="block">
        <MdOutlinePowerSettingsNew />
      </div>
    </FooterBlock>
  )
}

export default Footer
