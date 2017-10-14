import React, { Component } from 'react';
import NavBar from './NavBar';
import MyProjects from './MyProjects';
import AboutMe from './AboutMe';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Hi, I'm William Gray</h1>
        <MyProjects />
        <AboutMe />
      </div>
    )
  }
}