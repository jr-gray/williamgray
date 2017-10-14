import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <input type="text"/>
        <input type="text"/>
        <select>
          <option value="">Inquiry</option>
          <option value="">General</option>
          <option value="">Career Opportunity</option>
        </select>
        <textarea rows="5" cols="20"></textarea>
      </div>
    )
  }
}