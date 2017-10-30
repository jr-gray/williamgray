import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    let temp = e.target.name;
    this.setState({
      [temp]: e.target.value
    })
  }

  handleSubmit() {
    let name    = this.state.name;
    let email   = this.state.email;
    let message = this.state.message;

    if (name === null || email === null || message === null) {
      alert('Please fill out all required fields.');
      return;
    }

    if (message.length > 1000) {
      alert('Message must be less than 1000 characters.');
      return;
    } 

    if (email.indexOf('@') === -1) {
      alert('Please enter a valid email address.');
      return;
    }

    let body = { name, email, message }
    
    axios.post('/api/contact/', body)
    .then(response =>
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    )
    .catch(err => console.error(err))

    alert('Message sent!');
  }

  render() {
    return (
      <div id="contact" className="container-fluid contact">
        <div className="row contact-header text-center">
          Contact
        </div>
        <div className="row text-center">
          <input className="input-field input-height" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInput}/>
        </div>
        <div className="row text-center">
          <input className="input-field input-height" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInput}/>
        </div>
        <div className="row text-center">
          <textarea className="input-field" placeholder="Enter your message here..." value={this.state.message} 
            name="message" rows="5" cols="50" onChange={this.handleInput}></textarea>
          <button className="btn btn-primary btn-block" type="Submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}