import React, { Component } from 'react';
import './Coach.css';
import coach from './img/coach.png';
import logo1 from './img/logo1.jpg';
import logo2 from './img/logo2.png';
import { Parallax } from 'react-parallax';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Button } from 'reactstrap';


const ProductItem = ({ category, name }) => (
  <Card className="box flex-spread">
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBody className={`category--${category}`}>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);

const ProductItems = ({ state: { products, displayCategory } }) => (
  <div>
    {products.filter(({ category }) => displayCategory === category || displayCategory === "all").map(({ category, name }) => (
      <ProductItem key={`ProductItems-${name}`} category={category} name={name} />
    ))}
  </div>
);

const ButtonCategories = (productCategories, setCategory ) => (
  productCategories.map((category) => (
    <Button color="primary" key={category} className={`btn-${category}`} onClick={() => setCategory(category)}>
      {category}
    </Button>
  ))
);

const UI = ({
    state,
    state: { productCategories },
    setCategory,
    allProducts
  }) => (
    <Container>
      <Row>
        <Col xs="12">
          {ButtonCategories(productCategories, setCategory )}
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <ProductItems state={state} />
        </Col>
      </Row>
   </Container>
);

const PRODUCTS = [
  { category: "entertainment", name: "Football" },
  { category: "entertainment", name: "Baseball" },
  { category: "entertainment", name: "Basketball" },
  { category: "fashion", name: "iPod Touch" },
  { category: "design", name: "iPhone 5" },
  { category: "design", name: "Nexus 7" },
  { category: "leisure", name: "Holiday" }
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();

class Coach extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "all",
      products: PRODUCTS,
      productCategories: PRODUCT_CATEGORIES
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    });
  }
  render() {
    return <UI setCategory={this.setCategory} state={this.state} />;
  }
}

export default Coach;
