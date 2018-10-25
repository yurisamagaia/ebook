import React, { Component } from 'react';
import './Slide.css';
import img1 from './slider1.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={img1} className="slide" alt="Slide1" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
