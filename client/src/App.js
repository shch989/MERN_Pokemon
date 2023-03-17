import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
// components
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Background from './components/Background'
// pages
import Search from './pages/Search'
import MyList from './pages/MyList'
import About from './pages/About'
import Compare from './pages/Compare'
import Pokemon from './pages/Pokemon'

const MainContainer = styled.div`
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  height: 100vh;

  .app {
    z-index: 1;
    background: rgba(4, 6, 20, 0.85);
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: 1px solid rgba(23, 20, 20, 0.37);
    display: grid;
    grid-template-rows: 10vh auto 10vh;
    grid-template-columns: 1fr;
  }
`

function App() {
  return (
    <MainContainer>
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MainContainer>
  )
}

export default App
