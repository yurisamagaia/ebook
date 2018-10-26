import React, { Component } from 'react';
import './Coach.css';
import coach from './img/coach.png';
import logo1 from './img/logo1.jpg';
import logo2 from './img/logo2.png';
import { Parallax } from 'react-parallax';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Coach extends Component {
  render() {
    const remote = './flex.png';
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="texto-fit">
          <h2>Conteúdo Fitness</h2>
          Ser fitness vai muito além do que ter aquele corpão sarado de academia.
          O conceito evoluiu muito e, felizmente, não se refere apenas à prática de atividade física com objetivos estéticos. É muito mais que isso: fitness é a busca pelo bem estar! É o potencializador de diversas atitudes positivas que podem deixar nossa vida muito mais saudável.
          Procure atividades físicas diferentes e tente encaixá-las em seus momentos de lazer. Eu não canso de falar que uma corridinha ou pedalada ao ar livre são ótimas para dar uma descontraída no fim de semana! O mesmo vale para alimentação.
          E, você, o que está esperando para investir em uma vida mais saudável e equilibrada?
          <p><b>Comece pela teoria, nossos E-Books ensinam tudo o que você precisa saber para ter uma vida mais feliz e saudável.</b></p>
        </div>
        <Parallax blur={2} bgImage={coach} strength={500}>
          <div className="box-fit">
            <Slider {...settings}>
              <div className="item">
                <img src={logo1} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo2} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo1} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo2} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo1} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo2} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo1} className="slide" alt="Slide1" />
                Teste
              </div>
              <div className="item">
                <img src={logo2} className="slide" alt="Slide1" />
                Teste
              </div>
            </Slider>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Coach;
