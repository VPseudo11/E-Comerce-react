import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/Routes/Home'
import Login from './components/Routes/Login'
import ProductDetail from './components/Routes/ProductDetail'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </AppContainer>
  )
}

const AppContainer = styled.div`

`

export default App
