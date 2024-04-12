import React from 'react'
import { Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 0', position: 'fixed', bottom: 0, width: '100%' }}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} My Website. All rights reserved. |{' '}
          <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer