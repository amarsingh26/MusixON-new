import React from 'react';
import "./navbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useLocation} from 'react-router-dom';

function NavBar(props) {
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >MusixON</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/library" activeClassName="active" eventKey="/">Library</Nav.Link>
            <Nav.Link href="/feed" activeClassName="active" eventKey="/">Feed</Nav.Link>
            <Nav.Link href="/trending" activeClassName="active" eventKey="/">Trending</Nav.Link>
            <Nav.Link href="/player" activeClassName="active" eventKey="/">Player</Nav.Link>
            <Nav.Link href="/favorites" activeClassName="active" eventKey="/">Favorites</Nav.Link>
            <Nav.Link href="/contact" activeClassName="active" eventKey="/">Contact Us</Nav.Link>
           
            {/* <Nav.Link href="/register" activeClassName="active" eventKey="/">SIGNUP</Nav.Link> */}
             {/* <NavDropdown title={props.name} id="basic-nav-dropdown"> 
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
             </NavDropdown> */}
          </Nav>
         
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
            <Nav className="me-auto"></Nav><Nav className="me-auto"></Nav>
          <Navbar.Brand >{props.name}</Navbar.Brand>
          <Nav className="me-auto">
            
          
          <Nav.Link href="/logout" activeClassName="active" eventKey="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;