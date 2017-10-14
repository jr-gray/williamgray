import React, { Component } from 'react';

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
    console.log('name:', this.state.name);
    console.log('email:', this.state.email);
    console.log('message:', this.state.message);
    this.setState({
      name: '',
      email: '',
      message: ''
    }, () => { alert('Message sent!'); })
  }

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <span>Name:</span>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
        <span>Email:</span>
        <input type="text" name="email" value={this.state.email} onChange={this.handleInput}/>
        <textarea placeholder="Enter your message here..." value={this.state.message} 
          name="message" rows="5" cols="20" onChange={this.handleInput}></textarea>
        <button className="btn btn-primary btn-block" type="Submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}