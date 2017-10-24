import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SyrupCarousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div><img className="carousel-image" src="/images/syrup/home.png" /></div>
        <div><img className="carousel-image" src="/images/syrup/login.png" /></div>
        <div><img className="carousel-image" src="/images/syrup/profile.png" /></div>
        <div><img className="carousel-image" src="/images/syrup/editprofile.png" /></div>
        <div><img className="carousel-image" src="/images/syrup/messaging.png" /></div>
      </Slider>
    );
  }
}