import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';

export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Brand href="http://martinyeh.com">Dr. Yeh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#publications">Publications</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}