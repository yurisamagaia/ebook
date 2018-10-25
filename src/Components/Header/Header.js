import React, { Component } from 'react';
import './Header.css';
import Logo from './logo.svg';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Navbar color="faded" light fixed="top" expand="md" className="nav">
        <Container>
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="auto" navbar>
              <NavItem>
                <NavLink href="#company" className="menu-item">QUEM SOMOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#comments" className="menu-item">DEPOIMENTOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services" className="menu-item">SERVIÇOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#consult" className="menu-item">CONSULTAR ENTREGAS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="menu-item">CONTATO</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
