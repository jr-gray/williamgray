import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">William Gray</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about">About Me</NavItem>
            <NavItem eventKey={2} href="#projects">Projects</NavItem>
            <NavItem eventKey={3} href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}