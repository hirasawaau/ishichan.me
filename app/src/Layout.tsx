import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
      <Footer />
    </div>
  )
}
