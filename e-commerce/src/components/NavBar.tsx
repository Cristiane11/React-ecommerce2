import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap';


const NavBar = () => {
  return (
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href=".home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="Card">Shoping Card</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
