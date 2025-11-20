import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/Cart">Shoping Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
