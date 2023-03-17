import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import pokeballIcon from '../assets/pokeball-icon.png'

const NavBlock = styled.nav`
  display: grid;
  grid-template-columns: 5rem auto 5rem;
  height: auto;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.23);
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      font-size: 2rem;
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

function Navbar() {
  const navigationRoutes = [
    {
      name: 'Search',
      route: '/search',
    },
    {
      name: 'Compare',
      route: '/compare',
    },
    {
      name: 'Pokemon',
      route: '/pokemon',
    },
    {
      name: 'My List',
      route: '/list',
    },
    {
      name: 'About',
      route: '/about',
    },
  ]

  return (
    <NavBlock>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" />
      </div>
      <div className="data">
        <ul>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            )
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </NavBlock>
  )
}

export default Navbar
