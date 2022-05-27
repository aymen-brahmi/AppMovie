import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
function NavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Series</Nav.Link>
      <Nav.Link href="#features">Movies</Nav.Link>
      <Nav.Link href="#pricing">Mangas</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar