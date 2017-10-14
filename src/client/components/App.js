import React, { Component } from 'react';
import Nav from './Nav';
import MyProjects from './MyProjects';
import AboutMe from './AboutMe';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <h1>Hi, I'm William Gray</h1>
        </div>
        <MyProjects />
        <AboutMe />
      </div>
    )
  }
}