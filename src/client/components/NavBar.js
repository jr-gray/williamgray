import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {
  render() {
    let linkedin = "https://www.linkedin.com/in/wgrayjr";
    let github = "https://www.github.com/jr-gray";

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          {/* <Navbar.Brand>
            <a href="/">William Gray</a>
          </Navbar.Brand> */}
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href={linkedin}>Linkedin</MenuItem>
              <MenuItem eventKey={3.2} href={github}>Github</MenuItem>
              <MenuItem eventKey={3.4} href="/#projects">Projects</MenuItem>
              <MenuItem eventKey={3.5} href="/#contact">Contact</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}