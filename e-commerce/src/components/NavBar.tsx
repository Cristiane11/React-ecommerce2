import React from 'react'
import {useAuth} from '../context/AuthContext';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const {user} = useAuth();
  return (
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shopping App</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link as={Link} to="/">Home</Nav.Link>
           <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
           {user ? (
            <>
            
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
            </>
           ):(
           <>
           
            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
           </>
           )
          }
             
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
