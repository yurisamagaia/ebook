import React, { Component } from 'react';
import './Fit.css';
import flex from './flex.png';
import logo1 from './logo1.jpg';
import logo2 from './logo2.png';
import { Parallax } from 'react-parallax';
import ReactPlayer from 'react-player'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Fit extends Component {

  constructor(props) {
    super(props);
    props = {
      className: 'modal'
    }
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const remote = './flex.png';
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      slidesPerRow: 1,
      rows: 1,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
        <Parallax blur={3} bgImage={flex} strength={500}>
          <div className="box-fit">
            <Slider {...settings}>
              <div className="item">
                <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="slide" /></a>
                <Button color="info" className="btn-phone" block onClick={this.toggle}>Detalhes</Button>
                <Button type="submit" color="success" className="btn-phone" block>Comprar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Queima de gordura abdominal</ModalHeader>
                  <ModalBody>
                    <ReactPlayer url='https://vimeo.com/284773828' playing />
                    <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="image-modal" /></a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="item">
                <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="slide" /></a>
                <Button color="info" className="btn-phone" block onClick={this.toggle}>Detalhes</Button>
                <Button type="submit" color="success" className="btn-phone" block>Comprar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Queima de gordura abdominal</ModalHeader>
                  <ModalBody>
                    <ReactPlayer url='https://vimeo.com/284773828' playing />
                    <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="image-modal" /></a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="item">
                <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="slide" /></a>
                <Button color="info" className="btn-phone" block onClick={this.toggle}>Detalhes</Button>
                <Button type="submit" color="success" className="btn-phone" block>Comprar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Queima de gordura abdominal</ModalHeader>
                  <ModalBody>
                    <ReactPlayer url='https://vimeo.com/284773828' playing />
                    <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="image-modal" /></a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="item">
                <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="slide" /></a>
                <Button color="info" className="btn-phone" block onClick={this.toggle}>Detalhes</Button>
                <Button type="submit" color="success" className="btn-phone" block>Comprar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Queima de gordura abdominal</ModalHeader>
                  <ModalBody>
                    <ReactPlayer url='https://vimeo.com/284773828' playing />
                    <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="image-modal" /></a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              <div className="item">
                <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="slide" /></a>
                <Button color="info" className="btn-phone" block onClick={this.toggle}>Detalhes</Button>
                <Button type="submit" color="success" className="btn-phone" block>Comprar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Queima de gordura abdominal</ModalHeader>
                  <ModalBody>
                    <ReactPlayer url='https://vimeo.com/284773828' playing />
                    <a href="https://go.hotmart.com/U9686224C"><img src="http://www.experienciamarketing.com.br/2018/mmi/saopaulo/hotmart/novembro/hotmart-mmi-sp-novembro-250x250.jpg" className="image-modal" /></a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </Slider>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Fit;
