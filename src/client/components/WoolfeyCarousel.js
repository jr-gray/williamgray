import React, { Component } from 'react';
import Slider from 'react-slick';

export default class WoolfeyCarousel extends Component {
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
        <div><img className="carousel-image" src="/images/woolfey/home.png" /></div>
        <div><img className="carousel-image" src="/images/woolfey/login.png" /></div>
        <div><img className="carousel-image" src="/images/woolfey/portlanding.png" /></div>
        <div><img className="carousel-image" src="/images/woolfey/currinfo.png" /></div>
        <div><img className="carousel-image" src="/images/woolfey/purchase.png" /></div>
      </Slider>
    );
  }
}