import React, { useState } from 'react'
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
    padding: 0 20rem;
    ul {
      display: grid;
      grid-template-columns: repeat(5, 20%);
      height: 100%;
      list-style-type: none;
      z-index: 1;
      position: relative;
      a {
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid transparent;
        li {
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 500;
          letter-spacing: 0.2rem;
        }
        .underline {
          display: block;
          position: absolute;
          z-index: 0;
          bottom: 0;
          background-color: white;
          width: 20%;
          height: calc((4px) / 2);
          mix-blend-mode: initial;
          pointer-events: none;
          transition: 0.5s ease-in-out;
        }
        &.active {
          li {
            color: #fff;
          }
          .underline {
            width: 100%;
            left: 0;
            transition: 0.5s ease-in-out;
          }
        }
      }
    }
  }
`

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0)

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

  const handleNavigationClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <NavBlock>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" />
      </div>
      <div className="data">
        <ul>
          {navigationRoutes.map(({ name, route }, index) => {
            const isActive = index === activeIndex
            return (
              <Link
                to={route}
                key={index}
                onClick={() => handleNavigationClick(index)}
              >
                <li>{name}</li>
                {isActive && <div className="underline" />}
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
