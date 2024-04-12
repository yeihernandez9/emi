import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import AppBarCommponent from '../components/appBar/AppBarCompoonent'

const LayoutPublic = () => {
  return (
    <div>
      <main>
        <AppBarCommponent></AppBarCommponent>
        <Container fixed>
        <Outlet />
        </Container>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default LayoutPublic