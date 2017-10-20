import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="container">
        <h2 className="section-header text-center">About Me</h2>
        <span>
          <p>I'm a software engineer with a passion for designing and building full stack apps. 
          I've been developing software for five years, both personally and professionally.</p> 
        
          <p>Shortly after I graduated from Brown, I taught myself to code in Python and 
          JavaScript. I worked at Encore Capital Group for a few years, where I did data 
          analytics and built ETLs in Python and SQL. During my free time, I learned computer 
          science fundamentals, picked up new frameworks and started building full-stack apps.</p>
        
          <p>My latest project is a web app that allows users to practice investing in 
          cryptocurrencies like Bitcoin and track their performance over time. It's a great 
          introduction to the volatile cryptocurrency market. Check it out 
          at http://www.woolfey.com!</p>
        
          <p>Tech (advanced): JavaScript (ES6), Python, SQL, React + Redux, Angular 4, 
          Node.js, Express.js, TypeScript, MongoDB, PostgreSQL, MySQL, CSS3 + LESS/SASS, 
          HTML5, Bootstrap.js, jQuery, Redis.</p>
        
          <p>Tech (experienced): AWS (Amazon Web Services), EC2, S3, Django, Flask, 
          Cron, Docker.</p>
        
          <p>Check out screenshots of my work below, and find the code 
          at https://www.github.com/jr-gray.</p>
        
          <p>Feel free to contact me at jrgrayy@gmail.com!</p>
        </span>
      </div>
    )
  }
}