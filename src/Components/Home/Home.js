import React, { Component } from 'react';
import './Home.css';
import ScrollableAnchor from 'react-scrollable-anchor'

import Header from '../Header/Header';
import Slide from '../Slide/Slide';
import Fit from '../Fit/Fit';
import Coach from '../Coach/Coach';
import Footer from '../Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slide />
        <ScrollableAnchor id={'fit'}>
          <Fit />
        </ScrollableAnchor>
        <ScrollableAnchor id={'coach'}>
          <Coach />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default Home;
