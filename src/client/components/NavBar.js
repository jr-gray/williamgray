import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    let linkedin = "https://www.linkedin.com/in/wgrayjr";
    let github = "https://www.github.com/jr-gray";

    return (

      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" width="35" height="35" className="d-inline-block align-top" alt=""/>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Menu <span className="caret">
              </span></a>
              <ul className="dropdown-menu">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li role="separator" className="divider"></li>
                <li><a href={linkedin}>Linkedin</a></li>
                <li><a href={github}>Github</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    )
  }
}