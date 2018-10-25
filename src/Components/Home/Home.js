import React, { Component } from 'react';
import './Home.css';

import Header from '../Header/Header';
import Slide from '../Slide/Slide';
import Fit from '../Fit/Fit';
import Footer from '../Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slide />
        <Fit />
        <Footer />
      </div>
    );
  }
}

export default Home;
