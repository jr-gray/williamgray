import React, { Component } from 'react';
import NavBar from './NavBar';
import Intro from './Intro.jsx';
import MyProjects from './MyProjects';
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Intro />
        <AboutMe />
        <MyProjects />
        <ContactForm />
      </div>
    )
  }
}