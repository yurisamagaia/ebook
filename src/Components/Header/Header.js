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
                <NavLink href="#fit" className="menu-item">EMAGRECIMENTO & FIT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#coach" className="menu-item">COACH</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pet" className="menu-item">PETS & NATUREZA</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
