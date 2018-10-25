import React, { Component } from 'react';
import './Footer.css';
import img1 from './bg.png';

class Footer extends Component {
  render() {
    return (
      <img src={img1} className="slide" alt="Slide1" />
    );
  }
}

export default Footer;
